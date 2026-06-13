
//Create Element
const paragraf = document.createElement("p")
paragraf.textContent = "Saya paragraf baru"

//AppendChild
document.body.appendChild(paragraf)

//Prepend
document.body.prepend(paragraf)

//Insert before
const teks = document.getElementById("teks")
document.body.insertBefore(paragraf, teks)