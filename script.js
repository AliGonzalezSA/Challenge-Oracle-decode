function encriptarTexto(texto) {
    const reglas = {
        "e": "enter",
        "i": "imes",
        "a": "ai",
        "o": "ober",
        "u": "ufat"
    };
    return texto.replace(/[eioua]/g, function(match) {
        return reglas[match];
    });
}

function desencriptarTexto(texto) {
    const reglasInversas = {
        "enter": "e",
        "imes": "i",
        "ai": "a",
        "ober": "o",
        "ufat": "u"
    };
    return texto.replace(/(enter|imes|ai|ober|ufat)/g, function(match) {
        return reglasInversas[match];
    });
}

function btnEncriptar() {
    const inputTexto = document.querySelector(".text-area").value;
    const textoEncriptado = encriptarTexto(inputTexto);
    document.querySelector(".mensaje").value = textoEncriptado;
}

function btnDesencriptar() {
    const inputTexto = document.querySelector(".text-area").value;
    const textoDesencriptado = desencriptarTexto(inputTexto);
    document.querySelector(".mensaje").value = textoDesencriptado;
}

function copiarTexto() {
    const textoCopiar = document.querySelector(".mensaje").value;
    navigator.clipboard.writeText(textoCopiar).then(function() {
        alert("Texto copiado al portapapeles");
    }, function(err) {
        alert("Error al copiar el texto: ", err);
    });
}