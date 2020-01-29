const set = new Set();

set.add("DIAMOND");
set.add("PLATINUM");
set.add("GOLD");
set.add("SILVER");
set.add("BRONZE");

console.log("## Output by forEach ##");
set.forEach(value => console.log(value));

console.log("## Output by for-of ##");
for (let item of set) {
  console.log(item);
}

set.delete("BRONZE"); // injae 요소 제거
console.log(set.has("BRONZE")); // injae 존재 유무

let arr = Array.from(set);
console.log("## set을 배열로 전환하기 ##");
console.log(arr);
