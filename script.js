const sectionVista1 = document.getElementById("vista1")
const sectionVista2 = document.getElementById("vista2")
const botonEncriptar = document.getElementById("boton-encriptar")
const botonDesncriptar = document.getElementById("boton-desencriptar")
const botonCopiar = document.getElementById("boton-copiar")
const textoIngresado = document.querySelector(".texto-ingresado")
const textoResultado = document.querySelector(".texto-resultado")

sectionVista2.style.display = "none"
botonEncriptar.addEventListener("click",botonEncriptador)
botonDesncriptar.addEventListener("click",botonDesencriptador)

function encriptar(textoEncriptado) {
    let llavesDeEncriptacion = [["e", "enter"], ["i","imes"], ["a", "ai"], ["o","ober"], ["u","ufat"]]
   textoEncriptado = textoEncriptado.toLowerCase()
    
    for (let i = 0; i < llavesDeEncriptacion.length; i++) {
        if (textoEncriptado.includes(llavesDeEncriptacion[i][0])) {
            textoEncriptado = textoEncriptado.replaceAll(llavesDeEncriptacion[i][0], llavesDeEncriptacion[i][1])
        }
    }
    return textoEncriptado
}

function botonEncriptador() {
    if(textoIngresado.value != ""){
        sectionVista2.style.display = "block"
        sectionVista1.style.display = "none"
    } else {
        sectionVista1.style.display = "block"
        sectionVista2.style.display = "none"
    }
    const texto = encriptar(textoIngresado.value)
    textoResultado.value = texto
    textoIngresado.value = ""
}


function desencriptar(textoDesencriptado) {
    let llavesDeEncriptacion = [["e", "enter"], ["i","imes"], ["a", "ai"], ["o","ober"], ["u","ufat"]]
   textoDesencriptado = textoDesencriptado.toLowerCase()
    
    for (let i = 0; i < llavesDeEncriptacion.length; i++) {
        if (textoDesencriptado.includes(llavesDeEncriptacion[i][1])) {
            textoDesencriptado = textoDesencriptado.replaceAll(llavesDeEncriptacion[i][1], llavesDeEncriptacion[i][0])
        }
    }
    return textoDesencriptado
}

function botonDesencriptador() {
    if(textoIngresado.value != ""){
        sectionVista2.style.display = "block"
        sectionVista1.style.display = "none"
    } else {
        sectionVista1.style.display = "block"
        sectionVista2.style.display = "none"
    }
    const texto = desencriptar(textoIngresado.value)
    textoResultado.value = texto
    textoIngresado.value = ""
}

botonCopiar.addEventListener("click", () => {
    let texto = textoResultado
    //navigator.clipboard.writeText(texto.value)
    texto.select()
    document.execCommand("copy")
    textoResultado.value = ""
    textoIngresado.focus()
    sectionVista2.style.display = "none"
    sectionVista1.style.display = "block"
})

