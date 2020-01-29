class Polygon {
  // 메인 클래스(공통클래스) : 상속받을 수 있는 클래스
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

// extends : 상속받고자 하는 class의 constructor를 받아옴
class Square extends Polygon {
  // 상속클래스 = 서브클래스
  constructor(length) {
    // 상속 클래스는 반드시 상속 받고자 하는 것을 super 키워드로 지정해야 this를 사용하여 연결할 수 있음
    // super로 위에서 받아온 height, width를 지정해줘야함
    super(length, length);

    this.name = "Square";
  }
  // get (출력물)과 set
  get area() {
    return this.height * this.width;
  }
  set area(value) {
    this.value = value;
  }
}

var s = new Square(11);

console.log(s.name + "의 면적은 " + s.area + " 입니다.");
