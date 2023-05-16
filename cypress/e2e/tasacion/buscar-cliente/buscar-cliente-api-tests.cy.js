import {HOST_FRONT, HOST_BACK} from "../../../resources/environment";


const COD_USER = 62564194
const COD_USER_ERROR = 62564195

const EP_FIND_CLIENT = `${HOST_BACK}api/mov-app-veh/find-client-mov-app-veh`


describe('Search client', () => {
    // beforeEach(() => {
    //     cy.visit(`${HOST_FRONT}portal/tasacion`)
    // })

    it('request find-client service should return cliente no encontrado', () => {
        cy.request({
            method: 'GET',
            url: EP_FIND_CLIENT+`?document_number=${COD_USER_ERROR}`,
            failOnStatusCode: false,
        }).then( (res) => {
            expect(res.status).to.eq(500)
            expect(res.body.message).to.eq("Cliente no encontrado")
        })
    })

    it('request find-client service should return an ', () => {
        cy.request({
            method: 'GET',
            url: EP_FIND_CLIENT+`?document_number=${COD_USER_ERROR}`,
            failOnStatusCode: false,
        }).then( (res) => {
            expect(res.status).to.eq(500)
            expect(res.body.message).to.eq("Cliente no encontrado")
        })
    })

    it('request find-client service should return client data', () => {
        cy.request({
            method: 'GET',
            url: EP_FIND_CLIENT+`?document_number=${COD_USER}`,
            failOnStatusCode: false,
        }).then( (res) => {
            expect(res.status).to.eq(200)
            expect(res.body.data).to.not.eq(null)
        })
    })




})