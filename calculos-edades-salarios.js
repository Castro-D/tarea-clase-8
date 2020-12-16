function calcularEdadMinima(lista){
    return Math.min(...lista)
}

function calcularEdadMaxima(lista){
    return Math.max(...lista)
}

function calcularPromedioEdades(lista){
    let suma = 0;
    for(let i=0; i<lista.length; i++){
        suma += lista[i]
    }
    return suma / lista.length
}

function calcularPromedioAnualSalarios(listaSalarios){
    let promedioAnual = 0;
    for (let i=0; i<listaSalarios.length; i++) {
        promedioAnual += listaSalarios[i]
    }
    return promedioAnual / listaSalarios.length
}

function calcularSalarioMaximoAnual(listaSalarios){
    return Math.max(...listaSalarios)
}

function calcularSalarioMinimoAnual(listaSalarios){
    return Math.min(...listaSalarios)
}
