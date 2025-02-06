const form=document.forms.formRegistration;

const nameInput=form.elements.username;
const nameError=document.getElementById('nameErr');

const emailInput=form.elements.email;
const emailError=document.getElementById('emailErr');

const ageInput=form.elements.age;
const ageError=document.getElementById('ageErr');

const passInput = form.elements.password;
const passError = document.getElementById("passErr");

const consCheck = form.elements.consent;
const consError = document.getElementById("consErr");


function validateName(name) {
    let regex = /^[a-zA-Zа-яА-Я ]{2,20}$/;
    return regex.test(name);
}

function validateEmail(email) {
let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,4}$/i;
return regex.test(email);
}

function validateAge(age) {
let regex = /^[0-9]{1,3}$/;
return regex.test(age);
}

function validatePass(pass) {
let regex = /^[a-zA-Z0-9\d!@#$%^&*]{8,20}$/;
return regex.test(pass);
}

form.addEventListener("input", function(){
let newError=false;

nameError.style.display = "none";
emailError.style.display = "none";
ageError.style.display = "none";
passError.style.display = "none";
consError.style.display = "none";

if (validateName(nameInput.value) === false) {
nameError.textContent = "Имя должно состоять из букв.";
nameError.style.display = "block";
newError = true;
}

if (validateEmail(emailInput.value) === false) {
emailError.textContent = "Введите корректный email.";
emailError.style.display = "block";
newError = true;
}

if (validateAge(ageInput.value) === false) {
ageError.textContent = "Введите корректный возраст.";
ageError.style.display = "block";
newError = true;
}

if (validatePass(passInput.value) === false) {
passError.textContent = "Введите корректный пароль.";
passError.style.display = "block";
newError = true;
}

if (consCheck.checked === false) {
consError.textContent = "Необходимо согласие с условиями.";
consError.style.display = "block";
newError = true;
}

if (newError === false) {
form.elements.button.disabled = false;
form.elements.button.style = "background-color: rgb(147, 198, 201)";
} else {
form.elements.button.disabled = true;
form.elements.button.style =
    "background-color: whitesmoke; color: lightgray;";
}
});

form.addEventListener("submit", function (evt) {
evt.preventDefault();

console.log(`Имя: ${nameInput.value}`);
console.log(`email: ${emailInput.value}`);
console.log(`Возраст: ${ageInput.value}`);
console.log(`Пол: ${form.elements.gender.value}`);
console.log(`Профессия: ${form.elements.profession.value}`);
console.log(`Пароль: ${passInput.value}`);
console.log(`Соглаcие на обработку: ${consCheck.value}`);
form.reset();
form.elements.button.disabled = true;
form.elements.button.style =
    "background-color: orange; color: black;";
});

const inputFields = document.querySelectorAll(".input-field");

inputFields.forEach(function (input) {
  input.addEventListener("focus", function () {
    //Изменение границы при фокусе
    input.style.border = "5px solid blue";
  });

  input.addEventListener("blur", function () {
    //Восстановление стандартной границы после потери фокуса
    input.style.border = "";
  });
});