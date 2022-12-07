function Verificar() {
    var letra = document.getElementById("dia ou noite").value;
    letra = letra.toLowerCase();

    if (letra == 'd')
        alert("Dia");
    else
        alert("Noite");
}