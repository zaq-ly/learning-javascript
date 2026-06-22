const cekStok = (barang) => new Promise((resolve, reject) => {
    setTimeout(() => {
        if (barang === "laptop") {
            resolve("Stok Laptop tersedia!")
        } else {
            reject("Stok barang tidak tersedia.")
        }
    }, 1000);
})

const prosesPembayaran = (jumlah) => new Promise((resolve, reject) => {
    setTimeout(() => {
        if (jumlah >= 500000) {
            resolve(`Pembayaran Rp${jumlah} berhasil!`)
        } else {
            reject("Saldo tidak cukup.")
        }
    }, 2000);
})

const kirimNotifikasi = (pesan) => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(`Notifikasi terkirim: ${pesan}`)
    }, 1000);
})


cekStok("hp")
.then((hasilStok)=>{
    console.log(hasilStok)
    return prosesPembayaran(1000000)
})
.then((hasilBayar)=>{
    console.log(hasilBayar)
    return kirimNotifikasi(hasilBayar)
})
.then((hasilNotif)=>{
    console.log(hasilNotif)
})
.catch((error)=>{
    console.log("Error:", error)
})