/*Exercício:
Repare na variável apresentacao mostrada a seguir. Ela é uma string que representa um texto que pode mudar conforme o valor de outras variáveis.

Identifique e crie todas as variáveis necessárias para que o texto de apresentacao seja exibido sem erros. Depois, crie a variável apresentacao exatamente como mostrado a seguir e a imprima da seguinte forma: console.log(apresentacao). -> 

apresentacao = "Meu nome é " + nomeCompleto + " (sou conhecido[a] como " + apelido + ") e tenho " + idade + " anos. Nasci no dia " + dataNascimento + ", na cidade de " + localNascimento + ". Tenho " + altura + "m de altura e atualmente estou " + (trabalhando ? "empregado" : "desempregado") + "."
*/

nomeCompleto = "Fabricio Lopes Leindecker";
apelido = "Nenê";
idade = 29;
dataNascimento = "01 de abril";
localNascimento = "São Leopoldo - RS";
altura = 1.73;
trabalhando = false;
apresentacao = "Meu nome é " + nomeCompleto + " (sou conhecido[a] como " + apelido + ") e tenho " + idade + " anos. Nasci no dia " + dataNascimento + ", na cidade de " + localNascimento + ". Tenho " + altura + "m de altura e atualmente estou " + (trabalhando ? "empregado" : "desempregado") + ".";

console.log(apresentacao);
