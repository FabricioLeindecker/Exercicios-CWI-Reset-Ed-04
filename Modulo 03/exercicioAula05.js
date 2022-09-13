/*Exercícios:
1 - Crie uma variável mesmoNome que verifica se nomeDoFulano é igual a nomeDoBeltrano;
2 - Crie uma variável maiorDeIdade que verifica se idade é de um adulto;
3 - Crie uma variável valorComJuros que calcula o valor de um boleto acrescido de 10% de juros por atraso;
4 - Faça a representação da fórmula de média aritmética, considerando um conjunto de elementos com 5 elementos nomeados como item1, item2, item3, item4 e item5;
5 - O lucro bruto de uma empresa é representado pela receita líquida de vendas menos o custo dos produtos vendidos. A margem bruta de uma empresa é calculada pela divisão do lucro bruto pela receita líquida de vendas. Faça a representação da fórmula da margem bruta, multiplicando o resultado final por 100 para obter o valor percentual;
6 - Usando qualquer ferramenta de codificação, crie um algoritmo seguindo os passos abaixo para encontrar o valor do saldo ao final do processo (atente-se para utilizar . como separador decimal):
O saldo da sua conta é R$ 1000,00
Você decide comprar uma calça por R$ 99,90
Você recebe o seu salário de R$ 2500,00
Você está caminhando na rua e decide dar R$ 0,10 para um morador de rua
Você compra um ar condicionado cujo valor é 25% do seu saldo atual
Você decide antecipar o pagamento de uma dívida usando metade do seu saldo
Qual o valor do seu saldo? 🤔 */

//01
mesmoNome = (NomeDoFulano == NomeDoBeltrano);

//02
maiorIdade = (idade >= 18);

//03
valorComJuros = valor * 1.1;

//04
media = (item1 + item2 + item3 + item4 + item5) / 5;

//05   
lucroBruto = (receitaLiquida - custoProdutos);
margemBruta = (lucroBruto / receitaLiquida) * 100;

//06
saldo = 1000.00;
saldo = saldo - 99.90;
saldo = saldo + 2500.00;
saldo = saldo - 0.10;
saldo = saldo * 0.75;
saldo = saldo / 2;
console.log(saldo);
