let lines = gets().split('\n');

const [precoAlcool, precoGasolina, rendimentoAlcool, rendimentoGasolina] = 
  lines[0].split(' ').map(x => parseFloat(x));

const precoPorKmAlcool =  precoAlcool / rendimentoAlcool;
const precoPorKmGasolina =  precoGasolina / rendimentoGasolina;

const maisEconomico = precoPorKmGasolina <= precoPorKmAlcool ? 'G' : 'A';

console.log(maisEconomico);

//Escrever um programa que, dados o preço do litro de álcool, o preço do litro de gasolina e os quilômetros por litro 
// que um carro bi-combustível realiza com cada um desses combustíveis, determine se é mais econômico abastecer os carros com álcool ou com gasolina. 
//No caso de não haver diferença de custo entre abastecer com álcool ou gasolina a CTT prefere utilizar gasolina.