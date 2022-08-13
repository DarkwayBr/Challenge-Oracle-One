function criptografia () {

    var inputValue = document.getElementById("encripto").value
    var inputValueEncrypted = document.getElementById("decripto")
    var valueEncrypted = ""
    

    for (let x = 0; x < inputValue.length; x++) {

        if (inputValue[x] === "e") { valueEncrypted += "enter"} 
        else if (inputValue[x] === "i") {valueEncrypted += "imes"} 
        else if (inputValue[x] === "a") {valueEncrypted += "ai"} 
        else if (inputValue[x] === "o") {valueEncrypted += "ober"} 
        else if (inputValue[x] === "u") {valueEncrypted += "ufat"} 
        else {valueEncrypted += inputValue[x]}
        
    }

    inputValueEncrypted.value = valueEncrypted;

    if (inputValueEncrypted.value !="") {
        document.getElementById("none-context").style.display = "none";
        document.getElementById("copy-button").style.display = "block";
    } else {
        document.getElementById("none-context").style.display = "block";
        document.getElementById("copy-button").style.display = "none";
    }
}

function decriptografia () {
    var inputValue = document.getElementById("encripto").value
    var inputValueDecrypted = document.getElementById("decripto")

    var decryptedValue = inputValue.replace(/enter/g, "e")
    decryptedValue = decryptedValue.replace(/imes/g, "i")
    decryptedValue = decryptedValue.replace(/ai/g, "a")
    decryptedValue = decryptedValue.replace(/ober/g, "o")
    decryptedValue = decryptedValue.replace(/ufat/g, "u")

    inputValueDecrypted.value = decryptedValue; 

    if (inputValueDecrypted.value !="") {
        document.getElementById("none-context").style.display = "none";
        document.getElementById("copy-button").style.display = "block";
    } else {
        document.getElementById("none-context").style.display = "block";
        document.getElementById("copy-button").style.display = "none";
    }
}

function copyText () {
    var copyText = document.getElementById("decripto")
    
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    
    navigator.clipboard.writeText(copyText.value);
    
}

// Resize automático do segundo textearea

const encriptoArea = document.getElementById("encripto");
const decriptoArea = document.getElementById("decripto");
const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)

encriptoArea.addEventListener("change", function (e) {

    var scHeight = this.scrollHeight ;
    console.log(scHeight)
    if (scHeight > 200 && vw > 768){
        decriptoArea.style.height = (Math.round((scHeight * 3.6)))+ "px"
        console.log(decriptoArea.style.height)
    }
    else if (scHeight > 200 && vw == 768) {
        decriptoArea.style.height = (Math.round((scHeight * 1.8)))+ "px"
        console.log(decriptoArea.style.height)
    }
    else if (scHeight > 200 && vw == 375) {
        decriptoArea.style.height = (Math.round((scHeight * 2.6)))+ "px"
        console.log(decriptoArea.style.height)
    }

    if (document.getElementById("none-context").style.display != "none" && vw > 768) {
        decriptoArea.style.height = "750px";

    }
    else if (styleDiv != "block" && vw == 768){
        decriptoArea.style.height = "200px"

    }
    else if (styleDiv != "block" && vw == 375) {
        decriptoArea.style.height = "200px"
    }

});