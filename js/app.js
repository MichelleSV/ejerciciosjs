window.addEventListener("load", cargar);
var btn =document.getElementById("btn");
var resultado = document.getElementById("resultado");
var contador = 1;
function cargar() {
    btn.addEventListener("click", sumaDigitos);
}
function sumaDigitos(e) {
    e.preventDefault();
    var input = document.getElementById("nmro").value;
    var suma = 0;
    for (var i = 0; i < input.length; i++) {
            if (input >= 10 && input <= 99) {
            suma += parseInt(input[i]);
            resultado.textContent=suma;
        }
        else{
            resultado.textContent="Solo acepto números de dos cifras";
        }
    }
    input.value="";
}

