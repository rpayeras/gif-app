import { shallow } from "enzyme"
import { AddCategory } from "../../components/AddCategory"

describe('Testing with AddCategory component', () => {
    const setCategories = jest.fn()
    let wrapper;

    beforeEach(() => {
        jest.clearAllMocks()
        wrapper = shallow(<AddCategory onSubmit={setCategories}/>)
    })

    test('should render correctly', () => {
        expect(wrapper).toMatchSnapshot()
    })

    test('input must change', () => {
        const input = wrapper.find('input');
        input.simulate('change', {target:{value:'test1'}})
        
        expect(wrapper.find('input').prop('value')).toBe('test1')
    })

    test('not should call on submit', () => {
        wrapper.find('form').simulate('submit', { preventDefault(){} });

        expect(setCategories).not.toHaveBeenCalled()
    })

    test('should call setCategories and clean input', () => {
        wrapper.find('input').simulate('change', { target: { value:'test1' }})
        wrapper.find('form').simulate('submit', { preventDefault(){} })

        expect(setCategories).toHaveBeenCalled()
        expect(wrapper.find('input').prop('value')).toBe('')
    })
})