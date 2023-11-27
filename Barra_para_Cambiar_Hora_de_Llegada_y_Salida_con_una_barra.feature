Feature: Barra para Cambiar Hora de Llegada y Salida

    Una barra interactiva que sirve como segunda opción para poner el dia ademas de usar calendario

    Example: En el que el estudiante escoje el dia con la barra
    Given el estudiante tiene que escojer el dia de reserva
    When mueva la barra a el dia correcto
    Then escoje el dia con la barra

    Example: En el que estudiante escoje el dia con el calendario
    Given el estudiante tiene que escojer el dia de reserva
    When selecciona el dia en el calendario
    Then escoje el dia con el calendario