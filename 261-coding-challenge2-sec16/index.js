"use strict";

// Xây dựng một chức năng loading ảnh và hiển thị ra màn hình
// PART 1
// 1. Khởi tạo một function 'createImage' tham số đầu vào là imgPath. Function này
// sẽ return về một Promise với chức năng là tạo ra 1 image mới ( dùng
// document.createElement('img') ) thuộc tính src của new image sẽ là tham số
// imgPath được truyền vào. Khi image được tải xong hãy append image element
// vừa tạo vào dom và thay thế element có selector là ".image". Trong trường hợp
// load ảnh bị lỗi hãy reject promise đi
// Nếu phần này quá khó thì chỉ cần xem phần đầu tiên của phần solution
// PART 2
// 2. Thực hiện promise bằng .then và cũng thêm .catch để xử lý lỗi
// 3. Sau khi load xong image hãy tạm dừng thực thi trong 2s bằng function đã tạo
// trước đó
// 4. Sau khi chờ xong 2s, hãy ẩn image hiện tại ( style = display: none ) và load tiếp
// hình ảnh thứ 2
// 5. Sau khi image thứ 2 đang load. thì cũng tạm dừng thực thi trong 2s
// 6. Sau 2s thì sẽ ẩn hình ảnh hiện tại
// ( Gợi ý: Hiểu đơn giản là 1 hình ảnh sau khi được load xong sau 2s sẽ bị ẩn đi và
// hiện hình ảnh tiếp theo lên )
// LAB	8
// LẬP TRÌNH JAVASCRIPT NÂNG CAO TRANG 3
// TEST DATA: Test data bằng cách đặt sai đường dẫn ảnh hoặc chỉnh tốc độ mạng
// xuống còn Fast 3G trong: F12 => Netword => biểu tượng bên cạnh icon wifi

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

createImage("img/img-1.jpg")
  .then((img) => {
    currentImg = img;
    console.log("Image 1 loaded");
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = "none";
    return createImage("img/img-2.jpg");
  })
  .then((img) => {
    currentImg = img;
    console.log("Image 2 loaded");
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = "none";
  })
  .catch((err) => console.error(err));
