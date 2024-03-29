// Take a DOM Elements
const time = document.getElementById('time'),
    greeting = document.getElementById('greeting'),
    yourName = document.getElementById('name'),
    focus = document.getElementById('focus');

// Show Time
function showTime() {
    let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds();

    // Set AM or PM
    const amPm = hour >= 12 ? 'PM' : 'AM';

    // 12hr Format 
    hour = hour % 12 || 12;

    // Output time 
    time.innerHTML = `
    <div class = "time-format"><div>${addZero(hour)}</div></div>
    <span>:</span>
    <div class = "time-format"><div>${addZero(min)}</div></div>
    <span>:</span>
    <div class = "time-format"><div>${addZero(sec)}</div></div>
    <div class = "am-pm">${amPm}</div>
    `;

    setTimeout(showTime, 1000);
};

// Add Zero
function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
};

//Set background and Greeting
function setBgGreet() {
    let today = new Date(),
        hour = today.getHours();

    if (hour < 12) {
        // Morning
        document.body.style.backgroundImage = "url('../public/img/morning.jpg')";
        // document.body.style.backgroundImage = "url('../img/evening.jpg')";
        greeting.textContent = 'Good Morning';
        document.body.style.color = 'black';
    } else if (hour < 18) {
        // Afternoon
        document.body.style.backgroundImage = "url('../public/img/afternoon.jpg')";
        greeting.textContent = 'Good Afternoon';
    } else {
        // Evening
        document.body.style.backgroundImage = "url('../public/img/night.jpg')";
        greeting.textContent = 'Good Evening';
    }
};

// Get Name
function getName() {
    if (localStorage.getItem('name') === null) {
        yourName.textContent = '[Enter Your Name]';
    } else {
        yourName.textContent = localStorage.getItem('name');
    }
};

// Set Name
function setName(e) {
    if (e.type === 'keypress') {
        // Make sure enter is pressed
        if (e.which === 13 || e.keyCode === 13) {
            localStorage.setItem('name', e.target.innerText);
            yourName.blur();
        }
    } else {
        localStorage.setItem('name', e.target.innerText)
    }
};

// Get Focus
function getFocus() {
    if (localStorage.getItem('focus') === null) {
        focus.textContent = '[Enter Your Focus]';
    } else {
        focus.textContent = localStorage.getItem('focus');
    }
};

// Set Focus
function setFocus(e) {
    if (e.type === 'keypress') {
        // Make sure enter is pressed
        if (e.which === 13 || e.keyCode === 13) {
            localStorage.setItem('focus', e.target.innerText);
            focus.blur();
        }
    } else {
        localStorage.setItem('focus', e.target.innerText)
    }
};

yourName.addEventListener('keypress', setName);
yourName.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

// Run
showTime();
setBgGreet();
getName();
getFocus();