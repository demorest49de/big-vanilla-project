export const chunk = function (arr: Array<number>, size: number) {

    const chunkedArray = [];

    for (let i = 0; i < arr.length; i += size) {
        const t = arr.slice(i, i + size)
        chunkedArray.push(arr.slice(i, i + size));
    }

    return chunkedArray;
};