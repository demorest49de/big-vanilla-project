export function tenGreenBottles(n) {
    const bottles = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten']

    const nurseryRhyme = [
        'hanging on the wall,\n',
        'should accidentally fall,\n',
        'hanging on the wall.\n'
    ]

    let count = n;
    let result = [];
    for (let i = n - 1; i >= 0; i--) {
        const isPlural = count > 1;
        const pluralArray = ['green bottles', 'green bottle'];
        const bottleQty = isPlural ? pluralArray[0] : pluralArray[1];
        const [letter, ...rest] = bottles[i].split('')
        let qty = ``;
        let strTemp = ``
        let arrResult = ``
        const block = nurseryRhyme.map((rhyme, index) => {
            switch (index) {
                case 0:
                    qty = [letter.toUpperCase(), ...rest].join('');
                    strTemp = [qty, bottleQty, rhyme].join(' ');
                    arrResult = Array(2).fill(strTemp).join('')
                    return arrResult;
                case 1:
                    qty = (isPlural ? 'And if ' : 'If that ') + 'one';
                    strTemp = [qty, pluralArray[1], rhyme].join(' ');
                    return strTemp;
                case 2:
                    qty = (isPlural ? bottles[i - 1] : 'no');
                    const firstWord = 'There\'ll be'
                    const pluralWord = isPlural ?
                        i - 1 > 0 ? pluralArray[0] : pluralArray[1]
                        : pluralArray[0];
                    const nextLine = isPlural ? '\n' : '';
                    strTemp = [firstWord, qty, pluralWord, rhyme].join(' ') + nextLine;
                    return strTemp;
                default:
                    return '';
            }
        })
        result = [...result, ...block]
        count -= 1;
    }
    return result.join('');
}