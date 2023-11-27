Feature: Actualización en Tiempo Real del Mapa al Reservar una Sala

    para evtirar que dos personas reservan la misma hora y lugar se actualizan las resrvas inmediatamente

    Example: En el que el que un estudiante esta reservando una sala y otro estudiante reserva esa hora entonces sale un mensaje que dice que la sala esta reservada y se regresa a ver horarios
    Given el estudiante esta reservando una sala
    When otros estudiantes reservan a esa hora
    Then la pagina lo regresa a los horarios

    Example: En el que el que un estudiante reserva una sala y otros estudiantes reservando simultaneamente se les nega el acceso
    Given el estudiante reserva una sala
    When otros estudiantes estan reservando a esa hora
    Then la pagina los regresa a los horarios