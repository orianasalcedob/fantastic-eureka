/// <reference types="Cypress"/>
 
// Suite de casos de pruebas avanzadas
describe('Tercer feature de casos avanzados', function () {
    before(function () {
        //Cargamos los valores del archivo example.json en un objeto de datos
        cy.fixture('CarritoDeCompras').then(function (datos) {
            this.datos = datos
        })
    })
    beforeEach(() => {
        //ingresar a la pagina de compra de articulos tecnologicos
        cy.visit("https://demo.opencart.com/index.php")
    })
 
    //Caso 7
    it('Realizar compra de celulares basadas en su titulo', function () {
        cy.get("#menu ul a:contains('Phones & PDAs')").click()
 
        this.datos.articulo.forEach(function (articulo) {
            cy.agregarElementoAlCarrito(articulo)
            cy.pause()
        })
 
        cy.get('.btn-inverse').click()
 
        this.datos.articulo.forEach(function (articulo) {
            cy.verificamosElementoEnCarritoDD(articulo)
        })
 
    })
})
// comment