const secondIdentity = (_, i) => i;

const multiplyBy = a => b => a * b

const substrBy = (str, length) => fromIndex => str.substr(fromIndex, length)

const ceilDivision = (newLocal, chunkSize) => Math.ceil(newLocal / chunkSize)

/**
 * Hola
 * @param {string} str 
 * @param {number} chunkSize 
 */
export function chunkString(str, chunkSize) {
  const chunkedStringLength = ceilDivision(str.length, chunkSize);

  return Array(chunkedStringLength)
    .fill(0)
    .map(secondIdentity)
    .map(multiplyBy(chunkSize))
    .map(substrBy(str, chunkSize))
}
