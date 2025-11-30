const quantityInputs = document.querySelectorAll("input[type='number']");
let oldValues = {};

quantityInputs.forEach((input, index) => {
    oldValues[index] = Number(input.value);

    input.addEventListener("change", function () {
        let newValue = Number(input.value);

        if (newValue > oldValues[index]) {
            alert("Thank you for shopping!");
        }

        oldValues[index] = newValue;
    });
});
