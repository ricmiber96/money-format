const secondParamIdentity = (_, i) => i;

/**
 * Hola
 * @param {string} str 
 * @param {number} chunkSize 
 */
export function chunkString(str, chunkSize) {
  return Array(Math.ceil(str.length / chunkSize))
    .fill(0)
    .map(secondParamIdentity)
    .map(multiplyBy(chunkSize))
    .map(i => substr(str, chunkSize, i))
}

function substr(str, chunkSize, i) {
  return str.substr(i, chunkSize);
}

function multiplyBy(a) {
  return function(b) {
    return b * a
  }
}