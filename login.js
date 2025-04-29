/*async function login(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    const response = await fetch('login.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    });
    
    const result = await response.json();
    
    if (result.success) {
        window.location.href = 'home.html';
    } else {
        document.getElementById('error').textContent = result.message;
    }
}*/
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const errorMessage = document.getElementById('errorMessage');

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the form from submitting the traditional way

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Dummy user data for demonstration
        const dummyEmail = 'user@example.com';
        const dummyPassword = 'password123';

        if (email === dummyEmail && password === dummyPassword) {
            // Successful login, redirect to home page
            window.location.href = 'home.html';
        } else {
            // Display error message
            errorMessage.textContent = 'Invalid email or password.';
        }
    });
});

