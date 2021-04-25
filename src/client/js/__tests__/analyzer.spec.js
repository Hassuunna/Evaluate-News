const analyzer = require('./../analyzer')
const fetchMock = require("jest-fetch-mock")

fetchMock.enableMocks();

const {
    analyze
} = analyzer

beforeEach(() => {
    fetch.resetMocks();
});

describe('Analyzer', () => {
    test('fetch API', () => {
        /*fetch.mockResponseOnce(["SUBJECTIVE", "76", "DISAGREEMENT", "IRONIC", "P"]);

        expect(analyze(
            'https://www.polygon.com/2014/6/26/5842180/shovel-knight-review-pc-3ds-wii-u',
            'en'
        )).toEqual(["SUBJECTIVE", "76", "DISAGREEMENT", "IRONIC", "P"])
        expect(fetch).toHaveBeenCalledTimes(1);
        */
    })
})