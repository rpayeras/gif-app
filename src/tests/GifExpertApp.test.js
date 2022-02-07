import { shallow } from 'enzyme'
import React from 'react'
import GifExpertApp from '../GifExpertApp'

describe('Testing main component', () => {
    test('should render properly', () => {
        const wrapper = shallow(<GifExpertApp />)
        expect(wrapper).toMatchSnapshot()
    })

    test('should show a list of categories', () => {
        const categories = ['One punch']
        const wrapper = shallow(<GifExpertApp defaultCategories={categories} />)

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifRow').length).toBe(categories.length)
    })
})