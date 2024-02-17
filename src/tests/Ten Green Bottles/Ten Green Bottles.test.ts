import {tenGreenBottles} from './Ten Green Bottles'

test('toCamelCase', () => {

    const expect2 = `
Two green bottles hanging on the wall,
Two green bottles hanging on the wall,
And if one green bottle should accidentally fall,
There'll be two green bottles hanging on the wall.     
    `
    const expect1 = `
One green bottle hanging on the wall,
One green bottle hanging on the wall,
And if that one green bottle should accidentally fall,
There'll be no green bottles hanging on the wall.     
    `

    expect(expect2).toStrictEqual(tenGreenBottles(2))
    expect(expect1).toStrictEqual(tenGreenBottles(1))
})