const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');


Given('el estudiante tiene que escojer el dia de reserva', function () {   
    assert(true)
})

When('{string}', function (phrase) {
    if (phrase = 'mueva la barra a el dia correcto') 
        this.method = 'bar'
    else if (phrase == 'selecciona el dia en el calendario')
        this.method = 'calendar'
})

Then('escoje el dia con {string}', function (object) {
    if (object == 'la barra')
        assert(this.method == 'bar')
    else if (object == 'el calendario')
        assert(this.method == 'calendar')
})