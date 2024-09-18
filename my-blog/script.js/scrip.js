document.addEventListener("DOMContentLoaded", function() {
    const welcomeMessage = document.getElementById('welcome-message');
    const introduction = document.getElementById('introduction');
    const warningMessage = document.getElementById('warning-message');

    setTimeout(() => {
        welcomeMessage.style.opacity = 1;
    }, 500);

    setTimeout(() => {
        introduction.style.opacity = 1;
    }, 2000);

    setTimeout(() => {
        warningMessage.style.opacity = 1;
    }, 4000);
});
