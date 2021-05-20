describe('Person App', ()=>{
    it('Pagina puede ser abierta', ()=>{
        cy.visit('http://localhost:3000')
        cy.contains('Half Stack application development')
    })
    it('Primer elemento existe', ()=>{
        cy.visit('http://localhost:3000')
        cy.contains('Part 1')
        cy.contains('Name: Fundamentals of React')
        cy.contains('Id: 1')
    })
    it('Segundo elemento existe', ()=>{
        cy.visit('http://localhost:3000')
        cy.contains('Name: Using props to pass data')
        cy.contains('Part 2')
        cy.contains('Id: 2')
    })
    it('Tercer elemento existe', ()=>{
        cy.visit('http://localhost:3000')
        cy.contains('Name: State of a component')
        cy.contains('Part 3')
        cy.contains('Id: 3')
    })
    it('Total de ejercicios existe', ()=>{
        cy.visit('http://localhost:3000')
        cy.contains('Total de ejercicios: 42')
    })
    it('Segunda parte existe', ()=>{
        cy.visit('http://localhost:3000')
        cy.contains('Node.js')
    })
    it('Resultado de segunda parte existe', ()=>{
        cy.visit('http://localhost:3000')
        cy.contains('Total de ejercicios: 10')
    })
})