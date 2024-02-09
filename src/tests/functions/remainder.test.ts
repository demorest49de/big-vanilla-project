import {chunk} from "./remainder";

test(`Given an array arr and a chunk size, return a chunked array. A chunked array contains the original elements in arr, but consists of subarrays each of length size. The length of the last subarray may be less than size if arr.length is not evenly divisible by size`, () => {

    // expect(typeof size).toBe('number')
    // expect(arr1.length).toBeGreaterThanOrEqual(0)
    // expect(size).toBeGreaterThan(0)

    const arr1 = [1, 2, 3, 4, 5];
    const size1 = 1;

    const arr2 = [1, 9, 6, 3, 2];
    const size2 = 2;

    const arr3 = [1, 9, 6, 3, 2];
    const size3 = 3;

    const arr4 = [1, 9, 6, 3, 2, 74];
    const size4 = 2;

    const arr5 = [8, 5, 3, 2, 6];
    const size5 = 6;

    const arr6 = [];
    const size6 = 1;

    // const result1 = chunk(arr1, size1);
    // const result2 = chunk(arr2, size2);
    // const result3 = chunk(arr3, size3);
    // const result4 = chunk(arr4, size4);
    // const result5 = chunk(arr5, size5);
    const result6 = chunk(arr6, size6);

    expect(result1).toStrictEqual([[1], [2], [3], [4], [5]])
    expect(result2).toStrictEqual([[1, 9], [6, 3], [2]])
    expect(result3).toStrictEqual([[1, 9, 6], [3, 2]])
    expect(result4).toStrictEqual([[1, 9], [6, 3], [2, 74]])
    expect(result5).toStrictEqual([[8, 5, 3, 2, 6]])

})