export function sumArray(array: Array<number> | null) {
    if (!array || array && array.length <= 2) return 0;

    const sorted = [...array].sort((a, b) => a - b)
    sorted.splice(0, 1)
    sorted.splice(sorted.length - 1, 1)

    const sum = sorted.reduce((acc, v) => {
        return acc + v
    }, 0)
    return sum;
}