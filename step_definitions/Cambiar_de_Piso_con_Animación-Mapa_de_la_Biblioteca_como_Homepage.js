const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');

Given('el estudiante quiere ir al {string} piso', function (floor) {   
    this.floor = floor
})

When('le pica al boton {string}', function (times) {
    if (times == 'una vez')
        this.times = 1
    else if (times == 'dos vecez')
        this.times = 2
    else if (times == 'tres vecez')
        this.times = 3
    else if (times == 'cuatro vecez')
        this.times = 4
})

Then('puede ver el {string} piso', function (floor) {
    if (floor == 'primer')
        this.floorResult = 1
    else if (floor == 'segundo')
        this.floorResult = 2
    else if (floor == 'tercer')
        this.floorResult = 3
    else if (floor == 'cuarto')
        this.floorResult = 4

    assert(this.floor == floor && this.floor == this.floorResult)
})