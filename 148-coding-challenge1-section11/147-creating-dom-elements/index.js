"use strict";
// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

/////////////////////////////////////////////////
// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

/////////////////////////////////////////////////
// Functions

const displayMovements = function (movements) {
  containerMovements.innerHTML = "";

  movements.forEach(function (mov, i) {
    const type = mov > 0 ? "deposit" : "withdrawal";

    const html = `
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
          <div class="movements__value">${mov}€</div>
        </div>
      `;

    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

displayMovements(account1.movements);

// Julia và Kate đang nghiên cứu về loài chó. Vì vậy, mỗi người trong số họ đã hỏi 5
// chủ sở hữu chó về tuổi của con chó của họ và lưu trữ dữ liệu vào một mảng (một
// mảng cho mỗi người). Hiện tại, họ chỉ quan tâm đến việc biết một con chó là
// trưởng thành hay chó con. Chó được coi là trưởng thành nếu ít nhất 3 tuổi và là
// chó con nếu chưa đầy 3 tuổi.
// Tạo một hàm 'checkDogs', hàm này chấp nhận 2 mảng tuổi của chó ('dogsJulia' và
// 'dogsKate') và thực hiện những việc sau:
// 1. Julia phát hiện ra rằng chủ của hai con chó ĐẦU TIÊN và HAI con chó CUỐI
// CÙNG thực sự nuôi mèo chứ không phải chó! Vì vậy, hãy tạo một bản sao nông
// của mảng của Julia và xóa tuổi mèo khỏi mảng đã sao chép đó (vì đó là một cách
// làm không tốt để thay đổi các tham số hàm)
// 2. Tạo một mảng có cả dữ liệu của Julia (đã sửa) và Kate
// 3. Đối với mỗi con chó còn lại, hãy đăng nhập vào bảng điều khiển xem đó là chó
// trưởng thành ("Chó số 1 là người lớn và 5 tuổi") hay chó con ("Chó số 2 vẫn là chó
// con �")
// 4. Chạy hàm cho cả hai bộ dữ liệu thử nghiệm
// GỢI Ý: Sử dụng các công cụ từ tất cả các bài giảng trong phần này cho đến nay �
// TEST DATA 1: Dữ liệu của Julia [3, 5, 2, 12, 7], dữ liệu của Kate [4, 1, 15, 8, 3]
// TEST DATA 2: Dữ liệu của Julia [9, 16, 6, 8, 3], dữ liệu của Kate [10, 5, 6, 1, 4]

const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJuliaCorrected = dogsJulia.slice();
  dogsJuliaCorrected.splice(0, 1);
  dogsJuliaCorrected.splice(-2);
  // dogsJulia.slice(1, 3);
  const dogs = dogsJuliaCorrected.concat(dogsKate);
  console.log(dogs);

  dogs.forEach(function (dog, i) {
    if (dog >= 3) {
      console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`);
    } else {
      console.log(`Dog number ${i + 1} is still a puppy 🐶`);
    }
  });
};
// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);
