var tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick", function(event){
        event.target.parentNode.classList.add("fadeOut");

        setTimeout(function(){
            //pega o pai do td, ou seja, o tr e remove da tabela
            event.target.parentNode.remove();
        }, 500);
});