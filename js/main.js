$(document).ready(function() {
        // Adiciona um método para validar mínimo de dois nomes
        $.validator.addMethod("doisNomesMinimo", function(value, element) {
            // Dividir o valor do campo em palavras
            var nomes = value.trim().split(" ");
            // Verificar se existem pelo menos dois nomes
            return nomes.length >= 2;
        }, "Por favor, insira pelo menos dois nomes.");
    
        $('form').validate({
    rules: {
        nome: {
            required: true,
            doisNomesMinimo: true
        },
        email: {
            required: true,
            email: true
        },
        telefone: {
            required: true
        },
        endereco: {
            required: true
        },
        cep: {
            required: true
        },
        cpf: {
            required: true
        }
    },
    messages: {
        nome: {
            required: 'Por favor digite seu nome completo'
        },
        email: 'Digite seu E-mail',
        telefone: 'Digite seu telefone',
        cpf: 'Digite seu CPF',
        endereco: 'Digite seu enderço',
        cep: 'Digite seu cep'
    },
    submitHandler: function (form) {
        alert("Sua requisição foi enviada para análise, parabéns pela aquisição!");
        form.reset();
    },
    invalidHandler: function (form, validator) {
        alert("Por favor, preencha os campos para prosseguir com a compra!");
    }
});

    $('#telefone').mask('(00) 00000-0000', {
    placeholder: '(DDD) 12345-6789'
    });

    $('#cpf').mask('000.000.000-00', {
    placeholder: '123.456.789-00'
    });

    $('#cep').mask('00000-000', {
    placeholder: '012345-678'
    });

    $('#carousel-imagens').slick({
        autoplay: true,
        arrows: false
    });
});
