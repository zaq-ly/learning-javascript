// const inputNama = document.getElementById("inputNama")
// const inputUmur = document.getElementById("inputUmur")
// const inputKota = document.getElementById("inputKota")
const btnBuat = document.getElementById("btnBuat")
const kontainer = document.getElementById("kontainerKartu")


const buatProfil = () =>{
    const isiProfil = {
        nama: document.getElementById("inputNama").value,
        umur: document.getElementById("inputUmur").value,
        kota: document.getElementById("inputKota").value
    }
    const div = document.createElement("div")
    div.classList.add("kartu")
    for (const key in isiProfil) {
        const p = document.createElement('p')
        p.textContent = `${key}: ${isiProfil[key]}`
        div.appendChild(p)
    }
    const btnHapus = document.createElement("button")
    btnHapus.textContent = "Hapus"
    btnHapus.classList.add("btn-hapus")
    btnHapus.onclick = () => div.remove()
    div.appendChild(btnHapus)
    const inputs = document.querySelectorAll("input")
    inputs.forEach(input => {
        input.value = ""
    });
    

    kontainer.appendChild(div)
    
}
btnBuat.onclick = buatProfil

