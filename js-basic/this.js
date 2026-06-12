// studi kasus 1

/* const pemilik = {
    nama: "zaqly",
    saldo: 50000,
    cekSaldo() {
        console.log(`Halo ${this.nama}, saldo kamu sekarang: Rp ${this.saldo}`)    
    },
    setorJumlah (jumlah){
        this.saldo += jumlah
        console.log(`Berhasil setor: Rp ${jumlah}, Saldo kamu sekarang: Rp ${this.saldo} `)    
    },
    tarikJumlah(jumlah){
        this.saldo -= jumlah
        console.log(`Berhasil tarik: Rp ${jumlah}, Saldo kamu sekarang: Rp ${this.saldo} `)    
    }
}

pemilik.cekSaldo()
pemilik.setorJumlah(50000)
pemilik.tarikJumlah(5000) */


//Studi kasus 2

/* const keranjang = {
    items: [],
    diskon: 10,
    tambahItem(nama, harga){
        this.items.push({nama, harga})
        console.log(`Berhasil tambah: ${nama} - Rp ${harga}`)
    },
    totalHarga(){
        const totalBelanja = this.items.reduce((acc, item)=>acc + item.harga, 0)
        console.log(`Total belanja: Rp ${totalBelanja}`)
        return totalBelanja
    },
    totalSetelahDiskon(){
        const total = this.totalHarga();
        const setelahDiskon = total - (total * this.diskon / 100);
        console.log(`Total setelah diskon ${this.diskon}%: Rp ${setelahDiskon}`);
    }
}

keranjang.tambahItem("Monitor", 1700000)
keranjang.tambahItem("kursi", 300000)
keranjang.tambahItem("permen", 3000)

keranjang.totalSetelahDiskon()
 */


// Studi Kasus 3

const todoApp = {
    tugas:[],
    idBerikutnya: 1,
    tambahTugas(judul){
        this.tugas.push({id:this.idBerikutnya++, judul, selesai:false})
        console.log(`Tugas #${this.idBerikutnya - 1} ditambahkan: ${judul}`)
    },
    selesaikanTugas(id){
        const tugasSelesai = this.tugas.find(t => t.id === id)
        tugasSelesai.selesai = true
        console.log(`Tugas #${tugasSelesai.id} "${tugasSelesai.judul}", sudah selesai`)
    },
    lihatTugas(){
        for (const key of this.tugas) {
            if(key.selesai === false){
                console.log(`[ ] #${key.id} - ${key.judul}`)
            }else{
                console.log(`[✅] #${key.id} - ${key.judul}`)
            }
        }
    },
    hapusTugas(id){
        const cariId = this.tugas.find(c => c.id === id)
        if(cariId){
            this.tugas = this.tugas.filter(c => c.id !== id)
            console.log(`Tugas #${cariId.id} berhasil dihapus.`)
        }
    }
}

todoApp.tambahTugas("javascript")
todoApp.tambahTugas("masak")
todoApp.tambahTugas("mancing")
todoApp.tambahTugas("makan")
todoApp.tambahTugas("mandi")


todoApp.selesaikanTugas(2)
todoApp.lihatTugas()
todoApp.hapusTugas(3)
todoApp.lihatTugas()





