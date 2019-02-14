var buscaPacientes = document.querySelector("#buscar-pacientes");

/*Faz uma requisição a um servidor, que retorna um array em formato JSON
  Então, faz o parse desse array e transforma-o para Javascript
  E por fim adiciona na tabela de pacientes. 
*/

buscaPacientes.addEventListener("click", function(){
    console.log("Buscando pacientes...");

    var erroAjax = document.querySelector(".erro-ajax");

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
    xhr.addEventListener("load", function(){
        console.log(xhr.status);
        if(xhr.status == 200){
            erroAjax.classList.add("invisivel");
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta);
            pacientes.forEach(function(paciente) {
                addPacienteNaTabela(paciente);
            });
        } else {
            erroAjax.classList.remove("invisivel");
        }
        
    });

    xhr.send();
});