var filtro = document.querySelector("#filtro-tabela");
var pacientes = document.querySelectorAll(".paciente");

filtro.addEventListener("input", function(){
    if(this.value.length > 0){
        for(var i = 0; i < pacientes.length; i++){
            var nomeTd = pacientes[i].querySelector(".info-nome");
            var name = nomeTd.textContent;
            var expressao = new RegExp(this.value, "i");

            if(!expressao.test(name)){
                pacientes[i].classList.add("invisivel");
            } else{
                pacientes[i].classList.remove("invisivel");
            }
        }
    } else {
        console.log("else");
        for(var i = 0; i < pacientes.length; i++){
            console.log(pacientes[i].name);
            pacientes[i].classList.remove("invisivel");
        }
    }
});