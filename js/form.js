const form = document.getElementById("contactform");
const errorList = document.getElementById("errorlist");
const successMessage = document.getElementById("success");

function hasValue(input) {
  if (input.value.trim() === "") {
    return showError(input);
  }
  return true;
}

function showError(input) {
  let inputName = input.name;
  let message = ` Het ${inputName} is leeg! Vul een waarde in.`;
  const li = document.createElement("li");
  li.textContent = message;
  errorList.appendChild(li);
}

function showSuccess() {
  let message = "We hebben je bericht ontvangen!";
  successMessage.textContent = message;
}

function showAlert(name, email, message) {
  alert(`You have send a message.\n
    Name: ${name}\n
    Email: ${email}\n
    Message: ${message}`);
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  errorList.textContent = "";
  successMessage.textContent = "";

  let nameValid = hasValue(form.elements["name"]);
  let emailValid = hasValue(form.elements["email"]);
  let messageValid = hasValue(form.elements["message"]);

  if (nameValid && emailValid && messageValid) {
    showAlert(
      form.elements["name"].value,
      form.elements["email"].value,
      form.elements["message"].value
    );
    showSuccess();
  }
});


const x = document.getElementById("Comment-box-onder");
function myFunction() {
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}