// <!-- Julia và Kate đang học về loài chó, và lần này họ đang học xem sẽ ra sao nếu chó
// ăn quá nhiều hoặc quá ít.
// Ăn quá nhiều đồng nghĩa với phần ăn của chó lớn hơn mức khẩu phần khuyến
// nghị và ngược lại nếu ăn quá ít
// Khẩu phần ăn hợp lý là lớn hơn hoặc nhỏ hơn không vượt quá 10% khẩu phần ăn
// khuyến nghị
// 1. Lặp mảng gồm các object là thông tin của những chú chó, và với mỗi chú chó,
// thêm 1 thuộc tính mới vào object là khẩu phẩn ăn hợp lý (recommended). KHÔNG
// TẠO THÊM MẢNG MỚI, chỉ đơn giản là lặp mảng. Công thức: recommendedFood
// = weight ** 0.75 * 28. (kết quả là khổi lượng thức ăn đượ tính theo gram, và cân
// nặng của chú chó được tính theo kg)
// 2. Tìm ra chú chó của Sarah và in ra console xem chú chó đó ăn quá nhiều hay quá
// ít. Lưu ý: Lưu ý 1 vài chú chó có nhiều hơn 1 chủ, vì vậy bạn phải tìm ra Sarah
// trong mảng 'owner' �
// 3. Tạo ra mảng chứa tất cả chủ của những chú chó ăn quá nhiều
// ('ownersEatTooMuch') và 1 mảng chứa tất cả chủ của những chú chó ăn quá ít
// ('ownersEatTooLittle').
// 4. In ra 1 chuỗi tương ứng với mỗi mảng đã tạo ở Yêu cầu 3, Ví dụ: "Matilda and
// Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat
// too little!"
// LAB	3
// LẬP TRÌNH JAVASCRIPT NÂNG CAO TRANG 4
// 5. In ra xem có chú chó nào có khẩu phần ăn chính xác với khẩu phần ăn khuyến
// nghị (output yêu cầu là 'true' hoặc 'false')
// 6. In ra xem có chú chó nào có khẩu phần ăn ở mức hợp lý (không >10% hoặc
// <10% mức đề nghị)(output yêu cầu là 'true' hoặc 'false')
// 7. In ra tất cả các chú chó có khẩu phần ăn hợp lý (sử dụng lại điều kiện đã tìm
// được ở y.c 6 để in ra mảng gồm các phần tử thỏa mãn)
// 8. Tạo ra 1 mảng chưa các chú chó mới và sắp xếp theo khẩu phần ăn đề nghị
// theo thứ tự tăng dần (hãy nhớ rằng khẩu phần ăn của mỗi chú chó nằm trong
// mảng mỗi object thuộc mảng)
// HINT 1: Có thể sử dụng những công cụ khác nhau để xử lý bài toán, bạn có thể
// tổng hợp lại bài học để chọn ra 1 trong số các tất các cách làm mà bạn hiểu �
// HINT 2: Khẩu phần ăn không quá 10% hoặc ít hơn 10% khẩu phần đề nghị có thể
// hiểu như sau: current > (recommended * 0.90) && current < (recommended *
// 1.10). Cơ bản thì khẩu phần ăn hiện tại nằm trong khoảng 90% và 110% của khẩu
// phần ăn đề nghị
// TEST DATA:
// const dogs = [
//  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
//  { weight: 8, curFood: 200, owners: ['Matilda'] },
//  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
//  { weight: 32, curFood: 340, owners: ['Michael'] }
// ] -->

const dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
  { weight: 32, curFood: 340, owners: ["Michael"] },
];

// 1.
dogs.forEach((dog) => (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28)));

// 2.
const dogSarah = dogs.find((dog) => dog.owners.includes("Sarah"));
console.log(dogSarah);
console.log(
  `Sarah's dog is eating too ${
    dogSarah.curFood > dogSarah.recFood ? "much" : "little"
  } `
);

// 3.
const ownersEatTooMuch = dogs
  .filter((dog) => dog.curFood > dog.recFood)
  .flatMap((dog) => dog.owners);
// .flat();
console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs
  .filter((dog) => dog.curFood < dog.recFood)
  .flatMap((dog) => dog.owners);
console.log(ownersEatTooLittle);

// 4.
// "Matilda and Alice and Bob's dogs eat too much!"
//  "Sarah and John and Michael's dogs eat too little!"
console.log(`${ownersEatTooMuch.join(" and ")}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(" and ")}'s dogs eat too little!`);

// 5.
console.log(dogs.some((dog) => dog.curFood === dog.recFood));

// 6.
// current > (recommended * 0.90) && current < (recommended * 1.10)
const checkEatingOkay = (dog) =>
  dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1;

console.log(dogs.some(checkEatingOkay));

// 7.
console.log(dogs.filter(checkEatingOkay));

// 8.
// sort it by recommended food portion in an ascending order [1,2,3]
const dogsSorted = dogs.slice().sort((a, b) => a.recFood - b.recFood);
console.log(dogsSorted);
