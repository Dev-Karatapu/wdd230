
// Function to check password confirmation
function checkPasswordValidity() {
  var password = document.getElementById("password");
  var confirmPassword = document.getElementById("confirmPassword");
  if (password.value !== confirmPassword.value) {
    alert("Passwords do not match. Please try again.");
    password.value = "";
    confirmPassword.value = "";
    password.focus();
  }
}

// Function to display current rating value
function displayRatingValue(value) {
  document.getElementById("ratingValue").textContent = value;
}