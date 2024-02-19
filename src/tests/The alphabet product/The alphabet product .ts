export function TheAlphabetProduct(arr) {
    let isFlicked = true;
    const flick = 'flick'
    const result = arr.map(el => {
        if (el === flick) {
            isFlicked = !isFlicked
        }
        return isFlicked;
    })
    return result;
}
