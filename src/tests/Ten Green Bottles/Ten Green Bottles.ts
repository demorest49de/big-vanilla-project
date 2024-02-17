export function tenGreenBottles(n) {
    const words = (n) => ['no', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',][n];

    const nBottles = n => words(n) + ` green bottle${n === 1 ? '' : 's'}`

}