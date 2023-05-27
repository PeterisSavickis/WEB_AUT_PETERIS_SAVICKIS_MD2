class AppointmentPage {
    //Fill in the form
    selectFacility(facility) {
        cy.get('#combo_facility').select(facility);
    }
    checkHospitalReadmission() {
        cy.get('#chk_hospotal_readmission').check();
    }
    selectProgram(program) {
        cy.get(`#radio_program_${program}`).check();
    }
    selectDate(date) {
        cy.get('#txt_visit_date').type(date);
    }
    fillComment(comment) {
        cy.get('textarea[name="comment"]').type(comment, {force: true});
    }

    //Book appointment
    bookAppointment() {
        cy.get('#btn-book-appointment').click();
    }

    validateAppointment(facility, readmission, program, date, comment) {
        cy.get('#facility').should('contain', facility)
        cy.get('#hospital_readmission').should('contain', readmission)
        cy.get('#program').should('contain', program)
        cy.get('#visit_date').should('contain', date)
        cy.get('#comment').should('contain', comment)
    }

    clickMenu() {
        cy.get('#menu-toggle').click();
    }
    clickHistory() {
        // Replace with the actual selector of the History option in the menu
        cy.contains('.sidebar-nav', 'History').click();
    }
    validateNoAppointment() {
        // Replace with the actual selector of the element that should contain 'No appointment'
        cy.get('#history').should('contain', 'No appointment');
    }
}

export default AppointmentPage;