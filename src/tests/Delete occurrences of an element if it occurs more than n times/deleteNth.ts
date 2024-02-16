export function deleteNth(arr: Array<number>, n: number) {
    let reduced =[...arr];

    reduced.forEach((value) => {
        let count = 0;

        const isExceeded = reduced.filter((el) => el === value).length > n;
        if (isExceeded) {
            reduced = reduced.filter((el) => {
                if (el === value && count < n) {
                    count += 1;
                    return true
                }
                return el !== value
            })
        }
    })

    return reduced;
}

// let reduced = arr;
// reduced.forEach((value) => {
//     let count = 0;
//     const isExceeded = reduced.filter((el) => el === value).length > n;
//     if (isExceeded) {
//         reduced = reduced.filter((el) => {
//             if (el === value && count < n) {
//                 count += 1;
//                 return true
//             }
//             return el !== value
//         })
//     }
// })
//
// return reduced;