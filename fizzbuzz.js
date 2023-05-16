/**
 * Valida múltiplos de 3, rellena campo con “Fizz”,
   para múltiplos de 5, rellena campo con “Buzz”,
   para múltiplos de 3 y 5 rellena campo con “FizzBuzz”
 * @param {Number} input Rango a validar
 * @returns Array
 */

function fizz_buzz(input) {
  // Guardo los resultados
  const output = []

  // Valido que se ingresen numeros
  if (typeof input !== 'number' || input <= 0) {
    console.error("ERROR: Ingresa un numero mayor a 0")
    return []
  }

  // Valido segun las condiciones del ejercicio
  for (let i = 1; i <= input; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      output.push('FizzBuzz')
    } else if (i % 3 === 0) {
      output.push('Fizz')
    } else if (i % 5 === 0) {
      output.push('Buzz')
    } else {
      output.push(i)
    }
  }

  return output
}

// Test
console.log("1- > " + fizz_buzz(2))
console.log("2- > " + fizz_buzz(5))
console.log("3- > " + fizz_buzz(9))
console.log("4- > " + fizz_buzz(15))

// Validaciones
console.log("5- > " + fizz_buzz(-5))
console.log("6- > " + fizz_buzz('numero'))
