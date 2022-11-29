function CalcularMedia(){
    let n1 = document.getElementById("Media1").value
    let n2 = document.getElementById("Media2").value
    let n3 = document.getElementById("Media3").value
    let media = (parseFloat(n1) + parseFloat(n2) + parseFloat(n3)) /3
    document.getElementById("media").innerHTML = media
}