let obj1 = { id: "estimar2", site: "estimar2.github.io", name: "song" };

for (var key in obj1) {
  console.log(key + " = " + obj1[key]);
}

let obj2 = [
  { name: "GOLD", age: 26 },
  { name: "SILVER", age: 31 },
  { name: "BRONZE", age: 17 }
];
for (var i = 0; i < 3; i++) {
  for (var key in obj2[i]) {
    console.log(i + 1 + "번째 데이터의 " + key + " = " + obj2[i][key]);
  }
}
