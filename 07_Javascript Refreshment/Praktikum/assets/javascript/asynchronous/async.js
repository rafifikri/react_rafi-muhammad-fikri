/*
- Synchronous -> setiap perintah/command itu dijalankan satu per satu sesuai urutan code (blocking)
- Asynchronous -> eksekusi atau output-nya tidak selalu berdasarkan urutan code, melainkan berdasarkan waktu proses (non-blocking)
*/

// console.log("Hello");
// console.log("Javascript");
// console.log("Coder");

console.log("Hello");
setTimeout(() => {
    console.log("Javascript");
}, 3000);
console.log("Coder");