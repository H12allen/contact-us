// write your JavaScript here
document.getElementById("ge").addEventListener("click", function () {
  document.getElementById("radio").checked = true;
  document.getElementById("ge").style.backgroundColor = "hsl(148, 38%, 91%)";
  document.getElementById("ge").style.border = "1px solid hsl(169, 82%, 27%)";
  document.getElementById("rad").checked = false;
  document.getElementById("sr").style.backgroundColor = "transparent";
  document.getElementById("sr").style.border = "1px solid black";
});

document.getElementById("first").classList.add("appear");
document.getElementById("second").classList.add("appear");
document.getElementById("mail").classList.add("appear");
document.getElementById("query").classList.add("appear");
document.getElementById("message").classList.add("appear");
document.getElementById("footer").classList.add("appear");
document.querySelector(".success").classList.add("appear");

document.querySelector("#sr").addEventListener("click", function () {
  document.getElementById("radio").checked = false;
  document.getElementById("ge").style.backgroundColor = "transparent";
  document.getElementById("ge").style.border = "1px solid black";
  document.getElementById("rad").checked = true;
  document.getElementById("sr").style.backgroundColor = "hsl(148, 38%, 91%)";
  document.getElementById("sr").style.border = "1px solid hsl(169, 82%, 27%)";
});

// VARIABLES
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const mail = document.getElementById("email");
const radio = document.getElementById("radio");
const rad = document.getElementById("rad");
const message = document.getElementById("age");
const check = document.getElementById("check");
// FUNCTIONS
document.getElementById("submit").addEventListener("click", function () {
  if (fname.value == "") {
    document.getElementById("first").classList.remove("appear");
  }
  if (lname.value == "") {
    document.getElementById("second").classList.remove("appear");
  }
  if (mail.value == "") {
    document.getElementById("email").placeholder = "johsteward@gmail.com";
    document.getElementById("mail").classList.remove("appear");
  }
  if (radio.checked === false && rad.checked === false) {
    document.getElementById("query").classList.remove("appear");
  } else if (radio.checked === true && rad.checked === false) {
    document.getElementById("query").classList.add("appear");
  }
  if (message.value == "") {
    document.getElementById("message").classList.remove("appear");
  }
  if (radio.checked === true && message.value == "") {
    document.getElementById("age").placeholder =
      "Example: Hello, i'm intersted in learning more about your services";
  }
  if (rad.checked === true && message.value == "") {
    document.getElementById("age").placeholder =
      "Example: I'm getting a 404 error message on your website, can you fix it?";
  }
  if (check.checked === false) {
    document.getElementById("footer").classList.remove("appear");
  }

  if (
    (fname.value !== "" &&
      lname.value !== "" &&
      mail.value !== "" &&
      message.value !== "" &&
      check.checked == true &&
      radio.checked == true) ||
    rad.checked == true
  ) {
    document.querySelector(".success").classList.remove("appear");
    fname.value = " ";
    lname.value = " ";
    mail.value = " ";
    message.value = " ";
    check.checked = false;
    if (radio.checked == true) {
      radio.checked = false;
      document.getElementById("ge").style.backgroundColor = "transparent";
      document.getElementById("ge").style.border = "1px solid black";
    } else if (rad.checked == true) {
      rad.checked = false;
      document.getElementById("sr").style.backgroundColor = "transparent";
      document.getElementById("sr").style.border = "1px solid black";
    }
  }
});
// SPANS, REMOVE APPEAR

document.querySelector(".first").addEventListener("click", function () {
  document.getElementById("first").classList.add("appear");
});
document.querySelector(".second").addEventListener("click", function () {
  document.getElementById("second").classList.add("appear");
});
document.querySelector(".mail").addEventListener("click", function () {
  document.getElementById("mail").classList.add("appear");
});
document.querySelector(".query").addEventListener("click", function () {
  if (radio.checked === true || rad.checked === true) {
    document.getElementById("query").classList.add("appear");
  }
});
document.querySelector(".message").addEventListener("click", function () {
  document.getElementById("message").classList.add("appear");
});
document.querySelector(".foot").addEventListener("click", function () {
  if (check.checked === true) {
    document.getElementById("footer").classList.add("appear");
  }
  if (check.checked === false) {
    document.getElementById("footer").classList.remove("appear");
  }
});
