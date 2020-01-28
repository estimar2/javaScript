/** @format */

console.log("for문1");

const colors = ["black", "skyblue", "tomato"];

for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

console.log("for문2");

for (let key in colors) {
  console.log(key + " : " + colors[key]);
}

console.log("while문");
var i = 0;
while (colors[i] != null) {
  console.log(colors[i]);
  i++;
}

console.log("forEach문1");
colors.forEach(function(value) {
  // 배열명.forEach(function(value문))
  console.log(value);
});

console.log("forEach문2");
colors.forEach(value => console.log(value));
