import { chunkString } from "./chunkString.mjs"

// const util = require("util")
// const { chunkString } = require("./chunkString.mjs")

// #region test-utils

let testFailed = false

function expect(result) {
  return {
    toEqual: expectedResult => {
      if (Array.isArray(result) && Array.isArray(expectedResult)) {
        const maxLength = Math.max(result.length, expectedResult.length)

        for (let i = 0; i < maxLength; i++) {
          if (result[i] !== expectedResult[i]) {
            console.error(" But got:", result)
            console.error("Expected:", expectedResult)
            testFailed = true
            break
          }
        }
        return
      }

      if (result !== expectedResult) {
        console.error(`Expected: ${expectedResult}`)
        console.error(` But got: ${result}`)
        testFailed = true
      } else {
        console.log("OK!")
      }
    },
  }
}

// #endregion test-utils

expect(chunkString("holatu", 3)).toEqual(undefined)

// #region test-utils

if (testFailed) {
  process.exit(1)
}

// #endregion
