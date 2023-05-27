import BasePage from "../pages/BasePage"
import AppointmentPage from "../pages/AppointmentPage"

describe('Make an Appointment', () => {
    const basePage = new BasePage();
    const appointmentPage = new AppointmentPage();
  
    it('Books an appointment', () => {
        //Open URL
        basePage.visit();

        // Click Make Appointment
        basePage.clickMakeAppointment();

        // Enter username and password
        basePage.fillUsername('John Doe');
        basePage.fillPassword('ThisIsNotAPassword');

        // Click login
        basePage.clickLogin();

        //Click burger icon
        appointmentPage.clickMenu();

        //Click History
        appointmentPage.clickHistory();

        //Validate no appointment
        appointmentPage.validateNoAppointment();
    })
})