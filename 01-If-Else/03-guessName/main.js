// - จงเขียนโค้ดเพื่อรับ input เข้ามา โดยให้ถามว่า “Guest my name”
let input = prompt("Guest my name: ");

// - หาก input ที่รับเข้ามาตรงกับชื่อตัวเองให้โชว์ข้อความว่าถูกต้อง
// - หาก input ที่รับเข้ามาไม่ตรงกับชื่อตัวเองให้โชว์ข้อความว่าผิด
let show =  (input === "Auttapon") ? 'correct' : 'incorrect';
alert(show);
