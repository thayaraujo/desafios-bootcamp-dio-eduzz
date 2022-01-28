let lines = gets().split("\n");
let t = 5;
let todasAsTomadas = 0;
let line = lines.shift().split(' ');
for(let i = 1; i < t; i++){
  todasAsTomadas = todasAsTomadas + parseInt(line.slice(-i));
}
todasAsTomadas = todasAsTomadas - 3;

console.log(todasAsTomadas);

// Entrada: consiste de uma linha com quatro números inteiros T1, T2, T3, T4, 
// indicando o número de tomadas de cada uma das quatro réguas (2 ≤ Ti ≤ 6).
// Saída: Seu programa deve produzir uma única linha contendo um único número 
// inteiro, indicando o número máximo de aparelhos que podem ser conectados à energia num mesmo instante.

