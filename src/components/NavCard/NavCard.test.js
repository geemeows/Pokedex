import React from 'react'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import { Icon } from 'semantic-ui-react'
import NavCard from './NavCard'

configure({ adapter: new Adapter() })

describe('<NavCard />', () => {
	it('should return a next card if type: next is passed', () => {
		const wrapper = shallow(<NavCard type='next' functionality={() => {}} />)
		expect(
			wrapper.contains(
				<Icon className='card-icon' name='arrow right' size='huge' />
			)
		).toEqual(true)
	})

	it('should return a prev card if type: prev is passed', () => {
		const wrapper = shallow(<NavCard type='prev' functionality={() => {}} />)
		expect(
			wrapper.contains(
				<Icon className='card-icon' name='arrow left' size='huge' />
			)
		).toEqual(true)
	})
})
