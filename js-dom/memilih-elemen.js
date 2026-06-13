
//Cari elemen berdasarkan id — hasilnya selalu 1 elemen.
const judul = document.getElementById("judul")
console.log(judul)


//Cari elemen berdasarkan CSS selector — hasilnya selalu 1 elemen pertama yang cocok.

const deskripsi = document.querySelector(".deskripsi")
console.log(deskripsi)


//Sama seperti querySelector tapi hasilnya semua elemen yang cocok — berbentuk array.
const semuaDeskripsi = document.querySelectorAll(".deskripsi") 
console.log(semuaDeskripsi)