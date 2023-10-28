let mensagem = document.querySelector('#idMensagem');
let resultado = document.querySelector('#idResposta');
let chave = document.querySelector('#idChave');

mensagem.addEventListener('keyup', (e) => {
    let opcao = document.querySelector("input[name=criptografia]:checked");

    let a = chave.value;
    b = parseInt(a);

    resultado.value = ''; // Limpa o valor atual em resultado
    if (a === '') return; // Se a mensagem estiver vazia, não faça nada

    if (!isNaN(b)) { // Verifica se a chave é um número
        for (const char of mensagem.value) {
            if (opcao.value === 'Cifrar') { // Use 'Cifrar' ou 'Descifrar' conforme necessário
                resultado.value += String.fromCharCode(char.charCodeAt() + b);
            } else if (opcao.value === 'Descifrar') {
                resultado.value += String.fromCharCode(char.charCodeAt() - b);
            }
        }
    } else { // Se não for um número
        a = a.charCodeAt(0); // Obtenha o valor ASCII do primeiro caractere da chave
        for (const char of mensagem.value) {
            if (opcao.value === 'Cifrar') {
                resultado.value += String.fromCharCode(char.charCodeAt() + a);
            } else if (opcao.value === 'Descifrar') {
                resultado.value += String.fromCharCode(char.charCodeAt() - a);
            }
        }
    }
});
