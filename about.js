const navLinks = document.querySelectorAll('#navbar a');
navLinks.forEach(link => {
    if (link.href === window.location.href) link.classList.add('active');
});

const emailBtn = document.querySelector("#newsletter button");
const emailInput = document.querySelector("#newsletter input");

emailBtn.addEventListener("click", () => {
    const email = emailInput.value;
    if (email.includes("@") && email.includes(".")) {
        alert("Thanks for joining us!");
        emailInput.value = "";
    } else {
        alert("Enter a valid email!");
    }
});
