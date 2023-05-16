/**
 * Función de Rango de Vision
 * @param {Number} number Numero
 * @returns Boolean si se encuentra un minimo
 */

function range_vision(input) {

  // Valido que se ingresen numeros
  if (typeof input !== 'number' || input <= 0) {
    console.error("ERROR: Ingresa un numero mayor a 0")
    return null
  }

  //Convierto a String el input para despues separarlo
  const number = String(input)
  let min_vision = Infinity
  let hasMinVisionWithOne = false

  //Obtengo cada digito del numero ingresado
  for (let i = 0; i < number.length; i++) {
    //Separo en campos para ver su rango de vision y hago el calculo de los
    //Valores cercanos al digito usando el digito como limitante
    const digit = Number(number[i])
    const left_range = number.slice(Math.max(0, i - digit), i)
    const right_range = number.slice(i + 1, i + digit + 1)
    const vision = Array.from(left_range + right_range).reduce((sum, digit) => sum + Number(digit), 0)

    //Valido el minimo en el valor de vision
    if (vision === min_vision && number[i] === '1') {
      hasMinVisionWithOne = true
    } else if (vision < min_vision) {
      min_vision = vision
      hasMinVisionWithOne = number[i] === '1'
    }

    //Muestro el digito en el que se busca el rango de vision y sus valores
    console.log(`Dígito: ${number[i]}`)
    console.log(`Puede ver a la izquierda: ${left_range.length > 0 ? left_range.split('').join(' + ') : '0'}`)
    console.log(`Puede ver a la derecha: ${right_range.length > 0 ? right_range.split('').join(' + ') : '0'}`)
    console.log(`Valor de la visión: ${left_range.length > 0 ? left_range.split('').join(' + ') : '0'} + ${right_range.length > 0 ? right_range.split('').join(' + ') : '0'} = ${vision}`)
    console.log('-----------------')
  }

  //Retorno true o false si hay un valor minimo
  return hasMinVisionWithOne
}

//Test
console.log(range_vision(34315))

// Validaciones
console.log(range_vision("numero"))