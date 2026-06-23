const filmTayang = [
  { judul: "Jumbo", kursiTersedia: 3 },
  { judul: "Pabrik Gula", kursiTersedia: 0 },
  { judul: "Pengepungan di Bukit Duri", kursiTersedia: 5 },
]

function cekFilm(judul) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const film = filmTayang.find(f => f.judul === judul)
      film
        ? resolve(film)
        : reject(`Film "${judul}" tidak ditemukan.`)
    }, 1000)
  })
}

function cekKursi(film) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      film.kursiTersedia > 0
        ? resolve(film)
        : reject(`Kursi untuk "${film.judul}" sudah habis.`)
    }, 800)
  })
}

function prosesPemesanan(film) {
  return new Promise((resolve) => {
    setTimeout(() => {
      film.kursiTersedia--
      resolve(`Pemesanan tiket "${film.judul}" berhasil! Sisa kursi: ${film.kursiTersedia}`)
    }, 1000)
  })
}


const pesanTiket = async (judul) => {
    try {
        const cek = await cekFilm(judul)
        console.log(cek)
        const kursi = await cekKursi(cek)
        console.log(kursi)
        const proses = await prosesPemesanan(kursi)
        console.log(proses)
    } catch (error) {
        console.log(error)
    }
}

pesanTiket("Pengepungan di Bukit Duri")