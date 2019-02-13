var msgPesoIn = "Peso Inválido";
var msgAlturaIn = "Altura Inválida";
var msgNomeBr = "O nome não pode ser em branco";
var msgPesoBr = "O peso não pode ser em branco";
var msgAlturaBr = "A altura não pode ser em branco";
var msgGorduraBr = "O gordura não pode ser em branco";

var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();
    var erros = [];
    clearInput();
    console.log(erros);
    
    //Pega o formulário
    var formularioPacientes = document.querySelector("#adiciona-paciente");

    //Pega o valor digitado nos campos
    var paciente = obtemPacientedoFormularios(formularioPacientes);

    var pacienteTr = montaTr(paciente);

    erros = validaPaciente(paciente);
    console.log(erros);
    if(!mostrarMensagemErro(erros)){
        return;
    }

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

function validaPaciente(paciente){
    var erros = [];

    if(paciente.nome.length == 0){
        erros.push(msgNomeBr);
    }

    if(paciente.peso.length == 0){
        erros.push(msgPesoBr);
    }

    if(paciente.altura.length == 0){
        erros.push(msgAlturaBr);
    }

    if (paciente.gordura.length == 0){
        erros.push(msgGorduraBr);
    }

    if(!validaPeso(paciente.peso)){
        erros.push(msgPesoIn);
    }

    if(!validaAltura(paciente.altura)){
        erros.push(msgAlturaIn);
    }

    return erros;
}

function mostrarMensagemErro(erros){
    if (erros.length > 0){
        erros.forEach(function(erro) {
            if(erro == msgPesoIn){
                constroiMsdErros("#peso input", "#mensagem-erro-peso", erro, "erroInput");
            } else if (erro == msgAlturaIn){
                constroiMsdErros("#altura input", "#mensagem-erro-altura", erro, "erroInput");
            } else if (erro == msgNomeBr){
                constroiMsdErros("#nome input", "#mensagem-erro-nome", erro, "erroInput");
            } else if (erro == msgPesoBr){
                constroiMsdErros("#peso input", "#mensagem-erro-peso", erro, "erroInput");
            } else if (erro == msgAlturaBr){
                constroiMsdErros("#altura input", "#mensagem-erro-altura", erro, "erroInput");
            } else if (erro == msgGorduraBr){
                constroiMsdErros("#gordura input", "#mensagem-erro-gordura", erro, "erroInput");
            } 
        });
        return false;            
    } else {
        return true;
    }
}

function constroiMsdErros(divId, spanId, msgErro, classErro){
    var input = document.querySelector(divId);
    var mensagemErro = document.querySelector(spanId);
    mensagemErro.textContent = msgErro;
    input.classList.add(classErro);
}

function clearInput() {
    clear("#peso input", "#mensagem-erro-peso", "erroInput");
    clear("#altura input", "#mensagem-erro-altura", "erroInput");
    clear("#nome input", "#mensagem-erro-nome", "erroInput");
    clear("#peso input", "#mensagem-erro-peso", "erroInput");
    clear("#altura input", "#mensagem-erro-altura", "erroInput");
    clear("#gordura input", "#mensagem-erro-gordura", "erroInput");
}

function clear(divId, spanId, classErro){
    var input = document.querySelector(divId);
    var mensagemErro = document.querySelector(spanId);
    mensagemErro.textContent = "";
    input.classList.remove(classErro);
}