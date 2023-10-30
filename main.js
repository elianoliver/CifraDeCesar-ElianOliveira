let mensagem = document.querySelector('#idMensagem');
let resultado = document.querySelector('#idResposta');
let chave = document.querySelector('#idChave');

mensagem.addEventListener('input', (e) => {
    let opcao = document.querySelector("input[name=criptografia]:checked").value;
    let valorChave = chave.value;
    let valorMensagem = mensagem.value;

    // LIMPA O RESULTADO
    resultado.value = '';

    // SE A CHAVE ESTIVER VAZIA, ATRIBUA 0
    if (valorChave === '') {
        chave.value = 0;
    }
    // SE CHAVE FOR NÚMERO, PARSE INT
    else if (!isNaN(valorChave)) {
        valorChave = parseInt(valorChave);
    }
    // SE CHAVE FOR LETRA, CHAVE VIRA -> A=1, B=2, C=3, etc
    else if (valorChave.match(/[a-zA-Z]/)) {
        valorChave = valorChave.toUpperCase().charCodeAt(0) - 'A'.charCodeAt(0) + 1;
    }

    for (const char of valorMensagem) {
        if (char === ' ') {
            resultado.value += ' ';
        }
        else if (char === '\n') {
            resultado.value += '\n';
        }
        else {
            let cifra = char.charCodeAt(0) + (opcao === 'Cifrar' ? valorChave : -valorChave);

            if (char >= 'A' && char <= 'Z') {
                if (opcao === 'Cifrar' && cifra > 'Z'.charCodeAt(0)) {
                    cifra -= 26;
                } else if (opcao === 'Descifrar' && cifra < 'A'.charCodeAt(0)) {
                    cifra += 26;
                }
            } else if (char >= 'a' && char <= 'z') {
                if (opcao === 'Cifrar' && cifra > 'z'.charCodeAt(0)) {
                    cifra -= 26;
                } else if (opcao === 'Descifrar' && cifra < 'a'.charCodeAt(0)) {
                    cifra += 26;
                }
            }
            resultado.value += String.fromCharCode(cifra);
        }
    }
});

function copiar() {
    if (resultado.value === '') {
        return;
    }
    resultado.select();
    document.execCommand('copy');
    alert('Texto copiado!');
}
