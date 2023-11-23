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
                output.classList.add("correct");
            } else {
                form.addEventListener("submit", preventDefault);
                inputWrapper.classList.add("false-number");
                const errorCode = iti.getValidationError();
                output.innerHTML = errorMap[errorCode];
                output.classList.remove("correct");
            }
        }
    });

    input.addEventListener("change", reset);
    input.addEventListener("keyup", reset);
}

validatePhone("#phone1", "#form-1");
validatePhone("#phone2", "#form-2");
validatePhone("#phone3", "#form-3");
validatePhone("#phone4", "#form-4");

// Show cource items

const courceBtns = document.querySelectorAll(
    ".cource-content-item-name-wrapper"
);
const courceContent = document.querySelectorAll(".cource-content-item-text");

for (let i = 0; i < courceBtns.length; i++) {
    courceBtns[i].addEventListener("click", () => {
        courceContent[i].classList.toggle("open");
        courceBtns[i].classList.toggle("open");
    });
}

// Show questions answers

const questionBtn = document.querySelectorAll(".question-header-wrapper");
const questionAnswer = document.querySelectorAll(".question-answer");

for (let i = 0; i < questionBtn.length; i++) {
    questionBtn[i].addEventListener("click", () => {
        questionAnswer[i].classList.toggle("open");
        questionBtn[i].classList.toggle("open");
    });
}

// Sliders

$(document).ready(function () {
    $(".coaches-slider").slick({
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        infinite: false,
    });
});

$(document).ready(function () {
    $(".companies-slider").slick({
        arrows: false,
        autoplay: true,
        variableWidth: true,
        slidesToScroll: 1,
        dots: true,
        infinite: true,
        centerMode: true,
    });
});

// Video tabs

function changeVideo(videoNumber) {
    const mainVideo = document.getElementById("mainVideo");
    const tabImg1 = document.querySelector(".tab-img-1");
    const tabImg2 = document.querySelector(".tab-img-2");
    const tabImg3 = document.querySelector(".tab-img-3");
    const tabImg4 = document.querySelector(".tab-img-4");

    if (videoNumber === "ZsnW6_xbuf4?si=tQe859Wl1PEswaUI") {
        tabImg1.classList.add("current");
        tabImg2.classList.remove("current");
        tabImg3.classList.remove("current");
        tabImg4.classList.remove("current");
    } else if (videoNumber === "ZoEPiqWJAeg?si=FMBQ50kcx16n6ULH") {
        tabImg1.classList.remove("current");
        tabImg2.classList.add("current");
        tabImg3.classList.remove("current");
        tabImg4.classList.remove("current");
    } else if (videoNumber === "KRsgzJE2CVo?si=NHtkvaiOkpgHIrbi") {
        tabImg1.classList.remove("current");
        tabImg2.classList.remove("current");
        tabImg3.classList.add("current");
        tabImg4.classList.remove("current");
    } else if (videoNumber === "TM1iGZLnLFM?si=aGAXYkGc-hiht5Gv") {
        tabImg1.classList.remove("current");
        tabImg2.classList.remove("current");
        tabImg3.classList.remove("current");
        tabImg4.classList.add("current");
    }
    mainVideo.src = `https://www.youtube.com/embed/${videoNumber}`;
}
