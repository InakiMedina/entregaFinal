Feature: Cambiar de Piso con Animación - Mapa de la Biblioteca como Homepage
    para mejorar el User Experience, hay un boton con una animación al cambiar de piso
    
    Example: En el que el que el estudiante quiere un cubiculo en el segundo piso y le pica una vez al boton del siguiente piso
    Given el estudiante quiere ir al segundo piso
    When le pica al boton tres vecez
    Then puede ver el segundo piso

    Example: En el que el que el estudiante quiere un cubiculo en el cuarto piso y le pica tres vecez al boton del siguiente piso
    Given el estudiante quiere ir al cuarto piso
    When le pica al boton tres vecez
    Then puede ver el cuarto piso