const tampilkanProduk = (jsonString)=>{
    const hasil = JSON.parse(jsonString)
    if (!hasil.nama || !hasil.harga) {
        throw new Error("produk tidak memiliki nama dan harga");
    }
    console.log(`Nama: ${hasil.nama}, Harga: ${hasil.harga}`)
}

try {
    tampilkanProduk("ini bukan json")
} catch (error) {
    console.log("Terjadi error!", error.message)
}finally{
    console.log("json berhasil")
}


try {
    tampilkanProduk(`{"nama": "sabun", "harga": "1000"}`)
} catch (error) {
    console.log("Terjadi error!", error.message)
}finally{
    console.log("json berhasil")
}