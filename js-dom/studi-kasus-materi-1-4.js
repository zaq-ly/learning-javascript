//Tantangan 1
const judul = document.getElementById("judul")
console.log(judul)

//tantangan 2
const teks = document.getElementById("teks")
teks.textContent = "Saya lagi belajar DOM!"

//Tantangan 3
judul.innerHTML = "<strong>Halo  Zaqly!</strong>"

//Tantangan 4
teks.classList.add("merah")
teks.classList.add("besar")

//Tantangan 5
const item = document.querySelectorAll(".item")
item.forEach(el => console.log(el.textContent))