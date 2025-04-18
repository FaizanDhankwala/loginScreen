const form = document.querySelector('.email-form');
const emailInput = document.querySelector('#email');
const enterSiteBtn = document.getElementById('enter-site-btn');
window.onload = () => {
    emailInput.focus();
  };

// Handle form submission triggered by Enter key
form.addEventListener('submit', (e) => {
    e.preventDefault(); // prevent page refresh

    const email = emailInput.value.trim();
    if (email) {
        console.log("Email Entered:", email);

        // Show the Enter Site button
        enterSiteBtn.classList.add('show');

        // Optional: prevent multiple event bindings
        enterSiteBtn.onclick = () => {
            window.location.href = 'https://worldtourco.com/';
        };
    }
});
