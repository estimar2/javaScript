//프로토타입을 이요한 클래스

function Pro(name, age) {
  this.name = name;
  this.age = age;
}

Pro.prototype.getInfo = function() {
  let pan = "미성년";
  if (this.age >= 20) {
    pan = "성년";
  }
  return this.name + "님의 나이는 " + this.age + "이며, " + pan + "입니다.";
};

let n1 = new Pro("GOLD", 29);
let n2 = new Pro("SILVER", 17);

console.log(n1.getInfo());
console.log(n2.getInfo());
