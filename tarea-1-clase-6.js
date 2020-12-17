
const cantidadFamiliares = Number(prompt('cuantos familiares tenes?'))

crearIntegrantes(cantidadFamiliares)

document.querySelector('button').onclick = function(){
    generarListaEdades(cantidadFamiliares)
    
 
    document.querySelector('#texto-edades').textContent = `el maximo es de ${calcularEdadMaxima(listaEdades)}, el minimo ${calcularEdadMinima(listaEdades)} y el promedio de ${calcularPromedioEdades(listaEdades)}`

    const salarios = []
    let $arraySalariosInputs = document.querySelectorAll('.salarios-valores')
    for (let i=0; i<$arraySalariosInputs.length; i++ ) {
        if (Number($arraySalariosInputs[i].value)) {
            salarios.push(Number($arraySalariosInputs[i].value))
        }
    }
        
    const $textoSalarios = document.querySelector('#texto-salarios')
    $textoSalarios.textContent = `el salario minimo anual es de ${calcularSalarioMinimoAnual(salarios)}, el maximo de ${calcularSalarioMaximoAnual(salarios)}, el promedio anual de ${calcularPromedioAnualSalarios(salarios)}, el mensual promedio es ${calcularPromedioAnualSalarios(salarios) / 12}`
    
    return false
}
document.querySelector('#reset-button').onclick = function(){
    for(let i=1; i<cantidadFamiliares + 1; i++){
        document.querySelector(`#Edad-${i}`).reset()
        
    }
    return false
}
document.querySelector('#boton-agregar').onclick = function(){
    const $div = document.querySelector('#contenedor-salarios')
    const etiquetaSalarios = document.createElement('label')
    etiquetaSalarios.className = 'salarios'
    etiquetaSalarios.textContent = 'Salario anual'
    const entradaSueldo = document.createElement('input')
    entradaSueldo.className = 'salarios-valores'
    $div.appendChild(etiquetaSalarios)
    $div.appendChild(entradaSueldo)
    return false
    
}
document.querySelector('#boton-quitar').onclick = function(){
    const $arrayEtiquetasSalarios = document.querySelectorAll('.salarios')
    const $arraySalarios = document.querySelectorAll('.salarios-valores')
    $arrayEtiquetasSalarios[$arrayEtiquetasSalarios.length - 1].remove()
    $arraySalarios[$arraySalarios.length - 1].remove()
    return false
}

function crearIntegrantes(cantidadFamiliares){
    for (let i=1; i<cantidadFamiliares + 1; i++) {
        const etiquetaIntegrante = document.createElement('label')
        const entradaIntegrante = document.createElement('input')
        const $cuerpo = document.querySelector('body')
        const espacio = document.createElement('br')
        etiquetaIntegrante.textContent = `Integrante${i}`
        entradaIntegrante.id = `Edad-${i}`
        $cuerpo.appendChild(etiquetaIntegrante)
        $cuerpo.appendChild(entradaIntegrante)
        $cuerpo.appendChild(espacio)
}
}

function generarListaEdades(cantidadFamiliares){
    let listaEdades = []
    for(let i=1; i<cantidadFamiliares + 1; i++){
        listaEdades.push(Number(document.querySelector(`#Edad-${i}`).value))
}
}

