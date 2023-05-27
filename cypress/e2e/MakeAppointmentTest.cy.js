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

    // Set appointment details
    appointmentPage.selectFacility('Seoul CURA Healthcare Center');
    appointmentPage.checkHospitalReadmission();
    appointmentPage.selectProgram('medicaid');
    appointmentPage.selectDate('30/05/2023');
    appointmentPage.fillComment('CURA Healthcare Service');

    // Click book appointment
    appointmentPage.bookAppointment();

    // Validate appointment details
    appointmentPage.validateAppointment('Seoul CURA Healthcare Center', 'Yes', 'Medicaid', '30/05/2023', 'CURA Healthcare Service');
  })
})