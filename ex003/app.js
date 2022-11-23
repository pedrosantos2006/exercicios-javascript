function Somar(){
    let n1 = document.getElementById("número1").value
    let n2 = document.getElementById("número2").value
    let total =parseFloat(n1) + parseFloat(n2)
    document.getElementById("resposta").innerHTML = total
}