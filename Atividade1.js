var numMulheres=0
var numHomens = 0
var somaAlturas = 0
var media="Nenhum homem informado"
var maxAltura=0
var minAltura = 0 
for (var i=0;i<15;i++){
    var sexo = prompt("Qual o sexo?").toUpperCase();
    var altura = parseFloat(prompt("Qual a altura?"));
    if(sexo=="F"){
        numMulheres++
    }else{
        numHomens++
        somaAlturas=somaAlturas+altura
    }
    if(i==0){
        maxAltura=altura
        minAltura=altura
    }
    if(altura>maxAltura){
        maxAltura=altura
    }
    if(altura<minAltura){
        minAltura=altura
    }
}
if(numHomens > 0){
    var media = somaAlturas/numHomens;
}
console.log("A menor altura é: "+minAltura);
console.log("A maior altura é: "+maxAltura);
console.log("A média das alturas dos homens é: "+media);
console.log("A quantidade de mulheres é: "+numMulheres);