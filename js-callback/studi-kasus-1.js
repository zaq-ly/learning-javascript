

const cekKursi = (nomorKursi, callback) =>{
    setTimeout(()=>{
        const kursi = `Kursi ${nomorKursi} tersedia! Silakan lanjut pembayaran. `
        callback(kursi)
    },1500)
}

cekKursi("A5", (pesan) =>{
    console.log(pesan)
})
