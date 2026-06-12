//To-Do List 

/* let tugasTodolist = ["Belajar JavaScript", "Belajar Studi Kasus", "Push Ke GitHub"]

const tambahTugas = (tugas) => {
    tugasTodolist.push(tugas)
    console.log(`Tugas "${tugas}" ditambahkan!`)    
}

const hapusTugas = (index) => {
    tugasTodolist.splice(index - 1, 1)
    console.log(`Tugas ${index} dihapus!`)
}

const tampilkanSemua = () =>{
    for(let i = 0; i < tugasTodolist.length ;i++){
        console.log(`${i}. ${tugasTodolist[i]} `)
    }
}

const cariTugas = (keyword) =>{
    let hasil = tugasTodolist.find(t => t.toLowerCase().includes(keyword.toLowerCase()))
    if(hasil){
        console.log(`Ditemukan : ${hasil}`)
    }else{
        console.log(`Tugas "${keyword}" tidak ditemukan`)
    }
}

tampilkanSemua()
tambahTugas("yt")
tampilkanSemua()
hapusTugas(2)
tampilkanSemua()
cariTugas("yt")
 */


//Nilai Rapor Kelas 📊

/* const siswa = [
    { nama: "Budi",  nilai: 45 },
    { nama: "Siti",  nilai: 78 },
    { nama: "Zaq",   nilai: 92 },
    { nama: "Andi",  nilai: 55 },
    { nama: "Rudi",  nilai: 88 },
    { nama: "Dewi",  nilai: 40 }
]


const tampilkanSemua = () =>{
    console.log("Menampilkan nama Siswa dan Nilainya : ")
    for(let i = 0; i < siswa.length; i++){
        console.log(`${i + 1}. ${siswa[i].nama} - ${siswa[i].nilai}`)
    }
}

const siswaLulus = () =>{
    console.log("Daftar Nama dan nilai yang lulus")
    let lulus = siswa.filter(n => n.nilai >= 60)
    for(let j = 0; j < lulus.length; j++){
        console.log(`${j + 1}. ${lulus[j].nama} - ${lulus[j].nilai}`)
    }
}

const nilaiTertinggi = () =>{
    console.log("SIswa nilai tertinggi")
    let tertinggi = siswa[0]
    for(let k = 0; k < siswa.length; k++){
        if(siswa[k].nilai > tertinggi.nilai){
            tertinggi = siswa[k]
        }
    }
    
    console.log(`${tertinggi.nama} - ${tertinggi.nilai}`)
}

const rataRata = () =>{
    let nilrataRata = siswa.reduce((acc, item) => acc + item.nilai, 0)
    let rata = nilrataRata / siswa.length 
    console.log(`Rata - rata nilai adalah ${rata}`)
}


tampilkanSemua()
siswaLulus()
nilaiTertinggi()
rataRata() */


//Struk belanja

/* const keranjang = [
    { nama: "Indomie",  harga: 3500  },
    { nama: "Telur",    harga: 28000 },
    { nama: "Kopi",     harga: 12000 },
    { nama: "Gula",     harga: 14000 },
    { nama: "Susu",     harga: 18000 }
]

let kenaPajak = keranjang.map(h => {
    return {
        nama : h.nama,
        harga : h.harga,
        pajak : h.harga * 0.11, 
        hargaAkhir : h.harga * 1.11 
    }
})
for(let i = 0; i < kenaPajak.length; i++ ){
    console.log(`${kenaPajak[i].nama} -> Rp${kenaPajak[i].harga.toLocaleString('id-ID')} + Pajak Rp${kenaPajak[i].pajak.toLocaleString('id-ID')} = Rp${kenaPajak[i].hargaAkhir.toLocaleString('id-ID')}`)
}

console.log("Total Belanja")

let totalBelanja = kenaPajak.reduce((acc, item) => acc + item.hargaAkhir, 0)
console.log(`Rp ${totalBelanja.toLocaleString('id-ID')}`) */


const arr = [1, 2, 3, 4, 5]
const hasil = arr.filter(n => n % 2 === 0).map(n => n * 10)
console.log(hasil)
