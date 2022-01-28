let lines = gets().split('\n')

let line = lines.shift().split(" ");
let A = parseFloat(line[0]);
let B = parseFloat(line[1]);
let C = parseFloat(line[2]);
let maior;
let soma;
let triangulo;
let perimetro = 0.0;
let area = 0.0;

if (A > B && A > C) maior = A;
else if (B > C) maior = B;
else maior = C;

if (maior == A) soma = B + C;
else if (maior == B) soma = A + C;
else soma = B + A;

if (soma > maior) triangulo = true;
else triangulo = false;

if (triangulo) {
 perimetro = A + B + C 
  console.log('Perimetro = ', perimetro.toFixed(1))
         

} else {
  area = (((A + B) * C) / 2) + .0
  console.log('Area = ', area.toFixed(1))
}
    

//Leia 3 valores reais (A, B e C) e verifique se eles formam ou não um triângulo. 
//Em caso positivo, calcule o perímetro do triângulo e apresente a mensagem: Perimetro = XX.X
//Em caso negativo, calcule a área do trapézio que tem A e B como base e C como altura, mostrando a mensagem: Area = XX.X
