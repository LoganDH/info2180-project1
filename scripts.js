/* Add your JavaScript to this file */
"use strict";

var subBtn;
var eMailForm;
var formMsgDiv;

window.onload = function() {
    subBtn = document.querySelector("button[type=submit]"); //subscribe button
    eMailForm = document.getElementById("email"); //box for user input that says "Enter your email"
    formMsgDiv = document.querySelector(".newsletter .container .message"); //message that responds to subscribe button click

    subBtn.addEventListener("click", subBtnHandler);
}

function subBtnHandler(e) {
    e.preventDefault();
    let formValue = eMailForm.value;
    let msg = "<strong>Thank You! Your email address '" + formValue + "' has been added to our mailing list!</strong>";
    formValue == "" ? formMsgDiv.innerHTML = "<strong>Please enter a valid email address</strong>" : formMsgDiv.innerHTML = msg;
}