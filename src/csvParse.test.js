import { CsvParse } from './csvParse.js';
describe( "CsvParse", () => {
  it("return array empty",()=> {
    const data = new CsvParse();

    const result = data.parse("");

    expect(result).toEqual([]);
  })

  it("return array of object",()=> {
    const data = new CsvParse();

    const result = data.parse("pan,1,2");

    expect(result).toEqual([{name: "pan",price:1,amount:2}]);
  
  })
  it("return array of objects",()=>{
    const data = new CsvParse();

    const result = data.parse("pan,1,2\npack de 12 huevos,1,2")

    expect(result).toEqual([{name: "pan",price:1,amount:2},{name: "pack de 12 huevos",price:1,amount:2}])



  })
})