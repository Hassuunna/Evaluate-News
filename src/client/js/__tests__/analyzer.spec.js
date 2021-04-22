const analyzer = require('../analyzer')

const {
    analyze
} = analyzer

describe('Analyzer', () => {
    test('fetch API', () => {
        expect(analyze(
            'https://www.polygon.com/2014/6/26/5842180/shovel-knight-review-pc-3ds-wii-u',
            'en'
        )).toEqual()
        expect(analyze(
            'https://jestjs.io/docs/getting-started',
            'en'
        )).toEqual()
    })
})