//1
function imprimir(i) {
    console.log(i);
}

//2 - Criar funções para os exercícios da aula 05:
//01 - Verifica se os nomes são iguais
function mesmoNome(nome1, nome2) {
    return nome1 == nome2;
}

nome1 = "Antonio";
nome2 = "Pedro";

imprimir(mesmoNome(nome1, nome1)); //Deve retornar true
imprimir(mesmoNome(nome1, nome2)); //Deve retornar false

console.log(""); //Adiciona um espaço entre um exercicio e outro

//02 - Verifica a maioridade
function maiorIdade(idade) {
    return idade >= 18;
}

imprimir(maiorIdade(30))    //Deve retornar true
imprimir(maiorIdade(5))     //Deve retornar false
imprimir(maiorIdade(19))    //Deve retornar false

console.log(""); //Adiciona um espaço entre um exercicio e outro

//03 - Calcular o valor do pagamento atrasado com juros de 10%.
function valorComJuros(valor) {
    return valor * 1.1;
}

imprimir(valorComJuros(100))   //Deve retornar 110
imprimir(valorComJuros(984.5)) //Deve retornar 1082.95

console.log(""); //Adiciona um espaço entre um exercicio e outro

//04 - Calcular a média dos números
function mediaAritmetica(itens) {
    total = 0
    for (i = 0; i < itens.length; i++) {
        total += itens[i]
    }
    return total / itens.length
}

imprimir(mediaAritmetica([1]))             //Deve retornar 1
imprimir(mediaAritmetica([1, 4, 10]))      //Deve retornar 5
imprimir(mediaAritmetica([1, 2, 3, 4, 5])) //Deve retornar 3
imprimir(mediaAritmetica([2, 2, 2, 2, 2])) //Deve retornar 2

console.log(""); //Adiciona um espaço entre um exercicio e outro

//05 - Calcular a margem bruta da empresa e retornar o valor em percentual (*100)
function margemBruta(receitaLiquida, custoProdutos) {
    lucroBruto = receitaLiquida - custoProdutos
    return (lucroBruto / receitaLiquida) * 100
}

imprimir(margemBruta(1000000, 500000))      //Deve retornar 50
imprimir(margemBruta(528459.11, 632501.87)) //Deve retornar -19.68[...]