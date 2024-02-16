export function toCamelCase(str: string) {
    if (!str) return ''

    let splited = str.split(/(?:-|_)+/);

    const capitalized = splited.map((word, i) => {
        if (i > 0) {
            const [letter, ...rest] = word.split('')
            const res = [letter.toUpperCase(), ...rest].join('');
            return res;
        }
        return word;
    })
    const res = capitalized.join('');

    return res;
}