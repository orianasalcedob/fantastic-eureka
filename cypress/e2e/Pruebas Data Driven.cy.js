Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
}) 

/// <reference types="Cypress"/>
 
// Suite de casos de prueba Data Driven 
describe('Segundo conjunto de casos de pruebas avanzadas', function() {
  before(function () {
      //Cargamos los valores del archivo example.json en un objeto de datos
      cy.fixture('example').then(function (datos) {
          this.datos = datos

      })
  })
  beforeEach(() => {
      //Ingresamos a la pagina de formulario
      cy.visit('https://demoqa.com/automation-practice-form')
  })

  //Caso 7
  it('Lleanmos nuestro primer formulario utilizando data', function (){

        cy.get('#firstName').type(this.datos.nombre)
        cy.get('#lastName').type(this.datos.apellido)
        cy.get('#userEmail').type(this.datos.email)
        cy.get('input[name="gender"][value="' + this.datos.sexo + '"]').click({force: true})
        cy.get('#userNumber').type(this.datos.telefono)
        cy.get('#dateOfBirthInput').click()
        cy.get('.react-datepicker__month-select').should('be.visible').select(this.datos.fechaDeNacimiento[0])
        cy.get('.react-datepicker__year-select').should('be.visible').select(this.datos.fechaDeNacimiento[1])
        cy.get('.react-datepicker__day--031').should('be.visible').click()
        ///La linea 36 se puede usar en lugar de la 34 si se quiere llamar el dato desde el archivo a traves de la concatenacion 
        //cy.get('.react-datepicker__day--0' + this.datos.fechaDeNacimiento[2]).should('be.visible').click()

  })
})