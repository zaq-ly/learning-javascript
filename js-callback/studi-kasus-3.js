const validasiEmail = (cekEmail, callback) =>{
    setTimeout(() => {
        const email = `Email ${cekEmail} valid!`
        callback(email)
    },1000);
}

const simpanDataUser = (callback) =>{
    setTimeout(() => {
        const data = `Data user berhasil disimpan!`
        callback(data)
    },2000);
}

const kirimEmailVerifikasi = (email, callback) =>{
    setTimeout(() => {
        const kirim = `Email verifikasi telah dikirim ke ${email}!`
        callback(kirim)
    },1500);
}


validasiEmail("zaqly@gmail.com", (pesan)=>{
    console.log(pesan)
    simpanDataUser((pesan)=>{
        console.log(pesan)
        kirimEmailVerifikasi("zaqly@gmail.com", (pesan)=>{
            console.log(pesan)
        })
    })
})

