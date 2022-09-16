context('TodoMVC', () => {
    it('Adicionar uma nova tarefa', () => {
        cy.visit('https://todomvc-app-for-testing.surge.sh/');

        cy.get('input.new-todo') 
            .type('Estudar automação de testes')
            .type('{enter}');

        //validação / garantia
        cy.get('ul.todo-list li').should('have.length', 1);

    });
});