document.getElementById("convert").addEventListener("click", function () {
    var text = document.getElementById("text").value;
    if (text == "") {
        return;
    }
    var result = document.getElementById("result");
    var lines = text.split("\n");
    var converted = "";
    // If it's not the last line, add a comma
    for (var i = 0; i < lines.length; i++) {
        if (i != lines.length - 1) {
            converted += "\"" + lines[i] + "\",\n";
        } else {
            converted += "\"" + lines[i] + "\"";
        }
    }
    result.innerHTML = converted;
    //document.getElementById("message").style.display = "none";
});

/* Clipboard API doesn't work that well
// Click to copy
document.getElementById("result").addEventListener("click", function () {
    var result = document.getElementById("result");
    if (result.innerHTML == "") {
        return;
    }
    // Verificando se navigator.clipboard está disponível
    if (navigator.clipboard) {
        // Usando navigator.clipboard.writeText para copiar o texto do elemento
        navigator.clipboard.writeText(result.innerText).then(() => {
            // Mostrando a mensagem de sucesso
            document.getElementById("message").style.display = "block";
            document.getElementById("message").innerHTML = "Copied!";
        }).catch(err => {
            // Tratamento de erro, caso a cópia não seja bem-sucedida
            console.error('Error copying text: ', err);
        });
    } else {
        // Opção de fallback ou mensagem para o usuário caso navigator.clipboard não esteja disponível
        console.error('Clipboard API not available.');
    }
});
*/

// Click to clear
document.getElementById("clear").addEventListener("click", function () {
    document.getElementById("text").value = "";
    document.getElementById("result").innerHTML = "";
    document.getElementById("message").style.display = "none";
});