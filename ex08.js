const map = new Map(); //Map()은 이더레이션 map의 생성자 함수

map.set("20200129", "PUMA");
map.set("20200130", "FILA");
map.set("20200202", "NIKE");

console.log("## forEach with arrow ##");

map.forEach((value, key) => console.log(key, value));

console.log("## for-of ##");
// item : 배열의 역활
for (let item of map) {
  //for-in 사용X, for-of 사용O
  console.log(item[0], item[1]);
}

console.log("## for-of 2 ##");
//key, vqlue값을 정해줌
for (let [key, value] of map) {
  console.log(key, value);
}

console.log("## key값만 추출하는 keys() ##");
const keys = map.keys(); // keys() 메서드는 Map의 key값만 별도로 추출함
for (let key of keys) {
  console.log(map.get(key)); // map.get(key) - map에 기억된 데이터 출력
}

console.log("## map.get(key) ##");

console.log("key가 20200202인 데이터 : " + map.get("20200202"));

map.delete("20200202"); // 202002인 데이터 소거

console.log("20200202를 삭제한 후 값은? : ", map.has("20200202"));
// map.has(key) : 메모리맵에 key에 해당하는 값이 존재하는지 true나 false로 유무 출력
