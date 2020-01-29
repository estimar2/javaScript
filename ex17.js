class Pro {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  getInfo() {
    return this.name + "의 나이는" + this.age + "입니다.";
  }
}

let w1 = new Pro("GOLD", 25);
let w2 = new Pro("SILVER", 31);

console.log(w1.getInfo());
console.log(w2.getInfo());
