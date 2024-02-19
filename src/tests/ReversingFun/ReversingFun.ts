export function flipNumber(n) {
    const range = n => {
        return [...Array(n.length).keys()].map(x => x + 1);
    };
    let result = ''
    let nReversed = n.split('').reverse();
    const shototam = (num) => {
        const splicedElems = nReversed.splice(0, 1);
        nReversed = [...nReversed.reverse()];
        result += splicedElems.join('');
    };
    range(n).forEach(shototam);
    return result;
}

// export function flipNumber(n) {
//     var res = "";
//     var len = n.length;
//     var arr = n.split("")
//     for (var i = 1; i <= len; i++) {
//         arr.reverse();
//         res += arr[0];
//         arr.shift();
//     }
//     return res;
// }