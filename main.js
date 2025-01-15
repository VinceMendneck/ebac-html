document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById("form-numero");
    const numeroA = document.getElementById("numero-a");
    const numeroB = document.getElementById("numero-b");
    
//tive uma certa dificuldade em conseguir fazer a função validarFormulario retornar o valor correto, pois estava retornando sempre true, mesmo quando o número B era menor que o número A.
//o problema era que eu estava chamando a função fora do evento submit, fazendo com que a função não recebesse os valores de A e B (fazendo a operação sempre com 0 nos 2 campos)
//precisei de uma ajuda do chatgpt pra entender onde estava o problema, mas espero que o codigo tenha ficado a contento

    function validarFormulario(numeroA, numeroB) {
        const a = parseFloat(numeroA.value);
        const b = parseFloat(numeroB.value);

        if (b <= a) {
            return false; 
        } else {
            return true; 
        }
    }

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const mensagemSucesso = `Sim, o <b>${numeroB.value}</b> é maior que o <b>${numeroA.value}</b>`;
        const mensagemErro = `O número <b>${numeroB.value}</b> não é maior que o <b>${numeroA.value}</b>`;
        const formEValido = validarFormulario(numeroA, numeroB);


        if (formEValido) {
            const containerMensagemSucesso = document.querySelector(".success-message");
            containerMensagemSucesso.innerHTML = mensagemSucesso;
            containerMensagemSucesso.style.display = "block";

            numeroA.value = "";
            numeroB.value = "";
            numeroA.style.border = "";
            numeroB.style.border = "";
            
            const containerMensagemErro = document.querySelector(".error-message");
            containerMensagemErro.style.display = "none";
            
            setTimeout(function() {
                form.submit();
            }, 800);

        } else {

            const containerMensagemErro = document.querySelector(".error-message");
            containerMensagemErro.innerHTML = mensagemErro;
            containerMensagemErro.style.display = "block";

            const containerMensagemSucesso = document.querySelector(".success-message");
            containerMensagemSucesso.style.display = "none";
            numeroA.style.border = "1px solid red";
            numeroB.style.border = "1px solid red";
        }
    });
    
});

