import {deleteNth} from './deleteNth'

test('Delete occurrences of an element if it occurs more than n times', () => {

    expect([20, 37, 21]).toStrictEqual(deleteNth([20, 37, 20, 21], 1))
    expect([1, 2, 3, 1, 1, 2, 2, 3, 3, 4, 5]).toStrictEqual(deleteNth([1, 2, 3, 1, 1, 2, 1, 2, 3, 3, 2, 4, 5, 3, 1], 3))
    // expect([1, 1, 3, 3, 7, 2, 2, 2]).toStrictEqual(deleteNth([1, 1, 3, 3, 7, 2, 2, 2, 2], 3))
    // expect([12, 39, 19]).toStrictEqual(deleteNth([12, 39, 19, 39, 39, 19, 12], 1))
})