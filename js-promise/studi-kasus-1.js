const cekStok = new Promise((resolve, reject) => {
    const stokTersedia = true

    if (stokTersedia) {
        resolve("Stok tersedia, silakan order!")
    } else {
        reject("Maaf, stok habis!")
    }
})

cekStok
.then((stok)=>{
    console.log("Stok:", stok)
})
.catch((error)=>{
    console.log("Error: ", error)
})
.finally(()=>{
    console.log("Pengecekan stok selesai")
})