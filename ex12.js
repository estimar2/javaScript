function calc(a, b) {
  let sum1 = a + b;
  sum2 = a + b;
  return sum1;
}
console.log(calc(20, 40));

var calc1 = function(a, b) {
  return a + b;
};
console.log(calc1(60, 20));

// 함수내부에 함수를 활용하여 재귀 (재귀호출형태의 함수)
function calc2(func) {
  console.log(func(40, 60));
}

calc2(calc1);

// 함수를 배열로 선언하여 사용하는 경우
let fncArr = [
  function() {
    console.log("a1");
  },
  "a2"
];

// 함수를 맵으로 선언하여 사용하는 경우
let fncMap = new Map();
fncMap.set("calcFnc1", function(n1, n2) {
  return n1 * n2;
});
fncMap.set("calcFnc2", function(n1, n2) {
  return n1 / n2;
});

fncArr[0]();

console.log(fncArr[1]);
console.log(fncMap.get("calcFnc1")(24, 365));
console.log(fncMap.get("calcFnc2")(3000, 24));
