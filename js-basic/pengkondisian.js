/*
Diskon 
 */


/* let totalBelanja = 200_000
let diskon = 0
let hasilPotongan
let kategoriUser = "reguler"


switch(kategoriUser){
    case "membership":
        if(totalBelanja >= 1_000_000){
            diskon = 50
            hasilPotongan = totalBelanja * (1 - diskon/100)
            console.log(`Diskon 50%, dengan hasil potongan anda : ${hasilPotongan}`)
        }else if(totalBelanja >= 500_000){
            diskon = 40
            hasilPotongan = totalBelanja * (1 - diskon/100)
            console.log(`Diskon 40%, dengan hasil potongan anda : ${hasilPotongan}`)
        }else if(totalBelanja < 500_000){
            diskon = 25
            hasilPotongan = totalBelanja * (1 - diskon/100)
            console.log(`Diskon 25%, dengan hasil potongan anda : ${hasilPotongan}`)
        }
        break
    case "reguler":
        if(totalBelanja >= 1_000_000){
            diskon = 20
            hasilPotongan = totalBelanja * (1 - diskon/100)
            console.log(`Diskon 20%, dengan hasil potongan anda : ${hasilPotongan}`)
        }else if(totalBelanja >= 500_000){
            diskon = 10
            hasilPotongan = totalBelanja * (1 - diskon/100)
            console.log(`Diskon 10%, dengan hasil potongan anda : ${hasilPotongan}`)
        }else if(totalBelanja < 500_000){
            console.log("Harga normal, tidak ada diskon")
        }
        break
} */


/* 
Parkiran
*/

let kendaraan = "truk"
let durasiParkir = 1
let totalTarif = 0

switch(kendaraan){
    case "motor":
        if(durasiParkir < 1){
            totalTarif = 2000
        }else if(durasiParkir < 3){
            totalTarif = 5000
        }else if(durasiParkir >= 3){
            totalTarif = 10000
        }
        break
    case "mobil":
        if(durasiParkir < 1){
            totalTarif = 5000
        }else if(durasiParkir < 3){
            totalTarif = 10000
        }else if(durasiParkir >= 3){
            totalTarif = 20000
        }
        break
    case "truk":
        totalTarif = 50000
        break
}


console.log(`Jenis Kendaraan : ${kendaraan}`)
console.log(`Durasi : ${durasiParkir}`)
console.log(`Total Tarif : ${totalTarif}`)