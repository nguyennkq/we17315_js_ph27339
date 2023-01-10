"use strict";
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};
// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// console.log(x, y, z);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);
// // Đảo ngược sử dụng biến tạm thời

// // chuyển đổi biến
// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// Nhận 2 giá trị trả về từ một hàm
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// lấy các giá trị khi mảng lông nhau
const nested = [2, 3, [5, 6]];

// const [i, , j] = nested;
// console.log(i, j);

const [i, , [j, k]] = nested;
console.log(i, j, k);

// giá trị mặc định
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
