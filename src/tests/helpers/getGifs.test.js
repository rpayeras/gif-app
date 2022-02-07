import {getGifs} from '../../helpers/getGifs'

describe('Testing getGifs helper', () => {
    test('should return 10 gifs', async() => {
        const gifs = await getGifs('Rallies')

        expect(gifs.length).toBe(10)
    })

    test('if is empty return empty', async() => {
        const gifs = await getGifs('')
        expect(gifs.length).toBe(0)
    })
})