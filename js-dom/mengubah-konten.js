
//textContent
/* Ubah isi elemen sebagai teks biasa. HTML tag di dalamnya tidak akan diproses. */
const judul = document.getElementById("judul")
judul.textContent = "Muhammad Zaqly Luluang"

//innerHTML
/* Ubah isi elemen dan bisa render HTML di dalamnya. */
judul.innerHTML = "<b>Zaqly</b>"

//-- PERBEDAAN InnerHTML dan TextConteng --
judul.textContent = "<strong>Halo!</strong>"
// Hasilnya: <strong>Halo!</strong> → tag-nya kebaca sebagai teks biasa

judul.innerHTML = "<strong>Halo!</strong>"
// Hasilnya: Halo! → tag-nya dirender, tulisan jadi tebal

