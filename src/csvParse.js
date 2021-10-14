export class CsvParse{

  parse(text) {
    if(text === ""){
      return [];
    }
    else if(text.search("\n") === -1){

      const arrayResult =  text.split(",")
      const result = 
      [{ name:arrayResult[0],
        price: parseFloat(arrayResult[1]), 
        amount:parseInt(arrayResult[2]),
      }]

      return result
    }

    else {
      
      const str = text.split("\n");
      const arrayProducts = []
      for (let i = 0; i < str.length; i++) {
        const element = str[i].split(",");
        arrayProducts.push({ name:element[0],
          price: parseFloat(element[1]), 
          amount:parseInt(element[2]),
        })
      }      
      return arrayProducts

    }
  }
}