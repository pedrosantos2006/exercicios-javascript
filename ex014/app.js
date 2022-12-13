function pulaLinha() {
    document.write("<br>");
}

function mostra(frase) {
    document.write(frase);
    pulaLinha();
}

var num = 1;

while (num <= 97){
    num += 2;
    mostra(num);
}

mostra("FIM");