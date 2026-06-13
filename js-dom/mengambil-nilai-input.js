
//ambil nilai dari input
const input = document.getElementById("namaInput")
console.log(input.value)

//Set nilai input dari JS
input.value = "zaqly"

//kosongkan input
// input.value = ""


//kombinasi dengan textContent
const hasil = document.getElementById("hasil")
hasil.textContent = input.value
