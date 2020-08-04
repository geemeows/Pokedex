import React from 'react'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import { Icon } from 'semantic-ui-react'
import Footer from './Footer'

configure({ adapter: new Adapter() })

describe('<Footer />', () => {
	it('Should contain copyrights text', () => {
		const wrapper = shallow(<Footer />)
		expect(wrapper.find('.footer-text')).toHaveLength(1)
	})
	it('Should contain Icons', () => {
		const wrapper = shallow(<Footer />)
		expect(
			wrapper.find('.footer-text').contains(<Icon name='react' color='blue' />)
		).toEqual(true)
		expect(
			wrapper.find('.footer-text').contains(<Icon name='heart' color='red' />)
		).toEqual(false)
	})
})
