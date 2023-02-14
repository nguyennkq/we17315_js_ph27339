"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

const renderCountry = function (data, className = "") {
  const html = `
    <article class="country ${className}">
      <img class="country__img" src="${data.flags.png}" />
      <div class="country__data">
        <h3 class="country__name">${data.name}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(
          +data.population / 1000000
        ).toFixed(1)} people</p>
        <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
        <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
      </div>
    </article>
    `;
  countriesContainer.insertAdjacentHTML("beforeend", html);
  countriesContainer.style.opacity = 1;
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText("beforeend", msg);
  countriesContainer.style.opacity = 1;
};

const getJSON = function (url, errorMsg = "Something went wrong") {
  return fetch(url).then((response) => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

    return response.json();
  });
};

// // const getCountryData = function (country) {
// //   // Country 1
// //   fetch(`https://restcountries.com/v2/name/${country}`)
// //     .then((response) => {
// //       console.log(response);
// //       if (!response.ok)
// //         throw new Error(`Country not found (${response.status})`);
// //       return response.json();
// //     })
// //     .then((data) => {
// //       renderCountry(data[0]);
// //       // const neighbour = data[0].borders[0];
// //       const neighbour = "áldhas";
// //       if (!neighbour) return;

// //       // Country 2
// //       return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
// //     })
// //     .then((response) => {
// //       if (!response.ok)
// //         throw new Error(`Country not found (${response.status})`);

// //       return response.json();
// //     })
// //     .then((data) => renderCountry(data, "neighbour"))
// //     .catch((err) => {
// //       console.error(`${err} 💥💥💥`);
// //       renderError(`Something went wrong 💥💥 ${err.message}. Try again!`);
// //     })
// //     .finally(() => {
// //       countriesContainer.style.opacity = 1;
// //     });
// // };

// btn.addEventListener("click", function () {
//   getCountryData("portugal");
// });

// // // getCountryData("akshh");

// const getCountryData = function (country) {
//   // Country 1
//   getJSON(`https://restcountries.com/v2/name/${country}`, "Country not found")
//     .then((data) => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders[0];

//       if (!neighbour) throw new Error("No neighbour found!");

//       // Country 2
//       return getJSON(
//         `https://restcountries.com/v2/alpha/${neighbour}`,
//         "Country not found"
//       );
//     })

//     .then((data) => renderCountry(data, "neighbour"))
//     .catch((err) => {
//       console.error(`${err} 💥💥💥`);
//       renderError(`Something went wrong 💥💥 ${err.message}. Try again!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// btn.addEventListener("click", function () {
//   getCountryData("portugal");
// });

// getCountryData("australia");

// Trong bài này bạn cần phải xây dựng một function 'whereAmI' để render ra 1
// quốc gia dựa theo tọa độ GPS. Để làm được điều này bạn cần sử dụng một API
// thứ 2 để cho tọa độ mã hóa địa lý
// Đây là nhiệm vụ của bạn:
// PART 1
// 1. Tạo function whereAmI , whereAmI nhận 2 tham số đầu vào: vĩ độ (lat) và kinh
// độ (lng) ( Đây là tọa độ GPS, ví dụ bên dưới )
// 2. Thực hiện 'reverse geocoding' của các tọa độ được cung cấp. 'Reverse
// geocoding' có nghĩa là nó sẽ chuyển đồi từ tọa độ thành một địa chỉ có ý nghĩa
// như Hà Nội,Hải Phòng,... . Sử dụng API này để 'reverse geocoding':
// https://geocode.xyz/api.
// AJAX sẽ call API với địa chỉ URL dạng này:
// https://geocode.xyz/52.508,13.381?geoit=json. Sử dụng fetch API kết hợp với
// promises (then,catch) để lấy dữ liệu. Không được sử dụng function getJSON
// 3. Khi bạn đã có dữ liệu, hãy thử log nó ra để xem được tất cả các thuộc tính nhận
// được từ vị trí được cung cấp. Dùng data đó để log ra một dòng như: 'You are in
// Berlin, Germany';
// 4. Sử dụng method .catch() cuối mỗi promise để có thể bắt được lỗi khi thực hiện
// thất bại
// LAB	8
// LẬP TRÌNH JAVASCRIPT NÂNG CAO TRANG 2
// 5. API trên chỉ cho phép gửi 3 requests trong một giây. Nếu gửi quá nhanh bạn sẽ
// nhận được về mã lỗi 403. Chú ý có thể method .catch của fetch() sẽ không được
// chạy trong trường hợp này. Vì vậy hãy tự log response ra và tạo một message lỗi
// có ý nghĩa
// PART 2
// 6. Sử dụng data nhận được để render ra một quốc gia. Hãy lấy thuộc tính liên
// quan từ result API và cắm nó vào API đang sử dụng???(có lẽ chỗ này dịch sai)
// 7. Render ra một quốc gia mà không có lỗi nào xảy ra
// TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
// TEST COORDINATES 2: 19.037, 72.873
// TEST COORDINATES 2: -33.933, 18.474

const whereAmI = function (lat, lng) {
  fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
    .then((res) => {
      if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
      return res.json();
    })
    .then((data) => {
      console.log(data);
      console.log(`You are in ${data.city}, ${data.country}`);

      return fetch(`https://restcountries.com/v2/name/${data.country}`);
    })
    .then((res) => {
      if (!res.ok) throw new Error(`Country not found (${res.status})`);

      return res.json();
    })
    .then((data) => renderCountry(data[0]))
    .catch((err) => console.error(`${err.message} 💥`));
};
whereAmI(52.508, 13.381);
whereAmI(19.037, 72.873);
whereAmI(-33.933, 18.474);

// btn.addEventListener("click", whereAmI);
