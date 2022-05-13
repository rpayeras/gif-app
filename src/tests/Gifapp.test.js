import { shallow } from 'enzyme'
import React from 'react'
import GifApp from '../GifApp'

describe('Testing main component', () => {
    test('should render properly', () => {
        const wrapper = shallow(<GifApp />)
        expect(wrapper).toMatchSnapshot()
    })

    test('should show a list of categories', () => {
        const categories = ['One punch']
        const wrapper = shallow(<GifApp defaultCategories={categories} />)

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifRow').length).toBe(categories.length)
    })
})