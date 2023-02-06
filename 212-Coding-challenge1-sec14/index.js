"use strict";

// 1. Sử dụng constructor function để khởi tạo đối tượng ô tô (Car). Ô tô có 2 thuộc
// tính: make & speed. Speed là tốc độ hiện tại của ô tô tính bằng km/h
// 2. Thực hiện một phương thức (Method) "accelerate" để tăng speed hiện tại của
// ô tô thêm 10 và in ra speed mới của ô tô;
// 3. Thực hiện một phương thức (Method) "brake" giảm speed hiện tại của ô tô đi 5
// và in ra speed mới của ô tô;
// 4. Khởi tạo 2 đối tượng ô tô (Car) và thử nghiệm gọi 2 method "brake" và
// "accelerate" nhiều lần trên mỗi đối tượng;
// Test case
// Dữ liệu ô tô 1: BMW đang chạy với tốc độ 120km/h
// Dữ liệu ô tô 2: Mercedes đang chạy với tốc độ 95km/h

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

const bmw = new Car("BMW", 120);
const mercedes = new Car("Mercedes", 95);

bmw.accelerate();
bmw.accelerate();
bmw.brake();
bmw.accelerate();
