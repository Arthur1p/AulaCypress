/// <reference types="cypress"/>
import Login from '../support/Pages/Login'

describe('Realizar Login',()=>{
    it('Realizar login',()=>{
        Login.acessarURL()
        Login.preencherUsername('standard_user')
        Login.preencherPassword('secret_sauce')
        Login.clicarNoBotaoLogin()
    })
})