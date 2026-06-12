// const nama = "zaqly"

// if(nama === ""){
//     console.log("Username perlu diisi")
// }else{
//     console.log("Login berhasil")

// }


// let umur = "14"

// if (umur <= 18) {
//     console.log("Belum cukup umur")
// }else{
//     console.log("Boleh masuk")
// }

let harga = "abc"
let angkaHarga = Number(harga)


if (angkaHarga <= 0 || Number.isNaN(angkaHarga) || harga === "") {
    console.log("Harga tidak valid")
}else{
    console.log("produk bisa dibeli")
}