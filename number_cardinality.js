/**
 * Devuelve la cadena zero si el número termina en 0
   Devuelve la cadena five si el número termina en 5
   Devuelve la cadena even si el número es par (divisible por 2) Y no termina en 0
   Devuelve la cadena odd si el número es impar (no divisible por 2) Y no termina en 5
 * @param {Number} input Numero a validar
 * @returns String con tipo de dato segun el valor del input
 */

function number_cardinality(input) {

  // Valido que se ingresen numeros
  if (typeof input !== 'number' || input < 0) {
    console.error("ERROR: Ingresa un numero mayor a 0")
    return 'error'
  }

  // Obtengo el ultimo numero y valido que sea positivo
  const checkLastNumber = Math.abs(input % 10)

  // Valido segun las condiciones del ejercicio
  if (checkLastNumber === 0) {
    return 'zero'
  } else if (checkLastNumber === 5) {
    return 'five'
  } else if (input % 2 === 0) {
    return 'even'
  } else {
    return 'odd'
  }
}

// Test
console.log(number_cardinality(100))
console.log(number_cardinality(88))
console.log(number_cardinality(155))
console.log(number_cardinality(99))

// Validaciones
console.log(number_cardinality(-5))
console.log(number_cardinality('numero'))