import React from 'react'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Header, { Image } from './Header'

configure({ adapter: new Adapter() })

describe('<Header />', () => {
	it('Should contain logo image', () => {
		const wrapper = shallow(<Header />)
		expect(wrapper.find(Image)).toHaveLength(1)
	})
})
