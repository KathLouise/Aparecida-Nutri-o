var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();
    
    //Pega o formulário
    var formularioPacientes = document.querySelector("#adiciona-paciente");

    //Pega o valor digitado nos campos
    var paciente = obtemPacientedoFormularios(formularioPacientes);

    var pacienteTr = montaTr(paciente);

    //Pega a tabela
    var tabela = document.querySelector("#tabela-pacientes");

    //adiciona a linha dentro da tabela
    tabela.appendChild(pacienteTr);

    //Limpar o formulário
    formularioPacientes.reset();
});

function obtemPacientedoFormularios(form){
    paciente = {
        nome:  form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura:  form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    };
    console.log(paciente.nome);
    console.log(paciente.peso);
    console.log(paciente.altura);
    console.log(paciente.imc);
    return paciente;
}

/*cria tags HTML e as popula com os dados retirados do objeto
  paciente, adicionando também as classes */
function montaTr(paciente){
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function montaTd(dado, classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}