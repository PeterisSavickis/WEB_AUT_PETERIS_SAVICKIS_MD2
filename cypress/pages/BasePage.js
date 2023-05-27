class BasePage {
    visit() {
        cy.visit('https://katalon-demo-cura.herokuapp.com/');
    }
    clickMakeAppointment() {
        cy.get('#btn-make-appointment').click();
    }

    //Log In
    fillUsername(name) {
        cy.get('#txt-username').type(name);
    }
    fillPassword(password) {
        cy.get('#txt-password').type(password);
    }
    clickLogin() {
        cy.get('#btn-login').click();
    }
}

export default BasePage;