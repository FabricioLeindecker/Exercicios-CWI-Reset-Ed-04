/*Exercícios:

1 - Crie um array de 5 posições com quaisquer valores. Utilize qualquer estrutura de repetição apresentada no vídeo para exibir todos os valores do array;

2 - Crie um algoritmo capaz de calcular a média aritmética de um array com qualquer quantidade de elementos numéricos. Para fins de exemplo, o resultado do algoritmo com um array de valores 1, 2, 3, 5, 8, 13, 21, 23, 34, 55 deve ser 16.5. Procure usar uma estrutura de repetição diferente da que você usou para fazer o exercício anterior;

3 - Considerando a lista dos 60 nomes mais comuns no Brasil nos últimos 10 anos, crie um algoritmo para verificar se seu nome está lá. Se sim, exiba a mensagem: É, nome comum :P. Se não, exiba a mensagem: Diferentão, hein? XD.
*/

//01
cidades = ["São Leopoldo", "Sapucaia", "Esteio", "Canoas", "Porto Alegre"];

indice = 0;

while (indice < cidades.length) {
    console.log(cidades[indice]);
    indice++;
}
console.log("");

//02
numeros = [1, 2, 3, 5, 8, 13, 21, 23, 34, 55];

res = 0;

for (indice = 0; indice < numeros.length; indice++) {
    res += numeros[indice];
}

media = res / numeros.length;
console.log(media);
console.log("");

//03
nomesComuns = [ "Miguel", "Laura", "Lucas", "Beatriz", "Guilherme", "Maria", "Gabriel", "Ana", "Arthur", "Júlia", "Enzo", "Alice", "Rafael", "Mariana", "João", "Larissa", "Gustavo", "Maria Eduarda", "Pedro", "Sofia", "Bernardo", "Isabela", "Matheus", "Helena", "Davi", "Camila", "Heitor", "Lara", "Henrique", "Valentina", "Bruno", "Letícia", "Samuel", "Luana", "Felipe", "Amanda", "Lorenzo", "Yasmin", "Benjamin", "Sophia", "Vinícius", "Rebeca", "Rodrigo", "Juliana", "Eduardo", "Bruna", "Diego", "Cecília", "Antônio", "Fernanda", "Leonardo", "Isadora", "Noah", "Lorena", "Nícolas", "Lívia", "Daniel", "Manuela", "Thiago", "Vitória" ];

nome = "Fabricio";
nomeComum = false;

for (i = 0; i < nomesComuns.length; i++) {
    if (nome == nomesComuns[i]) {
        nomeComum = true;
    }
}

if (nomeComum) {
    console.log("É, nome comum :P");
} else {
    console.log("Diferentão, hein? XD");
}
