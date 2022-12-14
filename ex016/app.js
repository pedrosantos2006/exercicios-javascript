function VerificarIdade() {
    let idade = document.getElementById("idade").value
    if (idade >= 18) {
        document.getElementById("Verificar").innerHTML = "Voce é maior de idade"
    } else {
        document.getElementById("Verificar").innerHTML = "Voce é menor de idade"
    }
}