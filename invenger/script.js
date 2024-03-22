document.addEventListener("DOMContentLoaded", function() {
    const showButton = document.getElementById("showButton");
    const blurElement = document.querySelector('.blur');
    const showContainer = document.querySelector('.update-emp-form');

    showButton.addEventListener("click", function() {
        blurElement.style.display = 'flex';
        showContainer.style.display = 'block';
    });
});


// time and date displaying in hero of admin

function getCurrentDateTime() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    let day = now.toLocaleDateString('en-US', { weekday: 'long' }); // Get the full name of the day
    let date = now.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }); // Get the full date

    // Add leading zero if necessary
    hours = (hours < 10) ? '0' + hours : hours;
    minutes = (minutes < 10) ? '0' + minutes : minutes;
    seconds = (seconds < 10) ? '0' + seconds : seconds;

    const currentTime = hours + ':' + minutes + ':' + seconds;
    return { time: currentTime, day: day, date: date }; // Return time, day, and date
}

function updateTime() {
    const timeElement = document.getElementById('time');
    const dayElement = document.getElementById('day');
    const dateElement = document.getElementById('date');
    if (timeElement && dayElement && dateElement) {
        const currentDateTime = getCurrentDateTime();
        timeElement.textContent = currentDateTime.time;
        dayElement.textContent = currentDateTime.day;
        dateElement.textContent = currentDateTime.date;
    }
}

updateTime();
setInterval(updateTime, 1000);

// error for change password when they are not matching
document.getElementById("confirm-pass-input").addEventListener("input", function() {
    var newPassword = document.getElementById("new-pass-input").value;
    var confirmPassword = this.value;

    var confirmPassLine = document.getElementById("confirm-pass-line");
    var confirmPassInput = document.getElementById("confirm-pass-input");

    if (newPassword !== confirmPassword) {
        confirmPassLine.style.backgroundColor = "red"; // Change background color to red
        confirmPassInput.classList.add("error"); // Add error class to change placeholder color to red
    } else {
        confirmPassLine.style.backgroundColor = ""; // Reset background color
        confirmPassInput.classList.remove("error"); // Remove error class
    }
});


document.getElementById("submit-btn").addEventListener("click", function(event) {
    event.preventDefault();

    var newPassword = document.getElementById("new-pass-input").value;
    var confirmPassword = document.getElementById("confirm-pass-input").value;

    if (newPassword !== confirmPassword) {
        document.getElementById("confirm-pass-line").style.backgroundColor = "red"; // Change background color to red

        // Add error class to change placeholder color to red
        document.getElementById("confirm-pass-input").classList.add("error");

        // Clear input fields
        document.getElementById("new-pass-input").value = "";
        document.getElementById("confirm-pass-input").value = "";
    } else {
        // Submit the form if passwords match
        document.getElementById("change-pass-container").submit();
    }
});



document.getElementById("add-emp-btn").addEventListener("click", function() {
    window.location.href = "addEmployee.html";
});


//done js

