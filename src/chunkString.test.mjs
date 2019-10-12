import { chunkString } from "./chunkString.mjs"

describe("chunk string", () => {
  it("splits the string in groups of two", () => {
    expect(chunkString("holatu", 2)).toEqual(["ho", "la", "tu"])
  })

  it("splits the string in groups of three", () => {
    expect(chunkString("holatu", 3)).toEqual(["hol", "atu"])
  })

  it("handles semi groups", () => {
    expect(chunkString("eyquetal", 3)).toEqual(["eyq", "uet", "al"])
  })
})
