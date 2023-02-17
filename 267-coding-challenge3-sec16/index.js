"use strict";

// PART 1
// Viết lại async function 'loadNPause' để thực hiện lại bài tập 2, sử dụng
// async/await ( chỉ phần promise được sử dụng ). So sánh ưu nhược điểm của 2
// cách dùng, bạn thấy cách nào dễ dùng hơn
// Nhớ để tốc độ mạng xuống 'Fast 3G'
// PART 2
// 1. Khởi tạo 1 function bất đồng bộ 'loadAll' tham số nhận vào là một mảng các
// đường dẫn ( 'imgArr )
// 2. Sử dụng method .map để lặp qua lần lượt các giá trị, để tải lên tất các image
// bằng 'createImage' function ( gọi kết quả trả về của .map là imgs )
// 3. Log ra 'imgs' xem nó có nhận được kết quả mong muốn không?�
// 4. Sử dụng 'promise combinator' để có thể lấy ra được images element từ mảnh
// 5. Các imageElement nhận được sẽ thêm 1 class 'paralell' ( thêm cho nó một CSS
// riêng để thấy sự khác biệt )
// TEST DATA: ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']. Để test, bạn cần tắt
// function “loadNPause”

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

const imgContainer = document.querySelector(".images");

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement("img");
    img.src = imgPath;

    img.addEventListener("load", function () {
      imgContainer.append(img);
      resolve(img);
    });

    img.addEventListener("error", function () {
      reject(new Error("Image not found"));
    });
  });
};

let currentImg;

// createImage('img/img-1.jpg')
//   .then(img => {
//     currentImg = img;
//     console.log('Image 1 loaded');
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//     return createImage('img/img-2.jpg');
//   })
//   .then(img => {
//     currentImg = img;
//     console.log('Image 2 loaded');
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//   })
//   .catch(err => console.error(err));

// PART 1
const loadNPause = async function () {
  try {
    // Load image 1
    let img = await createImage("img/img-1.jpg");
    console.log("Image 1 loaded");
    await wait(2);
    img.style.display = "none";

    // Load image 1
    img = await createImage("img/img-2.jpg");
    console.log("Image 2 loaded");
    await wait(2);
    img.style.display = "none";
  } catch (err) {
    console.error(err);
  }
};
// loadNPause();

// PART 2
const loadAll = async function (imgArr) {
  try {
    const imgs = imgArr.map(async (img) => await createImage(img));
    const imgsEl = await Promise.all(imgs);
    console.log(imgsEl);
    imgsEl.forEach((img) => img.classList.add("parallel"));
  } catch (err) {
    console.error(err);
  }
};
loadAll(["img/img-1.jpg", "img/img-2.jpg", "img/img-3.jpg"]);
