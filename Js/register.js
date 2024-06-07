var nameInput = document.getElementById("nameInput");
var emailInput = document.getElementById("emailInput");
var passwordInput = document.getElementById("passwordInput");
var rePasswordInput = document.getElementById("rePasswordInput");
var registerBtn = document.getElementById("registerBtn");
var passwordAlert = document.querySelector(".password-alert");
var fillInputs = document.querySelector(".fill-inputes");
var sucsses = document.querySelector(".sucsses");
var exists = document.querySelector(".exists");
var logPageBtn = document.getElementById("logPageBtn");
var alertNametMsg = document.getElementById("nameAlertMsg");
var alertMailMsg = document.getElementById("emailAlertMsg");
var alertPasswordMsg = document.getElementById("passwordAlertMsg");

var userData = [];

if (localStorage.getItem("userData") !== null) {
  userData = JSON.parse(localStorage.getItem("userData"));
}
registerBtn.addEventListener("click", function () {
  register();
  notEmpty();
  clearForm();
});

function register() {
  var user = {
    name: nameInput.value,
    email: emailInput.value,
    password: passwordInput.value,
    rePassword: rePasswordInput.value,
  };
  if (emailExist() == false) {
    exists.classList.remove("d-none");
    sucsses.classList.add("d-none");
  } else if (
    passwordInput.value == rePasswordInput.value &&
    validName() == true &&
    validEmail() == true &&
    validPassword() == true
  ) {
    userData.push(user);
    localStorage.setItem("userData", JSON.stringify(userData));

    sucsses.classList.remove("d-none");
    exists.classList.add("d-none");
  }
}

function emailExist() {
  for (var i = 0; i < userData.length; i++) {
    if (userData[i].email.toLowerCase() == emailInput.value.toLowerCase()) {
      return false;
    }
  }
}

function clearForm() {
  if (passwordInput.value !== rePasswordInput.value) {
    passwordInput.value = null;
    rePasswordInput.value = null;
    passwordAlert.classList.remove("d-none");
  } else {
    passwordAlert.classList.add("d-none");
  }
}

// check all inbuts not empty
function notEmpty() {
  if (
    nameInput.value == "" ||
    emailInput.value == "" ||
    passwordInput.value == "" ||
    rePasswordInput.value == ""
  ) {
    fillInputs.classList.remove("d-none");
    exists.classList.add("d-none");
  } else {
    fillInputs.classList.add("d-none");
  }
}

//  valid Name check
function validName() {
  var regex = /^[a-z][a-z0-9_-]*$/i;
  var text = nameInput.value;
  if (regex.test(text) == true) {
    alertNametMsg.classList.add("d-none");
    return true;
  } else {
    alertNametMsg.classList.remove("d-none");
    return false;
  }
}

// Valid Email check
function validEmail() {
  var regex = /^[a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1}([a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1})*[a-zA-Z0-9]@[a-zA-Z0-9][-\.]{0,1}([a-zA-Z][-\.]{0,1})*[a-zA-Z0-9]\.[a-zA-Z0-9]{1,}([\.\-]{0,1}[a-zA-Z]){0,}[a-zA-Z0-9]{0,}$/i;
  var text = emailInput.value;
  if (regex.test(text) == true) {
    alertMailMsg.classList.add("d-none");
    return true;
  } else {
    alertMailMsg.classList.remove("d-none");
    return false;
  }
}

// valid password check
function validPassword() {
  var regex = /^.{6,}$/;
  var text = passwordInput.value;
  if (regex.test(text) == true) {
    alertPasswordMsg.classList.add("d-none");
    return true;
  } else {
    alertPasswordMsg.classList.remove("d-none");
    return false;
  }
}

// To go to the login page
logPageBtn.addEventListener("click", function () {
  window.location = "./index.html";
});
