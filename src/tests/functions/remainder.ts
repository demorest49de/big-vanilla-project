export const chunk = function (arr: Array<number>, size: number) {

    const length = arr.length;
    const arrayRemainder = length % size;
    const arrayCount = Math.trunc(length / size);

    // type artype = number | string;

    const result: number[][] = [];
    let count: number = 0;
    let iteration: number = 0;

    arr.forEach((value, i, array) => {
        if (size === 1) {
            result.push([]);
            const index = result.length - 1;
            result[index].push(value);
            return;
        }

        if (iteration < size) {
            if (iteration === 0) result.push([]);
            result[count].push(value);
            iteration += 1;
            return;
        }
        if (count < arrayCount) {
            iteration = 1;
            result.push([]);
            count += 1;
            result[count].push(value);
            return;
        }
    });

    return result
};