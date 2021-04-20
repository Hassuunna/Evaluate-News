const formHandler = require('./../formHandler')

const {
    submission,
    validateURL
} = formHandler

describe('Handler', () => {
    test('validateURL', () => {
        expect(validateURL(' https://stackoverflow.com/questions/5717093/check-if-a-javascript-string-is-a-url')).toEqual(true)
        expect(validateURL(' https://stackoverflow/questions/571703/check-if-a-javascript-string-is-a-url')).toEqual(false)
        expect(validateURL('https://www.polygon.com/2014/6/26/5842180/shovel-knight-review-pc-3ds-wii-u')).toEqual(true)
    })
})