document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('login-form1').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission
        // Perform form validation here
        var email = document.getElementById('username').value;
        var password = document.getElementById('password').value;

        if (email.trim() === '') {
            alert('Please enter your email address.');
            return;
        }

        if (password.trim() === '') {
            alert('Please enter your password.');
            return;
        }
        alert('Login successfully!');
        if (email.trim() === 'dipen-profile@gmail.com' && password.trim() === 'dipen123') {
            window.location.href = 'CodeCanvas-Profile.html';
        } else if (email.trim() === 'dipen-component@gmail.com' && password.trim() === 'dipen123') {
            window.location.href = 'Code-Canvas-Component.html';
        } else if (email.trim() === 'dipen-search@gmail.com' && password.trim() === 'dipen123') {
            window.location.href = 'Code-Canvas-Component.html';
        } else {
            alert('Invalid email or password.');
        }
    });
});
