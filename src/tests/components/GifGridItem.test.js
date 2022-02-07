import React from 'react';
import { shallow } from 'enzyme';
import {GifGridItem} from '../../components/GifGridItem';


describe('Testing GifGridItem component', () => {
    const img = {
        title: 'Alonso',
        url: 'https://www.google.es'
    }
    const wrapper = shallow(<GifGridItem {...img}/>)

    test('Should show component', () => {
        expect(wrapper).toMatchSnapshot()
    })

    test('Should show a title', () => {
        expect(wrapper.find('h4').text().trim()).toBe(img.title)
    })

    test('Should show an image', () => {
        expect(wrapper.find('img').prop('src')).toBe(img.url)
    })

    test('Should have animate fadeIn', () => {
        expect(wrapper.find('div').prop('className').includes('animate__fadeIn')).toBe(true)
    })
})