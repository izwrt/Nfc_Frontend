document.addEventListener("DOMContentLoaded", function() {
    const showButton = document.getElementById("showButton");
    const blurElement = document.querySelector('.blur');
    const showContainer = document.querySelector('.update-emp-form');

    showButton.addEventListener("click", function() {
        blurElement.style.display = 'flex';
        showContainer.style.display = 'block';
    });
});