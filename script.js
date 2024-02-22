let sliderElement = document.querySelector('#slider');
let buttonElement = document.querySelector('#button');

let sizePass = document.querySelector('#valor');
let pass = document.querySelector('#pass');

let containerPass = document.querySelector('#container-pass');

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%*";
let novaSenha = "";

sizePass.innerHTML = sliderElement.value;
slider.oninput = function() {
    sizePass.innerHTML = this.value;
}

function generatePass() {

    let password = "";
    for(let i = 0, n = charset.length; i < sliderElement.value; ++i){
        password += charset.charAt(Math.floor(Math.random() * n));
    }

    containerPass.classList.remove('hide');
    pass.innerHTML = password;
    novaSenha = password;

}

function copyPass() {
    alert("Senha copiada com sucesso!")
    navigator.clipboard.writeText(novaSenha);
}