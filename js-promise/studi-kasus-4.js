const cariDriver = (lokasi) => new Promise((resolve, reject) => {
    setTimeout(() => {
        if (lokasi === "jakarta") {
            resolve("Driver ditemukan di Jakarta!")
        } else {
            reject("Tidak ada driver di lokasi kamu.")
        }
    }, 2000);
})

const konfirmasiDriver = (driver) => new Promise((resolve, reject) => {
    setTimeout(() => {
        if (driver.includes("ditemukan")) {
            resolve("Driver konfirmasi order!")
        } else {
            reject("Driver menolak order.")
        }
    }, 1000);
})

const hitungBiaya = (konfirmasi) => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(`Estimasi biaya: Rp25.000. ${konfirmasi}`)
    }, 1000);
})

cariDriver("jakarta")
.then((hasilCari)=>{
    console.log(hasilCari)
    return konfirmasiDriver(hasilCari)
})
.then((hasilKonfirmasi)=>{
    console.log(hasilKonfirmasi)
    return hitungBiaya("sukses")
})
.then((hasilHitung) =>{
    console.log(hasilHitung)
})
.catch((error)=>{
    console.log("Error: ", error)
})
