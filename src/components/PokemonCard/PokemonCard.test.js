import React from 'react'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import { Placeholder } from 'semantic-ui-react'
import ImageSwitcher from '@components/UI/ImageSwitcher'
import PokemonCard from './PokemonCard'

configure({ adapter: new Adapter() })

describe('<PokemonCard />', () => {
	it('Should render placeholder skeleton if loading', () => {
		const wrapper = shallow(<PokemonCard loading />)
		expect(wrapper.find(Placeholder)).toHaveLength(1)
	})

	it('Should render <ImageSwitcher />', () => {
		const wrapper = shallow(<PokemonCard images={['image1', 'image2']} />)
		expect(wrapper.find(ImageSwitcher)).toHaveLength(1)
	})
})
