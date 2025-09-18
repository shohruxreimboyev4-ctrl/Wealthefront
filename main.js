// 1-masala
let n = 1, m = 20, sanoq = 0;
for (let i = n; i <= m; i++) {
  let tub = true;
  if (i < 2) tub = false;
  for (let j = 2; j * j <= i; j++) {
    if (i % j === 0) tub = false;
  }
  if (tub) sanoq++;
}
console.log("1-masala:", sanoq);

// 2-masala
let arr1 = [6, -32, 87, -12, -76, 32, 866, -111];
let musbat = [], manfiy = [];
for (let i of arr1) {
  if (i >= 0) musbat.push(i); else manfiy.push(i);
}
console.log("2-masala Musbat:", musbat);
console.log("2-masala Manfiy:", manfiy);

// 3-masala
let arr2 = [6, -32, 87, -12, -76, 32, 866, -111];
let son = 32;
console.log("3-masala:", arr2.includes(son) ? "Bor" : "Yo'q");

// 4-masala
console.log("4-masala: 50.000 Khasan Tursunovga o'tkazildi :)");

// 5-masala
let arr3 = [5, 3, 8, 1, 2];
for (let i = 0; i < arr3.length; i++) {
  for (let j = i + 1; j < arr3.length; j++) {
    if (arr3[i] > arr3[j]) {
      let t = arr3[i]; arr3[i] = arr3[j]; arr3[j] = t;
    }
  }
}
console.log("5-masala:", arr3);

// 6-masala
let arr4 = [1, 2, 2, 3, 4, 4, 5];
let yangi = [];
for (let i of arr4) {
  if (!yangi.includes(i)) yangi.push(i);
}
console.log("6-masala:", yangi);

// 7-masala
console.log("7-masala:");
let n2 = 5;
for (let i = n2; i > 0; i--) {
  console.log("*".repeat(i));
}
