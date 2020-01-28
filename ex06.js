/** @format */

var num1 = [30, 20, 50, 30, 60, 80];

var num2 = new Array(80, 30, 20, 50, 30, 90);

console.log("num1의 요소의 수 : " + num1.length);

var mixArr = ["n", 26, "s", "31", new Date(), "songsongsong"];

var objArr = [
  { id: 20200128, name: "songseongmin", dept: "developer" },
  { id: 20200129, name: "POM_POM", dept: "designer" },
  { id: 20200130, name: "CAT", dept: "frontend" }
];

var obj = { num: 1234, name: "HOHOHO", dept: "publisher" };

console.log(num1);
console.log(num2);
console.log(mixArr);
console.log(objArr[2].name, objArr[2].dept);
console.log(obj);
