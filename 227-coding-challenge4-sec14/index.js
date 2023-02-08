"use strict";
// 1. Khởi tạo đối tượng bài 3, nhưng sử dụng ES6 classes: khởi tạo 'EVCL' là con của
// 'CarCl' ( EVCL extends CarCl );
// 3. Để property 'charge' là private;
// 3. Triển khai 2 method 'accelerate' và 'chargeBattery' ở đối tượng này và cập
// nhập lại method 'brake' trong đối tượng 'CarCl'. ???
// Test case
// DỮ LIỆU Ô TÔ 1: Ô tô 'Rivian' di chuyển với tốc độ 120 km/h, với mức pin là 23%

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
    return this;
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

class EVCl extends CarCl {
  #charge;

  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make} is going at ${this.speed} km/h, with a charge of ${
        this.#charge
      }`
    );
    return this;
  }
}

const rivian = new EVCl("Rivian", 120, 23);
console.log(rivian);
// console.log(rivian.#charge);
rivian
  .accelerate()
  .accelerate()
  .accelerate()
  .brake()
  .chargeBattery(50)
  .accelerate();

console.log(rivian.speedUS);
