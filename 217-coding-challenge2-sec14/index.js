"use strict";
// 1. Tạo lại đối tượng Car của bài 1, nhưng sử dụng ES6 class;
// 2. Thêm một getter 'speedUS' trả về speed hiện tại với đơn vị mi/h ( chia cho 1.6,
// 1mi = 1.60934km );
// 3. Thêm một setter 'speedUS' để thay đổi tốc độ hiện tại tính bằng mi/h ( nhưng
// trước khi lưu sẽ đổi nó sang đơn vị km/h bằng cách mi/h*1.6 )
// 4. Khởi tạo đối tượng ô tô (Car) và thực hiện 2 phương thức (method) 'accelerate'
// & 'brake', 2 getter & setter;
// Test case
// LAB	7
// LẬP TRÌNH JAVASCRIPT NÂNG CAO TRANG 2
// DỮ LIỆU XE 1: Xe ô tô Ford đang di chuyển với vận tốc 120km/h

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
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const ford = new CarCl("Ford", 120);
console.log(ford.speedUS);
ford.accelerate();
ford.accelerate();
ford.brake();
ford.speedUS = 50;
console.log(ford);
