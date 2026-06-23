function cekUsername(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const terdaftar = ["zaq", "budi", "siti"]
      if (terdaftar.includes(username)) {
        resolve(username)
      } else {
        reject("Username tidak ditemukan.")
      }
    }, 1000)
  })
}

function cekPassword(username, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const akun = { zaq: "1234", budi: "abcd", siti: "xyz" }
      if (akun[username] === password) {
        resolve(`Selamat datang, ${username}!`)
      } else {
        reject("Password salah.")
      }
    }, 1000)
  })
}


const login = async (username, password) => {
    try {
        const user = await cekUsername(username)
        console.log(user)
        const pw = await cekPassword(username, password)
        console.log(pw)
    } catch (error) {
        console.log(error)
    }
}

login("zaq", "1234")