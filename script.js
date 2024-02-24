let sliderElement = document.querySelector('#slider');
let buttonElement = document.querySelector('#button');
let numOnlyCheckbox = document.querySelector('#numOnlyCheckbox');

let sizePass = document.querySelector('#valor');
let pass = document.querySelector('#pass');

let containerPass = document.querySelector('#container-pass');

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%*";
let novaSenha = "";

sizePass.innerHTML = sliderElement.value;
sliderElement.oninput = function() {
    sizePass.innerHTML = this.value;
}

function generatePassWithCriteria() {
    let password = "";
    let hasNumber = false;
    let hasLowerCase = false;
    let hasUpperCase = false;
    let hasSpecialChar = false;

    // Define o conjunto de caracteres base
    let charset = "";

    // Verifica se o checkbox está marcado
    if (numOnlyCheckbox.checked) {
        charset = "0123456789"; // Apenas números
    } else {
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%*"; // Todos os caracteres
    }

    // Verifica se o tamanho da senha é válido
    if (sliderElement.value < 4) {
        alert("A senha deve ter pelo menos 4 caracteres");
        return;
    }

    // Loop para gerar a senha
    for (let i = 0; i < sliderElement.value; ++i) {
        let randomChar = charset.charAt(Math.floor(Math.random() * charset.length));
        password += randomChar;

        // Verifica se o caractere gerado é um número, letra maiúscula, letra minúscula ou caractere especial
        if (/[0-9]/.test(randomChar)) {
            hasNumber = true;
        } else if (/[a-z]/.test(randomChar)) {
            hasLowerCase = true;
        } else if (/[A-Z]/.test(randomChar)) {
            hasUpperCase = true;
        } else if ("!@#$%*".includes(randomChar)) {
            hasSpecialChar = true;
        }
    }

    // Se o checkbox estiver marcado, verifique se pelo menos um número foi incluído
    if (numOnlyCheckbox.checked && !hasNumber) {
        // Se não houver número, gere a senha novamente
        return generatePassWithCriteria();
    }

    // Se o checkbox não estiver marcado, verifique se todos os critérios foram atendidos
    if (!numOnlyCheckbox.checked && !(hasNumber && hasLowerCase && hasUpperCase && hasSpecialChar)) {
        // Se algum critério não for atendido, gere a senha novamente
        return generatePassWithCriteria();
    }

    // Mostra a senha gerada
    containerPass.classList.remove('hide');
    pass.innerHTML = password;
    novaSenha = password;
}




function copyPass() {
    alert("Senha copiada com sucesso!")
    navigator.clipboard.writeText(novaSenha);
}
