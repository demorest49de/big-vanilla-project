import {chunk} from "./remainder";

test(`Given an array arr and a chunk size, return a chunked array. A chunked array contains the original elements in arr, but consists of subarrays each of length size. The length of the last subarray may be less than size if arr.length is not evenly divisible by size`, () => {

    // expect(typeof size).toBe('number')
    // expect(arr1.length).toBeGreaterThanOrEqual(0)
    // expect(size).toBeGreaterThan(0)

    let arr = [1, 2, 3, 4, 5];
    let size = 1;
    const result1 = chunk(arr, size);
    expect(result1).toStrictEqual([[1], [2], [3], [4], [5]])

    arr = [1, 9, 6, 3, 2];
    size = 2;
    const result2 = chunk(arr, size);
    expect(result2).toStrictEqual([[1, 9], [6, 3], [2]])

    arr = [1, 9, 6, 3, 2];
    size = 3;
    const result3 = chunk(arr, size);
    expect(result3).toStrictEqual([[1, 9, 6], [3, 2]])

    // const arr3 = [8, 5, 3, 2, 6];
    // size = 6;
    // const arr4 = [];
    // size = 1;
    //const arr5 = [1,2 ,3 ]
    // const size5 = 1;
})