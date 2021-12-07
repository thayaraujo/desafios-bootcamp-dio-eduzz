// Leia 2 valores inteiros (A e B). 
// Após, o programa deve mostrar uma mensagem "Sao Multiplos" ou "Nao sao Multiplos", indicando se os valores lidos são múltiplos entre si.

let lines = gets().split("\n");

let line = lines.shift().split(" ");
let A = parseInt(line[0]);
let B = parseInt(line[1]);

if (A % B === 0 || B % A === 0) 
    print('São múltiplos');                   //complete com a sua lógica
else 
    print('Não são múltiplos');