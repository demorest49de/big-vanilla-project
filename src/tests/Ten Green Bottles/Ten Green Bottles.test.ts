import {tenGreenBottles} from './Ten Green Bottles'

test('Ten Green Bottles', () => {

const expect2 =
`Two green bottles hanging on the wall,
Two green bottles hanging on the wall,
And if one green bottle should accidentally fall,
There'll be one green bottle hanging on the wall.

One green bottle hanging on the wall,
One green bottle hanging on the wall,
If that one green bottle should accidentally fall,
There'll be no green bottles hanging on the wall.
`

    // expect(expect2).toStrictEqual(tenGreenBottles(3))
    expect(expect2).toStrictEqual(tenGreenBottles(2))
    // expect(expect1).toStrictEqual(tenGreenBottles(1))
})