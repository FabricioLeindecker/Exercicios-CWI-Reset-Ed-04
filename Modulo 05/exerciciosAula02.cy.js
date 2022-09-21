//01 - Para capturar e clicar em um botão presente na tela, qual(is) comando(s) utilizamos?

cy.get("botão").click();


//02 - Para garantir que o comportamento da aplicação é o esperado de acordo com as ações executadas, é necessário que o teste, ao finalizar, execute uma asserção (validação). Qual(is) comando(s) do Cypress pode(m) ser utilizado(s) com essa finalidade?

cy.url('http...').should('have.length', 3);