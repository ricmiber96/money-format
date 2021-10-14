import  fs  from "fs";

const rosFilePath = process.argv[2];

const result = fs.readFileSync(rosFilePath,"utf-8");

//console.log(result);
const str= result.replace(/\n/g,",");
console.log(str);
const vector=str.split(",");

vector.forEach((element,index) => {console.log(element,index)});



// const vector2=vector.map((element) => {a=element.split(","),b=a[1]+a[2],b});
// console.log(vector2);
// vector2.forEach((element,index) => {console.log(element,index)});

