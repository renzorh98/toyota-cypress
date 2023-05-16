import {HOST_FRONT} from "../../../resources/environment";

const HEADER_TEXTS = ['En Parte de Pago', 'Tasación', 'Historial', 'Certificación', 'Venta de Vehículos certificados', 'Cerrar sesión']
const PATHS = ['tasacion', 'historial', 'certificacion', 'venta-vehiculos-certificados', 'login']


describe('Header horizontal menu tests', () => {

    beforeEach(() => {
        cy.visit(HOST_FRONT)
        cy.wait(3000)
        cy.url().then(url => {
            console.log(url)
            if (url.includes('login')) {
                cy.get('.MuiButtonBase-root').click()

                cy.origin('https://tasador-toyota.auth.us-east-1.amazoncognito.com', () => {
                    cy.get('.panel-left-border > :nth-child(2) > :nth-child(1) > .cognito-asf > :nth-child(3) > #signInFormUsername').as('user')
                    cy.get('@user').type('renzorh98@outlook.com')
                    cy.get('.panel-left-border > :nth-child(2) > :nth-child(1) > .cognito-asf > :nth-child(5) > #signInFormPassword').type('Jtyelpo9*')
                    cy.get('.panel-left-border > :nth-child(2) > :nth-child(1) > .cognito-asf > .btn').click()
                })

                cy.wait(10000)
            }
        })
    })

    it('displays five buttons and user data (Name-Group-Area)', () => {
        cy.get('.MuiToolbar-root > .MuiBox-root > .MuiButtonBase-root').as('navbarOpts')
        cy.get('.MuiToolbar-root').as('navbar')
        cy.wrap(HEADER_TEXTS).each((text) => {
            cy.get('@navbar').contains("" + text)
        })

        cy.get('@navbarOpts').should('have.length', 5)
    })

    it('Clicking tasación should redirect to path .../portal/tasacion', () => {
        cy.get('.MuiToolbar-root > .MuiBox-root > .MuiButtonBase-root').as('navbarOpts')
        cy.get('.MuiToolbar-root').as('navbar')
        cy.get('@navbarOpts').contains(HEADER_TEXTS[1]).click()
        cy.wait(1000)
        cy.url().should('include', `/portal/${PATHS[0]}`)
    })

    it('Clicking historial should redirect to path .../portal/historial', () => {
        cy.get('.MuiToolbar-root > .MuiBox-root > .MuiButtonBase-root').as('navbarOpts')
        cy.get('.MuiToolbar-root').as('navbar')
        cy.get('@navbarOpts').contains(HEADER_TEXTS[2]).click()
        cy.wait(1000)
        cy.url().should('include', `/portal/${PATHS[1]}`)
    })

    it('Clicking certificacion should redirect to path .../portal/certificacion', () => {
        cy.get('.MuiToolbar-root > .MuiBox-root > .MuiButtonBase-root').as('navbarOpts')
        cy.get('.MuiToolbar-root').as('navbar')
        cy.get('@navbarOpts').contains(HEADER_TEXTS[3]).click()
        cy.wait(1000)
        cy.url().should('include', `/portal/${PATHS[2]}`)
    })

    it('Clicking venta de vehiculos should redirect to path .../portal/venta-vehiculos-certificados', () => {
        cy.get('.MuiToolbar-root > .MuiBox-root > .MuiButtonBase-root').as('navbarOpts')
        cy.get('.MuiToolbar-root').as('navbar')
        cy.get('@navbarOpts').contains(HEADER_TEXTS[4]).click()
        cy.wait(1000)
        cy.url().should('include', `/portal/${PATHS[3]}`)
    })

    it('Clicking salir should redirect to path .../login', () => {
        cy.get('.MuiToolbar-root > .MuiBox-root > .MuiButtonBase-root').as('navbarOpts')
        cy.get('.MuiToolbar-root').as('navbar')
        cy.get('@navbarOpts').contains(HEADER_TEXTS[5]).click()
        cy.wait(1000)
        cy.url().should('include', `${PATHS[4]}`)
    })

    /***************************
     * 08/05/2023
     * TC 260; 261; 262; 263; 264
     * No se pueden automatizar hasta que se solucione las observaciones
     * de datos de usuario y boton salir
     ****************************/
})
