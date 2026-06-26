const hitungAkar = (angka) =>{
    if(angka < 0){
        throw new Error("Angka tidak boleh negatif");
    }
    return Math.sqrt(angka)

}

try {
    const hasil = hitungAkar(2)
    console.log(`Hasilnya: ${hasil}`)
} catch (error) {
    console.log("Terjadi error:", error.message)
}finally{
    console.log("hasil hitung akar berhasil")
}