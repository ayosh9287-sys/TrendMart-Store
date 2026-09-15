// قراءة حالة الدخول الحقيقية واسم المستخدم المخزن
let isUserLoggedIn = localStorage.getItem('isLoggedIn') === 'true'; 
let currentUsername = localStorage.getItem('loggedInUser') || "User"; 

// DOM Elements
const navLinks = document.getElementById('navLinks');
const guestLinks = document.getElementById('guestLinks');
const userProfile = document.getElementById('userProfile');
const usernameDisplay = document.getElementById('usernameDisplay');
const logoutBtn = document.getElementById('logoutBtn');
const heroSection = document.getElementById('heroSection');
const blockerMessage = document.getElementById('blockerMessage');

function checkLoginStatus() {
    if (isUserLoggedIn) {
        blockerMessage.classList.add('hidden');
        heroSection.classList.remove('blur-content');
        navLinks.classList.remove('hidden');
        
        guestLinks.classList.add('hidden');
        userProfile.classList.remove('hidden');
        usernameDisplay.textContent = `Hello, ${currentUsername}`;
    } else {
        blockerMessage.classList.remove('hidden');
        heroSection.classList.add('blur-content');
        navLinks.classList.add('hidden');
        
        guestLinks.classList.remove('hidden');
        userProfile.classList.add('hidden');
    }
}

document.addEventListener('DOMContentLoaded', checkLoginStatus);

logoutBtn.addEventListener('click', () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('loggedInUser');
    isUserLoggedIn = false;
    checkLoginStatus();
    alert("You have logged out successfully!");
});
