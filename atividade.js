function adicao(a, b) {
    return a + b;
}
let resultado = adicao(8, 6);
console.log("Resultado da adição: " + resultado);

function subtracao(a, b) {
    return a - b;
}
let resultado2 = subtracao(8, 6);
console.log("Resultado da subtração: " + resultado2);

function multi(a, b) {
    return a * b;
}
let resultado3 = multi(8, 6);
console.log("Resultado da multiplicação: " + resultado3);

function divi(a, b) {
    if (a === 0 || b === 0) {
        return "Erro: Não é possível dividir por zero.";
    }
    return a / b;
}
let resultado4 = divi(8, 0);
console.log("Resultado da divisão: " + resultado4);

function ehPar(numero) {
    if (numero % 2 === 0) {
        return numero + " é par.";
    } else {
        return numero + " não é par.";
    }
}
let numeroVerificacao = 8;
console.log(ehPar(numeroVerificacao));

function somaIntervalo(inicio, fim) {
    let soma = 0;
    if (inicio > fim) {
        let temp = inicio;
        inicio = fim;
        fim = temp;
    }
    for (let i = inicio; i <= fim; i++) {
        soma += i;
    }
    return soma;
}
let resultadoSomaIntervalo = somaIntervalo(3, 8);
console.log("A soma do intervalo é: " + resultadoSomaIntervalo);

function fatorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    let resultado = 1;
    for (let i = 2; i <= n; i++) {
        resultado *= i;
    }
    return resultado;
}

function somaFatorial(num) {
    let soma = 0;
    for (let i = 1; i <= num; i++) {
        soma += fatorial(i);
    }
    return soma;
}

let resultadoSomaFatorial = somaFatorial(5);
console.log("A soma dos fatoriais é: " + resultadoSomaFatorial);


function contarVogais(palavra) {
    let vogais = "aeiouAEIOU";
    let contador = 0;

    for (let i = 0; i < palavra.length; i++) {
        if (vogais.indexOf(palavra[i]) !== -1) {
            contador++;
        }
    }
    return contador;
}
let palavra = "exemplo";
let numeroVogais = contarVogais(palavra);
console.log("A palavra '" + palavra + "' tem " + numeroVogais + " vogais.");
