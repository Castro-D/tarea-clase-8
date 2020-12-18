function probarValidarEdades(){
    console.assert(
        validarEdades('asdfas') === 'Edad invalida',
        'validar edades no valido que el campo edad no sean letras'
    );

    console.assert(
        validarEdades('') === 'El campo edad no puede estar vacio',
        'validar edades no valido que el campo edad no sea vacio'
    );

    console.assert(
        validarEdades(121425) === 'Edad invalida',
        'validar edades no valido que el campo edad no sea muy largo'
    );

    console.assert(
        validarEdades(23.1) === 'Edad invalida',
        'validar edades no valido que el campo edad no contenga decimales'
    );

    console.assert(
        validarEdades(25) === '',
        'validar edades no funciono con una edad correcta'
    );

    console.assert(
        validarEdades(110) === '',
        'validar edades no funciono con una edad correcta'
    );

}

probarValidarEdades()
