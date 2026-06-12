//Sistem Toko Online 🛒

/* const produk = [
  { id: 1, nama: "Laptop",   harga: 8000000, stok: 5,  kategori: "Elektronik" },
  { id: 2, nama: "Mouse",    harga: 150000,  stok: 20, kategori: "Elektronik" },
  { id: 3, nama: "Meja",     harga: 750000,  stok: 8,  kategori: "Furnitur"   },
  { id: 4, nama: "Kursi",    harga: 500000,  stok: 12, kategori: "Furnitur"   },
  { id: 5, nama: "Keyboard", harga: 300000,  stok: 15, kategori: "Elektronik" }
]

const tampilkanSemua = () => {
    for(let i = 0; i < produk.length;i++){
        const {id, nama, harga, stok, kategori} = produk[i]
        console.log(`${id}. Nama: ${nama}, Harga: ${harga}, Stok: ${stok}, Kategori: ${kategori}`)
    }
}

const cariProduk = (keyword) => {
    let hasilCari = produk.filter(hC => hC.nama.toLowerCase().includes(keyword.toLowerCase()))
    // if(hasilCari){
    //     console.log(`Hasil Pencarian: Nama :${hasilCari.nama}, Harga: ${hasilCari.harga.toLocaleString('id-ID')}, Stok: ${hasilCari.stok}, Kategori: ${hasilCari.kategori} `)
    // }else{
    //     console.log(`Nama Produk ${keyword} tidak ditemukan`)
    // }
    for (const item of hasilCari) {
        console.log(`Hasil Pencarian : ${item.nama} - Rp${item.harga}`)
    }
}

const filterKategori = (kategori) => {
    let hasilFilter = produk.filter(hF => hF.kategori === kategori)
    for (const item of hasilFilter) {
        console.log(`${item.nama} - ${item.harga} - ${item.stok} - ${item.kategori}`)
    }
}

const tambahStok = (id, jumlah) =>{
    console.log("Sebelum ditambah Stoknya")
    let tambahStokId = produk.find(iP => iP.id === id)
    console.log(`${tambahStokId.id}. ${tambahStokId.nama}, ${tambahStokId.stok}`)
    console.log("Sesudah ditambah Stoknya")
    const produkBaru = {...tambahStokId, stok:tambahStokId.stok + jumlah}
    console.log(`${produkBaru.id}. ${produkBaru.nama}, ${produkBaru.stok}`)
}
const ringkasan = () =>{
    const totalProduk = produk.length
    console.log(`Total Produk: ${totalProduk}`)
    let stokKeseluruhan = produk.reduce((acc, item) => {
        return acc + (item.harga * item.stok)
    }, 0) 
    console.log(`Total Stok keseleruhan ${stokKeseluruhan}`)
    let produkTermahal = produk.reduce((acc, item) => {
        return item.harga > acc.harga ? item : acc
    })
    console.log(`Nama : ${produkTermahal.nama} - ${produkTermahal.harga} `)
} 

tampilkanSemua()
cariProduk("laptop")
filterKategori("Furnitur")
tambahStok(1, 4)
ringkasan() */


//Manajemen Kontak Telepon

let kontak = [
  { id: 1, nama: "Budi",  telepon: "081234567890", grup: "Keluarga" },
  { id: 2, nama: "Siti",  telepon: "082345678901", grup: "Kerja"    },
  { id: 3, nama: "Zaq",   telepon: "083456789012", grup: "Teman"    },
  { id: 4, nama: "Andi",  telepon: "084567890123", grup: "Kerja"    },
  { id: 5, nama: "Rudi",  telepon: "085678901234", grup: "Keluarga" },
  { id: 6, nama: "Dewi",  telepon: "086789012345", grup: "Teman"    }
]

const tampilkanSemua = () => {
    console.log("Daftar Kontak")
    const {id, nama, telepon, grup} = kontak
    for (let i = 0; i < kontak.length; i++) {
        console.log(`${i + 1}. ${kontak[i].nama}, ${kontak[i].telepon}, ${kontak[i].grup}`)
        
    }
    console.log(" ")
}

const cariKontak = (keyword) => {
    console.log("Hasil Pencarian Kontak")
    let hasilCari = kontak.filter(hC => hC.nama.toLowerCase().includes(keyword.toLowerCase()))
    if(hasilCari.length === 0){
        console.log(`Maaf nama ${keyword} tidak ditemukan`)
    }else{
        for (const element of hasilCari) {
            console.log(`Nama: ${element.nama} - Telephone: ${element.telepon} - Grup: ${element.grup}`)
        }
    }
    console.log(" ")
    
}

const filterGrup = (grup) => {
    console.log("Hasil Pemfilteran Kontak")
    let hasilFilter = kontak.filter(hF => hF.grup === grup)
    if(hasilFilter.length === 0){
        console.log(`Maaf tidak ada grup ${grup} ditemukan!`)
    }else{
        for (const item of hasilFilter) {
            console.log(`Nama Kontak : ${item.nama} - Telephone: ${item.telepon} - Grup: ${item.grup}`)
        }
    }
    console.log(" ")

}

const tambahKontak = (nama, telepon, grup) => {
    console.log("Tambah Kontak")
    let kontakBaru = {
        id:kontak[kontak.length -1].id + 1,
        nama,
        telepon,
        grup
    }
    kontak.push(kontakBaru)
    console.log("Kontak telah ditambahkan")
    console.log(" ")
}

const hapusKontak = (id) => {
    console.log("Hapus Kontak")
    let cariKontak = kontak.find(cK => cK.id === id)
    if(cariKontak){
        kontak = kontak.filter(k => k.id !== id)
        console.log(`Kontak ${cariKontak.nama} - ${cariKontak.telepon} - ${cariKontak.grup}, telah dihapus `)
    }else{
        console.log("Maaf id tidak ditemukan!")
    }
    console.log(" ")

}

const ringkasan = () => {
    console.log("Ringkasan kontak")
    const totalKontak = kontak.length
    console.log(`Total kontak: ${totalKontak}`)
    let totalKontakPerGrup = kontak.reduce((acc, item) => {
        acc[item.grup] = (acc[item.grup] || 0) + 1
        return acc
    },{})
    for (const grup in totalKontakPerGrup) {
        console.log(`${grup}: ${totalKontakPerGrup[grup]}`)
    }
   
}


tampilkanSemua()
cariKontak("amel")
filterGrup("Kerja")
tambahKontak("amel", "082122333844", "Teman")
tampilkanSemua()
hapusKontak(1)
tampilkanSemua()
ringkasan()