const analyzer = require('./analyzer')

const {
    analyze
} = analyzer

describe('Analyzer', () => {
    test('fetch API', () => {
        expect(analyze(
            'https://www.polygon.com/2014/6/26/5842180/shovel-knight-review-pc-3ds-wii-u',
            'en'
        )).toEqual('concepts are: people, forum, platform, era, home, kind, brake, feature, forum, death, spike, kind, love, quality control, world, ethics, report, franchise, gold, opinion, video, match, system, gold, platform, report, player, right, letter, opponent, love, character, stock, mechanics, platform, head, tale, mechanic, PS Vita,')
        expect(analyze(
            'https://www.polygon.com/2014/6/26/5842180/shovel-knight-review-pc-3ds-wii-u',
            'en'
        )).toEqual('concepts are: mode, World, CULTURE, opinion, Gold, Mechanics, PS Vita,')
        expect(analyze(
            'https://jestjs.io/docs/getting-started',
            'en'
        )).toEqual('concepts are: plugin, application, file, calculation, filing cabinet, line, set, set, page, guide, doomed, current, process, testing, framework, project, chassis, exam, community, plot, package, command, API,')
    })
})