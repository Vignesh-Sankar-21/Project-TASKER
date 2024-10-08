document.getElementById('signUpButton').addEventListener('click', function() {
    const email = document.getElementById('emailInput').value;
    const password = document.getElementById('passwordInput').value;

    if (email && password) {
        // Check if the email already exists
        if (localStorage.getItem(email)) {
            alert('Email already exists. Please sign in or use a different email.');
            return;
        }

        // Store email and password in local storage
        localStorage.setItem(email, password);
        alert('Sign up successful! Please sign in.');
        window.location.href = 'index.html'; // Redirect to sign in page
    } else {
        alert('Please fill in all fields.');
    }
});
