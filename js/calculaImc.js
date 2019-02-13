var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++){
    var tdPeso  = pacientes[i].querySelector(".info-peso");
    var peso = tdPeso.textContent;
    
    var tdAltura  = pacientes[i].querySelector(".info-altura");
    var altura = tdAltura.textContent;
    
    var tdImc = pacientes[i].querySelector(".info-imc");
    var pesoValido = validaPeso(peso);
    var alturaValida = validaAltura(altura);
    
    if (!pesoValido){
        console.log("Peso inválido!");
        tdPeso.textContent = "Peso inválido";
        tdPeso.classList.add("dado-invalido");
        pacientes[i].classList.add("dados-invalidos");
    }
    
    if (!alturaValida){
        console.log("Altura inválida!");
        tdAltura.textContent = "Altura inválida!";
        tdAltura.classList.add("dado-invalido");
        pacientes[i].classList.add("dados-invalidos");
    }
    
    if (alturaValida && pesoValido){  
        tdImc.textContent = calculaImc(peso,altura);
    } else {
        console.log(pesoValido);
        console.log(alturaValida);
    }
}

function calculaImc(peso, altura){
    var imc = 0;
    
    imc = peso / (altura * altura);
    return imc.toFixed(2);
}

function validaAltura(altura){
    if(altura >= 0 && altura <= 3.00){
        return true;
    } else{
        return false;
    }
}

function validaPeso(peso){
    if(peso >= 0 && peso <= 600){
        return true;
    } else {
        return false;
    }
}