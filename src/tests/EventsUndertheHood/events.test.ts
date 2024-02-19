import {toCamelCase} from './toCamelCase'

test('toCamelCase', () => {

    expect('theStealthWarrior').toStrictEqual(toCamelCase('the-stealth_warrior'))
    expect('theStealthWarrior').toStrictEqual(toCamelCase('the_stealth_warrior'))
    expect('TheStealthWarrior').toStrictEqual(toCamelCase('The-Stealth-Warrior'))
    expect('ABC').toStrictEqual(toCamelCase('A-B-C'))
    expect('').toStrictEqual(toCamelCase(''))

})