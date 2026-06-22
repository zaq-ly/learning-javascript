const login = (username, password) => new Promise((resolve, reject) => {
    setTimeout(() => {
        if(username === "zaq" && password === "12345"){
            resolve("Login berhasil! Selamat datang, Zaq.")
        }else{
            reject("Username atau password salah.")
        }
    }, 2000);
    // return Promise    
})

login("juli", "12345")
.then((user)=>{
    console.log("Login:", user)
})
.catch((error)=>{
    console.log("Error:", error)
})
.finally(()=>{
    console.log("Login selesai")
})