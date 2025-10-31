// Monthly Activities Data 
const activities = [
    { id: 1, activity: "Create project file which contains tables between 12 to 19", subject: "Maths" },
    { id: 2, activity: "Write an essay on photosynthesis", subject: "Science" },
    { id: 3, activity: "Read chapter 5 of the history book", subject: "History" },
    { id: 4, activity: "Solve algebra problems 1-10", subject: "Maths" },
    { id: 5, activity: "Draw a map of India", subject: "Geography" },
    { id: 6, activity: "Practice English grammar exercises", subject: "English" }
];

// DOM Elements
const loginSection = document.getElementById('loginSection');
const registerSection = document.getElementById('registerSection');
const welcomeSection = document.getElementById('welcomeSection');
const studentProfile = document.getElementById('studentProfile');
const monthlyActivity = document.getElementById('monthlyActivity');
const subjectSelect = document.getElementById('subjectSelect');
const activityList = document.getElementById('activityList');

// Show Login First
document.addEventListener('DOMContentLoaded', () => {
    showSection('loginSection');
    populateSubjectDropdown();
    displayActivities(); 
});

// Login Form Handler
document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    if (username && password) {
        alert('Login successful!'); 
        showSection('welcomeSection');
    } else {
        alert('Please enter both username and password.');
    }
});


document.getElementById('registerForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('regUsername').value.trim();
    const password = document.getElementById('regPassword').value.trim();
    if (username && password) {
        alert('Registration successful! Please login.'); 
    } else {
        alert('Please fill in all fields.');
    }
});

// Navigation Functions
function showSection(sectionId) {
    [loginSection, registerSection, welcomeSection, studentProfile, monthlyActivity].forEach(section => {
        section.classList.add('hidden');
    });
    document.getElementById(sectionId).classList.remove('hidden');
}

function showRegister() {
    showSection('registerSection');
}

function showLogin() {
    showSection('loginSection');
}

function logout() {
    if (confirm('Are you sure you want to logout?')) {
        showSection('loginSection');
        document.getElementById('loginForm').reset();
    }
}

// Populate Subject Dropdown
function populateSubjectDropdown() {
    const subjects = [...new Set(activities.map(a => a.subject))];
    subjects.forEach(subject => {
        const option = document.createElement('option');
        option.value = subject;
        option.textContent = subject;
        subjectSelect.appendChild(option);
    });
}

// Display Activities 
function displayActivities() {
    const selectedSubject = subjectSelect.value;
    const filteredActivities = selectedSubject ? activities.filter(a => a.subject === selectedSubject) : activities;
    
    activityList.innerHTML = '';
    if (filteredActivities.length === 0) {
        activityList.innerHTML = '<p>No activities found for the selected subject.</p>';
        return;
    }
    
    filteredActivities.forEach(activity => {
        const div = document.createElement('div');
        div.className = 'activity-item';
        div.innerHTML = `<strong>${activity.subject}:</strong> ${activity.activity}`;
        activityList.appendChild(div);
    });
}