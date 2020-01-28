/** @format */

var txt1 = "text1";
console.log(txt1);

if (true) {
  var txt2 = "text2";
  console.log(txt2);
}

let txt3 = "text3";

const txt4 = "text4"; //변경이 불가능

console.log(txt3);
console.log(txt4);

txt3 = "song";
console.log(txt3);

txt3 = 500;
//txt4 = "POMPOM";
console.log(txt4);

if (true) {
  let txt5 = "POM_POM"; //같은 블록 안에서만 통용
  console.log(txt5);
}
//console.log(txt5);
