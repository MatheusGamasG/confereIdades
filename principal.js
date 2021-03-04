function mostraResultadoFinal(evento) {
    evento.preventDefault();
    let anoNasc = document.querySelector(".anoNasc");
    const data = new Date().getFullYear();
    const inputIdade = data - anoNasc.value;
    const inputSexoMasc = document.querySelector("#masc");
    const usuario = montaObjeto(inputSexoMasc, inputIdade);
    const verificador = verificaForm(usuario, data, anoNasc.value);
    if (!verificador) {
        alert("Formulário inválido. Revise os dados.")
        return
    }
    mudaTextoImagem(usuario);
}

function montaObjeto(inputSexoMasc, inputIdade) {
    let inputSexo;
    if (inputSexoMasc.checked == true) {
        inputSexo = "homem";
    } else {
        inputSexo = "mulher";
    }
    const usuario = {sexo: inputSexo,
        idade: inputIdade
    };
    return usuario;
}

function verificaForm(usuario, data, anoNasc) {
    if (usuario.idade < 0 || anoNasc > data || anoNasc.length == 0){
        return false;
    } else {
        return true;
    }
}

function mudaTextoImagem(usuario) {
    frase.style.display = 'block';
    imagem.style.display = 'block';
    frase.innerHTML = `Detectamos ${usuario.sexo} com ${usuario.idade} anos.`

    if(usuario.idade <= 5) {
        imagem.src = `${usuario.sexo}/baby.jpg`
    } else if (usuario.idade > 5 && usuario.idade <= 12) {
            imagem.src = `${usuario.sexo}/kid.jpg`
    } else if (usuario.idade > 12 && usuario.idade <= 18) {
        imagem.src = `${usuario.sexo}/teen.jpg`
    } else if (usuario.idade > 18 && usuario.idade <= 30) {
            imagem.src = `${usuario.sexo}/twenty.jpg`
    } else if (usuario.idade > 30 && usuario.idade <= 45) {
            imagem.src = `${usuario.sexo}/thirty.jpg`
    } else if (usuario.idade > 45 && usuario.idade <= 65) {
            imagem.src = `${usuario.sexo}/fiftys.jpg`
    } else if (usuario.idade > 65 && usuario.idade <= 120) {
            imagem.src = `${usuario.sexo}/old.jpg`
    } else if (usuario.idade > 120) {
        frase.innerHTML = `Você tem ${usuario.idade} anos??? Já deve ter virado múmia.`
        imagem.src = 'homem/mumia.jpg'
    }
}


let imagem = document.querySelector(".imagemPessoa");
let frase = document.querySelector(".mensagemFinal");
const botao = document.querySelector(".button");

botao.addEventListener('click', mostraResultadoFinal);