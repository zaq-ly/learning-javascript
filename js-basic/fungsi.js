//Fungsi BMI
/* const hitungBMI = (nama, beratKg, tinggiM) => {
    const bmi =  beratKg / (tinggiM * tinggiM)
   
    let kategori = ""
    if(bmi < 18.5){
        kategori = "Kurus"
    }else if(bmi >= 18.5 && bmi <= 24.9){
        kategori = "Normal"
    }else if(bmi >= 25.0 && bmi <= 29.9){
        kategori = "Gemuk"
    }else if(bmi >= 30){
        kategori = "Obesitas"
    }
    

    return `
    Nama        : ${nama}
    Berat       : ${beratKg}
    Tinggi      : ${tinggiM}
    BMI         : ${bmi.toFixed(1)}
    Kategori    : ${kategori}
    `
}


const hasil = hitungBMI("Zaqly", 57, 1.68)
console.log(hasil) */

//Konversi Suhu 🌡️
/* 
const celsiusKefahrenheit = (c) => {
    return (c * 9 / 5) + 32
}

const fahrenheitKeCelsius = (f) => {
    return (f - 32) * 5/9
}

const celsiusKeKelvin = (c) => {
    return c + 273.15
}


console.log(celsiusKefahrenheit(20))
console.log(fahrenheitKeCelsius(20))
console.log(celsiusKeKelvin(20))
 */


//Studi Kasus 2 — Kalkulator Belanja 🛒

const hitungBelanja = (namaPembeli, totalBelanja, kategoriMember) => {
    let diskon = 0
    if(kategoriMember === "gold"){
        diskon = 20
    }else if(kategoriMember === "silver"){
        diskon = 10
    }else if(kategoriMember === "reguler"){
        diskon = 0
    }

    const potongan = totalBelanja * (diskon/100)
    const totalBayar = totalBelanja - potongan

    return `
    Nama           : ${namaPembeli}
    Total Belanja  : Rp${totalBelanja.toLocaleString("id-ID")}
    Diskon         : ${diskon}%
    Potongan       : Rp${potongan.toLocaleString("id-ID")}
    Total Bayar    : Rp${totalBayar.toLocaleString("id-ID")}
    `
}

console.log(hitungBelanja("Zaqly", 50000, "reguler"))
