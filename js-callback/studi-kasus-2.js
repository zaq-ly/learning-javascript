const cekStok = (namaBarang, callback) =>{
    setTimeout(()=>{
        const barang = `Stok ${namaBarang} tersedia!`
        callback(barang)
    },2000)
}

const prosesPembayaran = (totalHarga, callback) =>{
    setTimeout(() => {
        const harga = `Pembayaran ${totalHarga} berhasil!`
        callback(harga)
    },2000)
}


cekStok("Kemeja", (pesan)=>{
    console.log(pesan)

    prosesPembayaran("150000", (pesan)=>{
    console.log(pesan)
    })
})

