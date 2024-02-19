import {FlickSwitch} from "./Flick Switch";


test('Flick Switch', () => {

    expect([true, false, false, false]).toStrictEqual(FlickSwitch(["codewars", "flick", "code", "wars"]))

})