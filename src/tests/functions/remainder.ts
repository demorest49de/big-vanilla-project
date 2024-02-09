export const chunk = function (arr: Array<number>, size: number) {

    const length = arr.length;
    const arrayRemainder = length % size;
    const arrayCount = Math.trunc(length / size);

    // type artype = number | string;

    const result: number[][] = [];
    let count: number = 0;
    result[count] = [];
    let iteration: number = 0;
    arr.forEach((v, i) => {

        if (iteration < arrayCount) {
            const temp = result[count];
            temp.push(v);
            iteration += 1;
            return;
        } else {
            iteration = 0;
            count += 1;
            result[count] = [];
            return;
        }

        if (arrayRemainder > 0) {

        }
    });

    return result
};