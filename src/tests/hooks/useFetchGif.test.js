import { useFetchGifs } from "../../hooks/useFetchGifs";
import { renderHook } from '@testing-library/react-hooks'

describe('Testing useFetchGif hook', () => {
  test('should return initial state', async() => {
    const {result, waitForNextUpdate} = renderHook( () => useFetchGifs())
    await waitForNextUpdate()

    const {data, loading} = result.current

    expect(loading).toBe(false)
  });

  test('should return an array of images', async() => {
    const {result, waitForNextUpdate} = renderHook( () => useFetchGifs('wrc'))
    await waitForNextUpdate()

    const {data, loading} = result.current

    expect(data.length).toBe(10)
    expect(loading).toBe(false)
  })
  
});
