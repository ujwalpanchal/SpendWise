document.addEventListener('DOMContentLoaded', () => {
    // Toggle between login and signup forms
    const loginBtn = document.getElementById('login-btn');
    const signupBtn = document.getElementById('signup-btn');
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const formTitle = document.getElementById('form-title');

    // Hardcoded users for login testing
    const hardcodedUsers = [
        { email: 'sahilpawar@123', password: 'sahil@123' },
        { email: 'john@example.com', password: 'john123' },
        {email:'ujwalpanchal@1203',password:'ujwal@123'},
        
    ];

    // Event listeners to switch between forms
    loginBtn.addEventListener('click', () => {
        loginForm.classList.remove('hidden');
        signupForm.classList.add('hidden');
        loginBtn.classList.add('active');
        signupBtn.classList.remove('active');
        formTitle.textContent = 'Login';
        clearErrorMessages(); // Clear error messages when switching forms
    });

    signupBtn.addEventListener('click', () => {
        signupForm.classList.remove('hidden');
        loginForm.classList.add('hidden');
        signupBtn.classList.add('active');
        loginBtn.classList.remove('active');
        formTitle.textContent = 'Sign Up';
        clearErrorMessages(); // Clear error messages when switching forms
    });

    // Login form submission with redirection
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;

        // Check if the email and password match the hardcoded users
        const user = hardcodedUsers.find(user => user.email === email && user.password === password);

        if (user) {
            alert('Login successful! Redirecting...');
            window.location.href = 'income.html'; // Redirect to income.html after successful login
        } else {
            document.getElementById('login-error').textContent = 'Invalid email or password';
        }
    });

    // Signup form submission with simple validation
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('signup-email').value;
        const password = document.getElementById('signup-password').value;
        const confirmPassword = document.getElementById('signup-confirm-password').value;

        clearErrorMessages(); // Clear previous error messages

        if (password !== confirmPassword) {
            document.getElementById('signup-error').textContent = 'Passwords do not match!';
            return;
        }

        // Check if the email already exists in the hardcoded list (just for testing)
        const userExists = hardcodedUsers.some(user => user.email === email);

        if (userExists) {
            document.getElementById('signup-error').textContent = 'User already exists!';
        } else {
            alert('Sign up successful! You can now log in.');
            // Add the new user to the hardcoded list for testing purposes
            hardcodedUsers.push({ email, password });
            // Optionally, you can switch back to the login form after sign up success
            loginBtn.click();
        }
    });

    // Function to clear error messages
    function clearErrorMessages() {
        document.getElementById('login-error').textContent = '';
        document.getElementById('signup-error').textContent = '';
    }
});