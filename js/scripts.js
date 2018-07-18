/* Scheduling Confirmation */

function confirmPerformance() {
    var nameInput = document.getElementById("name_input").value;
    var phoneInput = document.getElementById("phone_input").value;
    var dateInput = document.getElementById("date_input").value;
    var emailInput = document.getElementById("email_input").value;
    var alertText = schedulingConfirmation.replace("%name%", nameInput);
    var alertText = alertText.replace("%phone%", phoneInput);
    var alertText = alertText.replace("%email%", emailInput);
    var alertText = alertText.replace("%date%", dateInput);
    var noTextAlert = "Please fill in all fields of the form.";
    if (nameInput.length == 0) {
        alert(noTextAlert);
    } else if (phoneInput.length == 0) {
        alert(noTextAlert);
    } else if (dateInput.length == 0) {
        alert(noTextAlert);
    } else if (nameInput.length == 0) {
        alert(noTextAlert);
    } else {
        alert(alertText);
    }
};