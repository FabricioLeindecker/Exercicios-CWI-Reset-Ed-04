nota01 = 9.0;
nota02 = 8.0;

media = (nota01 + nota02) /2;

conceito = "";

if (media <= 4.0) {
    conceito = "Ruim";

} else if (media <= 6.0) {
    conceito = "Regular";

} else if (media <= 8.0) { 
    conceito = "Bom";
    
} else {
    conceito = "Ótimo";
}

console.log("A sua média foi", media);
console.log("O seu conceito foi", conceito);

switch(conceito) {
    case "Ruim":
        console.log("Precisa estudar mais");
        break;

    case "Regular":
        console.log("Esta quase lá");
        break;
        
    case "Bom":
        console.log("Continue assim");
        break;

    case "Ótimo":
        console.log("Mandou bem");
        break;
}