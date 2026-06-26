const daftarUser = []

const registrasiUser = (user) =>{
    if(!user.nama || !user.email || !user.umur){
        throw new Error("User tidak memiliki nama, email atau umur");
    }else if(user.umur < 17){
        throw new Error("umur user kurang dari 17");
    }else if(!user.email.includes("@")){
        throw new Error("Email user tidak menggunakan @");
    }else{
        daftarUser.push(user)
        console.log(`Nama: ${user.nama}, Email : ${user.email}, Umur : ${user.umur} `)
    }

} 

const semuaSkenario = [
        {nama: "amel", email: "amel@gmail.com", umur: 23},
        {nama: "Zaqly", email: "zaqly@gmail.com", umur: 24},
        {email: "zaqly@gmail.com", umur: 24},
        {nama:"Zaqly", email: "zaqly@gmail.com", umur: 12},
        {nama:"Zaqly", email: "zaqlygmail.com", umur: 24}
]

for (const user of semuaSkenario) {
    try {
        registrasiUser(user)
    } catch (error) {
        console.log("Terjadi Error", error.message)
    }finally{
        console.log(`Total User: ${daftarUser.length} `)
    }
}


