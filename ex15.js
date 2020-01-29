//클래스 만들기2
// 생성자 함수에 의한 클래스 만들기 - 틀만 정의

function Pro(name, price) {
  this.name = name;
  this.price = price;
  this.getInfo = function() {
    return (
      "제품이름은 : " + this.name + "이며, 가격은" + this.price + "입니다."
    );
  };
}

let p1 = new Pro("Peng", 3000);
let p2 = new Pro("Soo", 5000);
let p3 = new Pro();

p3.name = "HOHOHO";
p3.price = 1234;

console.log(p1.getInfo());
console.log(p2.getInfo());
console.log(p3.getInfo());
