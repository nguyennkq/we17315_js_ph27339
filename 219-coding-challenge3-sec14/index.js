"use strict";
// 1. Sử dụng contructor function để khởi tạo một đối tượng ô tô điện (ElectricCar)
// có tên EV như một lớp con của Car ( ElectricCar extends(Kế thừa) Car ), ngoài
// 'make' & 'speed' ElectricCar còn có mực pin hiện tại tính bằng % ( 'charge'
// property );
// 2. Khởi tạo phương thức ( method ) 'chargeBattery' nhận một đối số là 'chargeTo'
// và và thay đổi mức pin hiện tại bằng 'chargeTo';
//  *Gọn: chargeBattery là một phương thức dùng để thay đổi mức pin hiện tại của
// ElectricCar;
// 3. Khởi tạo phương thức (method) 'accelerate' để tăng tốc độ ô tên thêm 20,
// đồng thời giảm mức pin (charge) đi 1%. Sau đó in ra dòng log: 'Tesla going at 140
// km/h, with a charge of 22%';
//  *Gọn: accelerate thực hiện 3 việc: (speed + 20) & (charge - 1) &
// console.log('Tesla going at 140 km/h, with a charge of 22%');
// 4. Khởi tạo đối tượng ElectricCar và thực hiện các phương thức (method)
// 'accelerate', 'brake' và 'chargeBattery' ( mức pin là 90% )
//  *Chú ý: Vấn đề khi thực hiện method 'accelerate', Hãy đọc lại về 'Tính đa hình
// của javascript' (JavaScript Polymorphism);
// Test case
// DỮ LIỆU XE 1: Ô tô 'Tesla' đang di chuyển với vận tốc 120 km/h, có mức pin là
// 23%;
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

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

// Link the prototypes
EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}`
  );
};

const tesla = new EV("Tesla", 120, 23);
tesla.chargeBattery(90);
console.log(tesla);
tesla.brake();
tesla.accelerate();
