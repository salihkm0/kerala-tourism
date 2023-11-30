
const password = document.getElementById('password');
const ConfirmPassword = document.getElementById('ConfirmPassword');
const ConfirmMsg = document.getElementById('Confirm-msg');
const submitBtn = document.getElementById('submitBtn');

const passShow_1 = document.getElementById('passShow-1');
const passShow_2 = document.getElementById('passShow-2');

const letter = document.getElementById('letter');
const capital = document.getElementById('capital');
const number = document.getElementById('number');
const length = document.getElementById('length');



password.onfocus = () => document.getElementById('pass-pattern-msg').style.display = 'block';
password.onblur = () => document.getElementById('pass-pattern-msg').style.display = 'none';
ConfirmPassword.onfocus = () => document.getElementById('pass-valid-msg').style.display = 'block';
ConfirmPassword.onblur = () => document.getElementById('pass-valid-msg').style.display = 'none';



password.onkeyup = function() {
    var lowerCaseLetters = /[a-z]/g;
    if(password.value.match(lowerCaseLetters)) {  
        letter.classList.remove("invalid");
        letter.classList.add("valid");
    } 
    else {
        letter.classList.remove("valid");
        letter.classList.add("invalid");
    }
    var upperLetter = /[A-Z]/g;
    if(password.value.match(upperLetter)){
        capital.classList.remove("invalid");
        capital.classList.add("valid");
    }
    else{
        capital.classList.remove("valid");
        capital.classList.add("invalid");
    }


    var numbers = /[0-9]/g;
    if(password.value.match(numbers)) {  
        number.classList.remove("invalid");
        number.classList.add("valid");
    } 
    else {
        number.classList.remove("valid");
        number.classList.add("invalid");
    }

    if(password.value.length >= 8) {
        length.classList.remove("invalid");
        length.classList.add("valid");
    } 
    else {
        length.classList.remove("valid");
        length.classList.add("invalid");
    }
}

ConfirmPassword.onkeyup = function () {
    if(password.value !== ConfirmPassword.value){
        ConfirmMsg.classList.remove("valid");
        ConfirmMsg.classList.add("invalid");
        ConfirmMsg.innerText = 'Password not Matching';
        submitBtn.disabled = true;
        submitBtn.style.opacity = (0.4)
    }
    else{
        ConfirmMsg.classList.remove("invalid");
        ConfirmMsg.classList.add("valid");
        ConfirmMsg.innerText ='Password Matching';
        submitBtn.disabled = false;
        submitBtn.style.opacity = (1)
    }
    
}

passShow_1.onmouseover = () => {
    password.type = 'text';
    passShow_1.classList.add('fa-eye-slash')
    passShow_1.classList.remove('fa-eye')
}
passShow_1.onmouseleave = () => {
    password.type = 'password';
    passShow_1.classList.add('fa-eye')
    passShow_1.classList.remove('fa-eye-slash')
}

passShow_2.onmouseover = () => {
    ConfirmPassword.type = 'text';
    passShow_2.classList.add('fa-eye-slash')
    passShow_2.classList.remove('fa-eye')
}
passShow_2.onmouseleave = () => {
    ConfirmPassword.type = 'password';
    passShow_2.classList.add('fa-eye')
    passShow_2.classList.remove('fa-eye-slash')
}



