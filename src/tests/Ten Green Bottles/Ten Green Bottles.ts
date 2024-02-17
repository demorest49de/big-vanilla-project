export function tenGreenBottles(n) {

    const words = (n) => ['no', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',][n];
    const nBottles = n => {
        const temp = words(n) + ` green bottle${n === 1 ? '' : 's'}`;
        return words(n) + ` green bottle${n === 1 ? '' : 's'}`
    }

    const titleCase = word => words(n) + word.slice(1);

    const range = n => {
        const temp = [...Array(n).keys()].map(x => x + 1).reverse()
        return [...Array(n).keys()].map(x => x + 1).reverse();
    }

    const refrain = n => {
        const bottles = nBottles(n);
        return [
            `${titleCase(bottles)} hanging on the wall,\n`,
            `${titleCase(bottles)} hanging on the wall,\n`,
            `${n === 1 ? 'If that' : 'And if'} one green bottle should accidentally fall,\n`,
            `There'll be ${nBottles(n - 1)} hanging on the wall.\n`,
        ].join('');
    }
    range(n).map(refrain).join('\n');
}





















