import React from 'react'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import PokemonStatisitc from './PokemonStatistic'

configure({ adapter: new Adapter() })

describe('<PokemonStatisitc />', () => {
	it('Should render small label font size, and render no unit DOM element', () => {
		const wrapper = shallow(
			<PokemonStatisitc value='' color='purple' label='' />
		)
		expect(wrapper.find('.long-text')).toHaveLength(0)
		expect(wrapper.find('.unit')).toHaveLength(0)
	})
	it('Should render large label font size, and render unit DOM element', () => {
		const wrapper = shallow(
			<PokemonStatisitc
				value=''
				color='purple'
				label=''
				unit='Stat Unit'
				long
			/>
		)
		expect(wrapper.find('.long-text')).toHaveLength(1)
		expect(wrapper.find('.unit')).toHaveLength(1)
	})
})
