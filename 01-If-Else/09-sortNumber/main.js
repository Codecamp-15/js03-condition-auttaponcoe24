// - เขียนโปรแกรมสำหรับรับตัวเลขจากผู้ใช้งาน 3 ตัวเลข
// - แสดงผลลัพธ์เป็นตัวเลขที่เรียงกันจากมากไปน้อย  
//   เช่นรับค่าเป็น -1 ,4, 0 ให้แสดงผลเป็น 4, 0, -1

// v.0 แสดงเฉพาะตัวที่มากสุด
// v.1 Handle เลขที่ไม่เหมือนกัน => แสดงผลเป็นการเรียงลำดับ
// v.2 Handle เลขที่เหมือนกันได้

let x = +prompt("number1 : ")
let y = +prompt("number2 : ")
let z = +prompt("number3 : ")


// CASE1 : x มากสุด
// CASE2 : y มากสุด
// CASE3 : z มากสุด
let max;
let mid;
let min;

// // v.0
// if(x > y && x > z) {
//     // console.log(`MAX = ${x}`);
//     max = x;
// } else if(y > x && y > z) {
//     // console.log(`MAX = ${y}`);
//     max = y;
// } else if(z > x && z > y) {
//     // console.log(`MAX = ${z}`);
//     max = z;
// }
// console.log(`MAX = ${max}`);

// v.1
if(x > y && x > z) {
    max = x;
    if (y > z) {
        mid = y;
        min = z;
    } else {
        mid = z;
        min = y;
    }
} else if(y > x && y > z) {
    max = y;
    if (x > z) {
        mid = x;
        min = z;
    } else {
        mid = z;
        min = x;
    }
} else if(z > x && z > y) {
    max = z;
    if (x > y) {
        mid = x;
        min = y;
    } else {
        mid = y;
        min = x;
    }
}
console.log(`MAX = ${max} : MID = ${mid} : MIN = ${min}`);


// กรณีใช้ arr function
// let arr = [x, y, z];
// alert(arr.sort());

