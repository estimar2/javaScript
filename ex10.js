const set = new Set();

set.add("song");
set.add("seong");
set.add("min");
set.add("songsong");
set.add("injae");

console.log("## Output by forEach ##");
set.forEach(value => console.log(value));

console.log("## Output by for-of ##");
for (let item of set) {
  console.log(item);
}

set.delete("injae"); // injae 요소 제거
console.log(set.has("injae")); // injae 존재 유무

let arr = Array.from(set);
console.log("## set을 배열로 전환하기 ##");
console.log(arr);
