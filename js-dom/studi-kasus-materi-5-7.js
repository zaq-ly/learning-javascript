//Tantangan 1 

const inputItem = document.getElementById("inputItem")
const btnTambah = document.getElementById("btnTambah")
const daftarBelanja = document.getElementById("daftarBelanja")

//Tantangan 2

const tambahItem = () => {
    const isiInput = inputItem.value 
    const li = document.createElement("li")
    li.textContent = isiInput
    const btnHapus = document.createElement("button")
    btnHapus.textContent = "Hapus"
    btnHapus.classList.add("btn-hapus")
    btnHapus.onclick = () => li.remove()
    li.appendChild(btnHapus)
    daftarBelanja.appendChild(li)
    inputItem.value = ""
}


btnTambah.onclick = tambahItem
