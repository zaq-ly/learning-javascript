/* 
FizzBuzz
*/
/* for (let i = 1; i <= 30; i++){
    if(i % 3 === 0 && i % 5 === 0){
        console.log("FizzBuzz")
    }else if(i % 3 === 0){
        console.log("Fizz")
    }else if(i % 5 === 0){
        console.log("Buzz")
    }else{
        console.log(i)
    }
} */


/* 
Hitung Mundur Roket 🚀
*/

/* for(let i = 10; i >= 0; i--){
    console.log(`T-${i} detik...`)
    if(i == 0){
        console.log("🚀 Roket Meluncur!")
    }
} */

/* 
Mesin Kasir 🧾
*/

/* const daftarBelanjaan = ["Indomie","Telur","Kopi","Gula","Susu"]

for(const item of daftarBelanjaan){
    console.log(item)
}

for(let i = 0; i < daftarBelanjaan.length; i++){
    console.log(`${i + 1}. ${daftarBelanjaan[i]}`)
} */


/* 
Segitiga Bintang ⭐ 
*/
//segitiga sepotong
for(let i = 1; i <= 5;i++){
    let z = ""
    for(let j = 1; j <= i;j++){
        z += "*"
    }
    console.log(z)
}


//segitiga sepotong terbalik
/* for(let i = 1; i <= 5; i++){
    let z = ""
    for(let j = 5; j >= i; j--){
        z += "*"
    }
    console.log(z)
} */


//segitiga piramida
/* for(let i = 1;i <= 5;i++){ // baris
    let spasi = ""
    let bintang = ""

    for(let j = 1; j <= 5 - i; j++){ //spasi
        spasi += " "
    }

    for(let k = 1; k <= 2 * i - 1; k++){ // bintang
            bintang += "*"
    }
    console.log(spasi + bintang)
} */

//papan catur 4x4
/* 
for(let i = 1; i <= 4;i++){
    let spasi = ""
    let pagar = ""
    if(i % 2 === 0){
        spasi = " "
    }
    for(let k = 1; k <= 4; k++){
        pagar += "# "
    }
    console.log(spasi + pagar)
} */


