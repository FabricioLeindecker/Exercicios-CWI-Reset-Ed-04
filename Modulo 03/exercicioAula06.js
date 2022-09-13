peso = 150;
altura = 1.75;

imc = peso / (altura * altura);

console.log("Seu imc é", imc);

classificacao = "";

grauObesidade = 0;

if (imc < 18.5) {
    classificacao = "Magreza";
    grauObesidade = 0;
    
} else if (imc < 25) {
    classificacao = "Normal";
    grauObesidade = 0;

} else if (imc < 30) {
    classificacao = "Sobrepeso";
    grauObesidade = 1;

} else if (imc < 40.0) {
    classificacao = "Obesidade";
    grauObesidade = 2;

} else {
    classificacao = "Obesidade grave";
    grauObesidade = 3;
}

console.log("Sua classificação é", classificacao);

if (grauObesidade > 0) {
    console.log("Cuidado! Você está acima do peso recomendado pela OMS.");
}

if (grauObesidade == 3) {
    console.log("É importante procurar um médico para avaliar sua saúde.");
}