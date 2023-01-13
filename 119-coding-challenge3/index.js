"use strict";

// Hãy tiếp tục với app đặt cược của chúng ta! Lúc này, chúng ta có 1 mảng kết hợp
// theo dạng [key,value] tương ứng với những đoạn log ghi lại những sự kiện xảy ra
// trong trận đấu.
// Trong đó:
// -> key = phút diễn ra
// -> value = tên hành động diễn ra (ghi bàn, thay người, nhận thẻ đỏ,...)
// Bây giờ chúng ta có 1 mảng liên kế gồm các sự kiện xảy ra trong trận đấu cùng
// thời gian tương ứng
// 1. Hãy tạo ra 1 mảng các sự kiện khác nhau xảy ra trong suốt trận đấu (lưu ý là
// không trùng nhau)
// 2. Sau khi trò chơi kết thúc, phát hiện ra rằng thẻ vàng phút 64 là không đúng. Hãy
// xóa nó khỏi danh sách sự kiện trong trận đấu.
// 3. In ra console theo định dang như sau:"1 sự kiện xảy ra, trung bình mỗi 9 phút".
// Lưu ý răng mỗi trận đấu có 90 phút.
// LAB	2
// LẬP TRÌNH JAVASCRIPT NÂNG CAO TRANG 2
// 4. Lặp toàn bộ mảng sự kiện và in ra màn hình, đánh dấu đối với mỗi sự kiện trong
// trận đấu diễn ra trong hiệp 1 hay hiệp 2,
// Ví dụ: [FIRST HALF] 17: ⚽ GOAL
const gameEvents = new Map([
  [17, "⚽️ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽️ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽️ GOAL"],
  [80, "⚽️ GOAL"],
  [92, "🔶 Yellow card"],
]);

// 1.
const events = [...new Set(gameEvents.values())];
console.log(events);

// 2.
gameEvents.delete(64);

// 3.
console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);
const time = [...gameEvents.keys()].pop();
console.log(time);
console.log(
  `An event happened, on average, every ${time / gameEvents.size} minutes`
);

// 4.
for (const [min, event] of gameEvents) {
  const half = min <= 45 ? "FIRST" : "SECOND";
  console.log(`[${half} HALF] ${min}: ${event}`);
}
