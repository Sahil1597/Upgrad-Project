var signIn = document.getElementById('signInModal');
var signUp = document.getElementById('signUpModal');
signIn.style.display = 'none';
signUp.style.display = 'none';

function signUpModal() {
    signUp.style.display = 'flex';
    hideSignInModal();
}
function hideSignUpModal() {
    signUp.style.display = 'none';
}


function signInModal() {
    signIn.style.display = 'flex';
    hideSignUpModal();
}
function hideSignInModal() {
    signIn.style.display = 'none';
}
window.onclick = function(event) {
    if(event.target == signIn || event.target == signUp) {
        hideSignInModal();
        hideSignUpModal();
    }
}
