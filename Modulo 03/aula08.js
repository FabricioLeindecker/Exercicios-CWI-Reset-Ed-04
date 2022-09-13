alunos = ["Enzo", "Valentina", "Joana", "Marcio", "Jose", "Paulo"];

notas = [[5.6, 7.2], [9.1, 8.4], [5.8, 4.6], [4.5, 8.5], [8.8, 7.2], [5.6, 2.3]];

for (num = 0; num < alunos.length; num++) {
    alunoSelecionado = num;

    nomeDoAluno = alunos[alunoSelecionado];
    notasDoAluno = notas[alunoSelecionado];

    nota1 = notasDoAluno[0];
    nota2 = notasDoAluno[1];

    media = (nota1 + nota2) /2;

    console.log(nomeDoAluno);
    console.log("A primeira nota foi:", nota1);
    console.log("A segunda nota foi:", nota2);
    console.log(nomeDoAluno, "Teve média", media);
    console.log("");
}