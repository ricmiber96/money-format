/**
 *
 * @param {string} numbers
 * @returns {number}
 */
export function stringCalculator(numbers) {
  const parsedNumbers = parseNumbers(numbers)
  const numbersClean = removeNans(parsedNumbers)

  return sumAll(numbersClean)
}

function parseNumbers(numbers) {
  return numbers
    .replace(/\n/g, ",")
    .split(",")
    .map((n) => parseInt(n))
}

/**
 *
 * @param {number[]} numbers
 * @returns {number}
 */
function sumAll(numbers) {
  return numbers.reduce((acc, number) => acc + number, 0)
}

/**
 *
 * @param {number[]} numbers
 * @returns {number[]}
 */
const removeNans = (numbers) => numbers.filter((number) => !isNaN(number))
