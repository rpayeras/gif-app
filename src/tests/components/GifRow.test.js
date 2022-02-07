import React from 'react';

import { shallow } from 'enzyme';
import { GifRow } from '../../components/GifRow';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs')

describe('Testing GifGrid component', () => {
    test('it should renders properly', () => {
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true,
        })
        const wrapper = shallow(<GifRow category='test'/>)
        expect(wrapper).toMatchSnapshot()
    })

    test('should show items using useFetchGifs', () =>{
        const gifs = [{
            id: 'ABC',
            url: 'https://testing.com/test.jpg',
            title: 'test'
        }]

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: true,
        })

        const wrapper = shallow(<GifRow category='test'/>)

        //expect(wrapper).toMatchSnapshot()
        expect(wrapper.find('p').exists()).toBe(false)
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length)
    })
})