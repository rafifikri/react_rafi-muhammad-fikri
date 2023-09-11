function submitForm(event) {
  event.preventDefault();

  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  if (firstName === "" || lastName === "" || email === "" || message === "") {
    alert("Please fill in all fields before submitting the form.");
    return;
  }

  var alertMessage =
    "Firstname: " +
    firstName +
    "\nLastname: " +
    lastName +
    "\nEmail: " +
    email +
    "\nPesan: " +
    message;
  alert(alertMessage);

  window.location.reload();
}
