// const form = document.querySelector('form');
const btn = document.querySelector('button');

// let pass1error = document.querySelector('password-1 + span.error')
// let pass2error = document.querySelector('password-2 + span.error')
// console.log(btn);

/* The alert option */
/*
btn.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(pass1.value, pass2.value);
    if (pass1.value !== pass2.value) {
        alert("The passwords don't match!");
        setTimeout(() => {
            document.location.reload();
        }, 1150);
    }
});
*/

btn.addEventListener('click', (e) => {
    const pass1 = document.querySelector('#password-1');
    const pass2 = document.querySelector('#password-2');
    const passError = document.querySelector('.error-message');
    e.preventDefault();
    console.log(pass1.value, pass2.value);
    if (pass1 !== pass2) {
        pass1.classList.add('error');
        pass2.classList.add('error');
        passError.style.display = 'block';
    }
});
// btn.addEventListener('click', (e) => {
//     e.preventDefault();
//     console.log(pass1.value, pass2.value);
//     if (pass1.value !== pass2.value) {
//         document.querySelector('.password-1-wrong').textContent = "* The passwords don't match!";
//         document.querySelector('.password-2-wrong').textContent = "* The passwords don't match!";
//     }
// });

// pass1.classList.add('error');
//     pass2.classList.add('error');
//     errorMsg.style.display = 'block';