const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');

this.userReservation = -1
this.otherReservation = -1

Given('el estudiante {string} una sala', function (action) {   
    if (action == "reserva")
        this.userReservation = 1
    else if (action == "esta reservando")
        this.userReservation = 0
})

When('otros estudiantes {string} a esa hora', function (action) {
    if (action == "reservan")
        this.otherReservation = 1
    elseif (action == "estans reservando")
        this.otherReservation = 0
})

Then('la pagina {string} regresa a los horarios', function (pronoun) {
    if (pronoun == 'lo')
        assert(this.userReservation == 0 && this.otherReservation)
    if (pronoun == 'los')
        assert(this.userReservation && this.otherReservation == 0)
})