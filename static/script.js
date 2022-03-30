let pw1 = document.getElementById('password-1');
let pw2 = document.getElementById('password-2');
let msg = document.getElementById('prompt');

pw1.addEventListener('keyup', () => {
    msg.style.visibility = 'visible';
    checkPasswords();
});

pw2.addEventListener('keyup', () => {
    msg.style.visibility = 'visible';
    checkPasswords();
});

function checkPasswords(){
    if (pw1.value === pw2.value && pw1.value!==''){
        msg.style.color = 'green';
        msg.textContent = 'Passwords match!';
        pw1.style.borderColor = 'green';
        pw2.style.borderColor = 'green';
    }
    else{
        msg.style.color = 'red';
        msg.textContent = '*Passwords do not match';
        pw1.style.borderColor = 'red';
        pw2.style.borderColor = 'red';
    }
}