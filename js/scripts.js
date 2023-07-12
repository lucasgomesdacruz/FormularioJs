const form = document.querySelector("#form")
const nameInput = document.querySelector("#name")
const emailInput = document.querySelector("#email")
const passwordInput = document.querySelector("#email")
const jobSelect = document.querySelector("#job")
const messageTextarea = document.querySelector("#message")

form.addEventListener("submit", (event) => {
    event.preventDefault();

    //Verifica se o nome está vazio
    if(nameInput.value === "") {
        alert("por favor, preencha o seu nome");
        return;
    }

    // Verifica se o e-mail está preechido e se é válido
    if(nameInput.value === "" || !isEmailValid(emailInput.value) ) {
        alert("Por favor, preencha o seu email");
        return;
    }

    // Verifica se a senha está preenchida
    if(!validatePassword(passwordInput.value, 8)) {
        alert("A senha precisa ser no mínimo 8 dígitos. ");
        return;

    }

    // verificar se a situação foi selecionada
    if (jobSelect.value === "") {
        alert("Por faovr, selecione a sua situação")
        return;
    }

    // Verefica se a mensagem está preenchida
    if(messageTextarea.value === "") {
        alert("Por favor, Selecione a sua menssagem")
        return;
    }

    // Se todos os campos estiverem corretamente preechidos, envie o form
    form.submit();
});

// Função que valida e-mail
function isEmailValid(email) {

    // cria uma regex para validar email
    const emailRegex = new RegExp(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    )

    if(emailRegex.test(email)) {
        return true
    }

    return false
}

// Função que valida a senha
function validatePassword(password, minDigits) {
    if(password.length >= minDigits) {
        // senha válida
        return true
    }
    //senha invalida
    return false
}