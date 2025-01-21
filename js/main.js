$(document).ready(function() {
    $('#tel').mask('(00) 00000-0000');  // Aplica a máscara no campo de telefone

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            aceito_termos: {
                required: true
            }
        },
        messages: {
            nome: 'Por favor, insira o seu nome',
            email: 'Por favor, insira o seu email',
            telefone: 'Por favor, insira o seu telefone',
            aceitoTermos: 'Você precisa aceitar os termos'
        },
        submitHandler: function (form) {
            alert("Formulário enviado com sucesso!");
            form.submit();  // Envia o formulário após sucesso
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Por favor, preencha os campos obrigatórios.`);
            }
        }
    });
});
