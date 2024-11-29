import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";

// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCiurLEDkEYkCkDB0nXt-PxJ2aH6qyBeeA",
  authDomain: "playground-2190d.firebaseapp.com",
  databaseURL: "https://playground-2190d-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "playground-2190d",
  storageBucket: "playground-2190d.firebasestorage.app",
  messagingSenderId: "777640281953",
  appId: "1:777640281953:web:b221f1e461912118136720"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// DOM Elements
const loginContainer = document.querySelector('.login-container');
const signupContainer = document.querySelector('.signup-container');
const signupLink = document.getElementById('signup-link');
const loginLink = document.getElementById('login-link');
const loginButton = document.getElementById('login-button');
const signupButton = document.getElementById('signup-button');

// Toggle Views
signupLink.addEventListener('click', () => {
    loginContainer.style.display = 'none';
    signupContainer.style.display = 'block';
});

loginLink.addEventListener('click', () => {
    signupContainer.style.display = 'none';
    loginContainer.style.display = 'block';
});

// Login Function
loginButton.addEventListener('click', async () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        await signInWithEmailAndPassword(auth, email, password);
        alert("Login successful!");
        window.location.href = "index.html"; // Redirect to index.html after successful login
    } catch (error) {
        document.getElementById('error-message').textContent = error.message;
    }
});

// Sign Up Function
signupButton.addEventListener('click', async () => {
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const confirmPassword = document.getElementById('signup-confirm-password').value;

    if (password !== confirmPassword) {
        document.getElementById('signup-error-message').textContent = "Passwords do not match.";
        return;
    }

    try {
        await createUserWithEmailAndPassword(auth, email, password);
        alert("Sign-up successful! You can now log in.");
        signupContainer.style.display = 'none';
        loginContainer.style.display = 'block';
    } catch (error) {
        document.getElementById('signup-error-message').textContent = error.message;
    }
});
