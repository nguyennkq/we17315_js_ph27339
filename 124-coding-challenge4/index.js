"use strict";
// Viết 1 chương trình nhận vào 1 danh sách các biến được viết theo kiểu
// underscore (ví dụ: ten_bien) và chuyển nó sang dạng camelCase (ví dụ: tenBien)
// Đầu vào sẽ đến từ một vùng văn bản được chèn vào DOM (xem mã bên dưới) và
// chuyển đổi sẽ xảy ra khi nhấn nút.
// - Dưới đây là dữ liệu đầu vào cần test:
// underscore_case;
/*
first_name;
Some_Variable;
calculate_AGE;
delayed_departure;
*/
// - Đầu ra mong muốn (Hãy log các kết quả này ra màn hình để đối chiếu với
// kết quả phía dưới)
// underscoreCase   ✅
// firstName        ✅✅
// someVariable     ✅✅✅
// calculateAge     ✅✅✅✅
// delayedDeparture ✅✅✅✅✅
// Lưu ý 1: Hãy lưu ý rằng ký tự nào xuất hiện 1 ký tự xuống dòng "\n" trong đoạn text �
// Lưu ý 2: Giải pháp đơn giản cho phần này là tách ra 2 từ từ ký tự đầu vào ví dụ:("a_b" -> "a" và "b")
// Lưu ý 3: Đừng để ý về dấu tick kia ✅. Vấn đề sẽ được giải quyết khi bạn chuyển đổi �
// Lưu ý 4: Thử thách này có thể sẽ khó với bạn, vì vậy hãy bắt đầu xem cách giải trong trường hợp cảm thấy không có hướng giải quyết.
// Sau cùng, hãy test các kết quả đầu vào của bạn xem có đúng không ?

document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));

document.querySelector("button").addEventListener("click", function () {
  const text = document.querySelector("textarea").value;
  const rows = text.split("\n");

  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split("_");

    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${"✅".repeat(i + 1)}`);
  }
});
