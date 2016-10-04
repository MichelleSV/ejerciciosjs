window.addEventListener("load", cargar);
var btn =document.getElementById("btn");
var resultado = document.getElementById("resultado");

function cargar() {
    btn.addEventListener("click", sumaDosDigitos);
}

function sumaDosDigitos(e) {
    e.preventDefault();
	
    var input = document.getElementById("nmro").value;
	
	if(input >= 10 && input <= 99){
		var suma = parseInt(input/10) + input%10;
		resultado.textContent=suma;
	}
	else{
		resultado.textContent="Solo acepto números de dos dígitos";
	}
	
	/*if(input >= 10 && input <= 99){
		var suma = parseInt(input[0])+parseInt(input[1]);
		resultado.textContent=suma;
	}
	else{
		resultado.textContent="Solo acepto números de dos dígitos";
	}*/
}

