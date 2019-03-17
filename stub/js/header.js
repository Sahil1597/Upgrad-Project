document.getElementById('signInModal').style.display = 'none';
document.getElementById('signUpModal').style.display = 'none';

function signUpModal() {
    document.getElementById('signUpModal').style.display = 'flex';
    hideSignInModal();
}
function hideSignUpModal() {
    document.getElementById('signUpModal').style.display = 'none';
}


function signInModal() {
    document.getElementById('signInModal').style.display = 'flex';
    hideSignUpModal();
}
function hideSignInModal() {
    document.getElementById('signInModal').style.display = 'none';
}