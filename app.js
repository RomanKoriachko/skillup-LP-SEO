// initialaze AOS

AOS.init();

// phone input

function validatePhone(id, formSelector) {
    const input = document.querySelector(id);
    const output = input.nextElementSibling;
    const inputWrapper = input.parentElement;
    const form = document.querySelector(formSelector);
    const errorMap = [
        "Некорректный номер",
        "Некоректный код страны",
        "Мало символов",
        "Слишком много символов",
        "Некорректный номер",
    ];

    const iti = window.intlTelInput(input, {
        utilsScript:
            "https://cdn.jsdelivr.net/npm/intl-tel-input@18.1.1/build/js/utils.js",
        hiddenInput: "phone",
        preferredCountries: ["ua"],
    });

    const preventDefault = function (e) {
        e.preventDefault();
    };

    const reset = function () {
        inputWrapper.classList.remove("false-number");
        output.innerHTML = "";
        form.removeEventListener("submit", preventDefault);
    };

    input.addEventListener("blur", function () {
        reset();
        if (input.value.trim()) {
            if (iti.isValidNumber()) {
                output.innerHTML =
                    "Номер корректный, полный международный формат: " +
                    iti.getNumber();
            } else {
                form.addEventListener("submit", preventDefault);
                inputWrapper.classList.add("false-number");
                const errorCode = iti.getValidationError();
                output.innerHTML = errorMap[errorCode];
            }
        }
    });

    input.addEventListener("change", reset);
    input.addEventListener("keyup", reset);
}

validatePhone("#phone1", "#form-1");
validatePhone("#phone2", "#form-2");
