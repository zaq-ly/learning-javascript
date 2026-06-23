const stokBarang = { Sepatu: 5, Baju: 0, Tas: 3 }
const saldoUser = 500000

function cekStok(barang) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      stokBarang[barang] > 0
        ? resolve(barang)
        : reject(`Stok ${barang} habis.`)
    }, 1000)
  })
}

function prosesPembayaran(barang, harga) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      harga <= saldoUser
        ? resolve({ barang, harga })
        : reject("Saldo tidak cukup.")
    }, 1000)
  })
}


const checkout = async (barang, harga) => {
    try {
        const brg = await cekStok(barang)
        console.log(brg)
        const bayar = await prosesPembayaran(barang, harga)
        console.log(bayar)
    } catch (error) {
        console.log(error)
    }
}


const keranjang = [
  { barang: "Sepatu", harga: 200000 },
  { barang: "Baju", harga: 150000 },
  { barang: "Tas", harga: 600000 },
]

keranjang.forEach(item => {
    checkout(item.barang, item.harga)
});