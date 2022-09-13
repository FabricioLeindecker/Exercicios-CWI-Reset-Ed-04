/* Exercício:
Uma empresa quer verificar se um colaborador está qualificado para a aposentadoria. Para estar em condições de se aposentar, ele deve atender a pelo menos um dos seguintes critérios:

Ter pelo menos 65 anos de idade;
Ter trabalhado no mínimo 30 anos;
Ter pelo menos 60 anos de idade e 25 anos de trabalho.
Você deve criar uma função chamada verificarAposentadoria, que recebe um nome como argumento e verifica se aquele colaborador pode se aposentar.

A função deve imprimir uma mensagem dizendo "Parabéns, já pode sair de férias eternas :)" ou "Infelizmente para você, ainda falta um tempo :(". Caso seja informado o nome de um colaborador que não existe, deve ser apresentada a mensagem "Colaborador inválido :|"

Use os arrays abaixo para considerar as informações de colaboradores, idade e tempo de trabalho:
*/
colaboradores    = ['Rhoger', 'Cléverson', 'Gleysberto', 'Nádio', 'Rosiméri', 'Regislane', 'Agripino', 'Wellison'];
idades           = [      69,          66,           58,      61,         60,          64,         59,         55];
temposDeTrabalho = [      31,          29,           30,      26,         25,          24,         26,         29];

function verificarAposentadoria(nome) {
    colaborador = false;
    idade = 0;
    tempoDeTrabalho = 0;

    for (i = 0; i <colaboradores.length; i++) {
        if (nome == colaboradores[i]) {
            colaborador = true;
            idade = idades[i]
            tempoDeTrabalho = temposDeTrabalho[i];
        }
    }
    if (colaborador) {
        if (idade >= 65 || tempoDeTrabalho >= 30 || (idade >= 60 && tempoDeTrabalho >= 25)) {
            console.log("Parabéns, já pode sair de férias eternas :)");

        } else {
            console.log("Infelizmente para você, ainda falta um tempo :(");
        }

    } else {
        console.log("Colaborador inválido :|");
    }
}

verificarAposentadoria('Rosiméri')    // true (regra 3)
verificarAposentadoria('Agripino')    // false (falta 1 ano de idade para regra 3)
verificarAposentadoria('Rhoger')      // true (todas)
verificarAposentadoria('Hudnélson')   // false (colaborador inexistente)
verificarAposentadoria('Gleysberto')  // true (regra 2)
verificarAposentadoria('Regislane')   // false (falta 1 ano de idade para regra 1 e 1 de trabalho para regra 3)
verificarAposentadoria('Cléverson')   // true (regras 1 e 3)
verificarAposentadoria('Nádio')       // true (regra 3)
verificarAposentadoria('Wellison')    // false (falta 1 ano de trabalho para regra 2)
verificarAposentadoria('Florisberto') // false (colaborador inexistente)