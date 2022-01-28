let lines = gets().split("\n");

let N = parseInt(lines.shift());
let resposta = ((N - 3)* N) / 2;                

console.log(resposta);



// Guilherme adora brincar com pipas. Ele tem percebido que para as pipas possuírem maior estabilidade, e dessa forma voarem mais alto, 
//elas devem possuir um barbante bem esticado ligando todos os pares de pontas não vizinhas.
// Guilherme não sabe como determinar a quantidade de barbantes que ele terá que utilizar para tornar uma pipa de n lados, estável.
// Entrada: será composta por uma única linha, que contém um inteiro 3 ≤ n ≤ 105, representando o número de lados da pipa.
// Saída: imprima um número inteiro, que será a quantidade de barbantes que Guilherme terá que utilizar para
//tornar a pipa de n lados estável.