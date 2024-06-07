var signUpBtn = document.getElementById("signUpBtn");
var loginBtn = document.getElementById("loginBtn");
var emailInput = document.getElementById("emailInput");
var passwordInput = document.getElementById("passwordInput");
var notDataMsg = document.querySelector(".notData");
var fillInputs = document.querySelector(".fill-inputes");
var userData = [];

if (localStorage.getItem("userData") !== null) {
  userData = JSON.parse(localStorage.getItem("userData"));
}

loginBtn.addEventListener("click", function () {
  test();
  var email = emailInput.value;
  var password = passwordInput.value;
  for (var i = 0; i < userData.length; i++) {
    if (userData[i].email == email && userData[i].password == password) {
      notDataMsg.classList.add("d-none");
      localStorage.setItem(
        "userName",
        JSON.stringify(userData[i].name).toUpperCase()
      );
      return (window.location = "./home.html");
    } else {
      notDataMsg.classList.remove("d-none");
    }
  }
  notEmpty();
});

// To go to sign-up page

signUpBtn.addEventListener("click", function () {
  window.location = "./register.html";
});

// check all inputes fill data

function notEmpty() {
  if (emailInput.value == "" || passwordInput.value == "") {
    fillInputs.classList.remove("d-none");
    notDataMsg.classList.add("d-none");
  } else {
    fillInputs.classList.add("d-none");
  }
}

function test() {
  if (localStorage.userData == undefined) {
    notDataMsg.classList.remove("d-none");
    return true;
  } else {
    notDataMsg.classList.add("d-none");
    return false;
  }
}
