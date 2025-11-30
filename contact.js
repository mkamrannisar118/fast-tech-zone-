document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("#form-details form");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = form.querySelector("input[placeholder='Your Name']").value.trim();
        const email = form.querySelector("input[placeholder='E-mail']").value.trim();
        const subject = form.querySelector("input[placeholder='Subject']").value.trim();
        const message = form.querySelector("textarea").value.trim();

        if (!name || !email || !subject || !message) {
            alert("Please fill out all fields before submitting.");
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        alert("Thank you! Your message has been submitted successfully.");
        form.reset();
    });
});
