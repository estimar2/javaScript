/** @format */

// 메서드 오버로딩 : 하나의 클래스 내부에서 일어나는 일
// 메서드 오버라이딩 : 상속과 관련되어 있음
// 주 클래스에 있던 메서드를 서브클래스에서는 물러받은 메서드를 다르게 재정의해서 사용할 수 있다.

class Animal {
  // 메인 클래스
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  speak() {
    // 자바스크립트는 타언어와 달리 문법적으로 구현이 되지 않는다.
    if (!this.name && !this.age) {
      console.log("동물이 웁니다. 그 동물의 이름도 나이도 모릅니다.");
    } else if (!this.name) {
      console.log("동물이 웁니다. 나이는 " + this.age + "입니다.");
    } else if (!this.age) {
      console.log(this.name + "가 웁니다. 나이는 모릅니다.");
    } else {
      console.log(this.name + "가 웁니다. 나이는 " + this.age + "입니다.");
    }
  }
}

class Dog extends Animal {
  // 서브 클래스
  constructor(name, age) {
    super(name, age);
    this.bike = "멍멍멍";
  }
  speak() {
    // 메서드 오버라이드(딩) = Method override : 부모 클래스에서 정의된 메서드를 상속된 자시 ㄱ클래스에서 재정의하여 사용되는 것을 의미
    if (!this.name && !this.age) {
      console.log("이름도 나이도 모를 멍멍이가 " + this.bike + " 짖습니다.");
    } else if (!this.name) {
      console.log(
        "이름 모를 멍멍이가 " +
          this.bike +
          " 짖습니다. 나이는 " +
          this.age +
          "입니다."
      );
    } else if (!this.age) {
      console.log(
        "이름이" +
          this.name +
          "인 멍멍이가 " +
          this.bike +
          " 짖습니다. 나이는 모릅니다."
      );
    } else {
      console.log(
        this.name +
          "가 " +
          this.bike +
          " 짖습니다. 나이는 " +
          this.age +
          "입니다."
      );
    }
  }
}

let a1 = new Animal();
let a2 = new Animal("사자");
let a3 = new Animal("호랑이", 7);

a1.speak();
a2.speak();
a3.speak();

let d1 = new Dog();
let d2 = new Dog("꾸꾸");
let d3 = new Dog("사월이", 5);

d1.speak();
d2.speak();
d3.speak();
