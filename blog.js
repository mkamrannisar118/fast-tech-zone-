const navLinks = document.querySelectorAll('#navbar a');
navLinks.forEach(link => {
    if (link.href === window.location.href) link.classList.add('active');
});

const emailBtn = document.querySelector("#emailBtn");
const emailInput = document.querySelector("#emailInput");

emailBtn.addEventListener("click", () => {
    const email = emailInput.value;
    if (email.includes("@")) {
        alert("Subscribed successfully!");
        emailInput.value = "";
    } else {
        alert("Please enter a valid email!");
    }
});
