const akunTerdaftar = ["zaq", "budi", "siti"]

function validasiInput(username, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      username.length >= 4 && password.length >= 6
        ? resolve({ username, password })
        : reject("Username minimal 4 karakter & password minimal 6 karakter.")
    }, 500)
  })
}

function cekKetersediaan(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      !akunTerdaftar.includes(username)
        ? resolve(username)
        : reject(`Username "${username}" sudah dipakai.`)
    }, 1000)
  })
}

function simpanAkun(username, password) {
  return new Promise((resolve) => {
    setTimeout(() => {
      akunTerdaftar.push(username)
      resolve(`Akun "${username}" berhasil dibuat!`)
    }, 800)
  })
}


const registrasi = async (username, password) => {
    try {
        const user = await validasiInput(username, password)
        console.log(user)
        const pw = await cekKetersediaan(username)
        console.log(pw)
        const simpan = await simpanAkun(username, password)
        console.log(simpan)
    } catch (error) {
        console.log(error)
    }
}

registrasi("amel", "123467")