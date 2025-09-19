const lengthSlider = document.getElementById('lengthSlider');
const lengthOutput = document.getElementById('lengthOutput');
const generateBtn = document.getElementById('generateBtn');
const generatedPassword = document.getElementById('generatedPassword');
const copyBtn = document.getElementById('copyBtn');
const strengthFill = document.getElementById('strengthFill');

const uppercaseCheckbox = document.getElementById('uppercase');
const lowercaseCheckbox = document.getElementById('lowercase');
const numbersCheckbox = document.getElementById('numbers');
const symbolsCheckbox = document.getElementById('symbols');

//Connect slider value with lengthoutput

lengthSlider.addEventListener('input', () =>{
    lengthOutput.value = lengthSlider.value;
})

//Characters for passgen

const UPPERCASE_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LOWERCASE_CHARS = "abcdefghijklmnopqrstuvwxyz";
const NUMBER_CHARS = "0123456789";
const SYMBOL_CHARS = "!@#$%^&*()-_=+[]{};:,.<>?/";

function genPassword() {
    let length = parseInt(lengthSlider.value);
    let charset = "";

    if(uppercaseCheckbox.checked) charset += UPPERCASE_CHARS;
    if(lowercaseCheckbox.checked) charset += LOWERCASE_CHARS;
    if(numbersCheckbox.checked) charset += NUMBER_CHARS;
    if(symbolsCheckbox.checked) charset += SYMBOL_CHARS;

    if (charset === "") {
        alert("Select at least one character type!");
        return;
    }

    let password = "";
    for (let i = 0; i < length; i++) {
        password += charset[Math.floor(Math.random() * charset.length)];
    }

    generatedPassword.value = password;
}

generateBtn.addEventListener('click', genPassword);

copyBtn.addEventListener("click", () =>{
    if(generatedPassword.value === ""){
        alert("First generate and password!")
        return;
    }
    navigator.clipboard.writeText(generatedPassword.value);
})