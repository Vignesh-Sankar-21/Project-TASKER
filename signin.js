document.getElementById('signInButton').addEventListener('click', function() {
    const email = document.getElementById('emailInput').value;
    const password = document.getElementById('passwordInput').value;
    const storedPassword = localStorage.getItem(email);

    if (storedPassword && storedPassword === password) {
        alert('Sign in successful!');
        window.location.href = 'todolist.html'; // Redirect to the To-Do List page
    } else {
        alert('Invalid email or password. Please try again.');
    }
});
