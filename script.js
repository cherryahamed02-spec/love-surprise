/* =========================================================
   ELEMENTS
========================================================= */

const startButton =
    document.getElementById("startButton");

const openLetterButton =
    document.getElementById("openLetterButton");

const messageContinueButton =
    document.getElementById("messageContinueButton");

const galleryContinueButton =
    document.getElementById("galleryContinueButton");

const reasonsContinueButton =
    document.getElementById("reasonsContinueButton");

const counterButton =
    document.getElementById("counterButton");


const welcomeSection =
    document.getElementById("welcomeSection");

const envelopeSection =
    document.getElementById("envelopeSection");

const messageSection =
    document.getElementById("messageSection");

const gallerySection =
    document.getElementById("gallerySection");

const reasonsSection =
    document.getElementById("reasonsSection");

const counterSection =
    document.getElementById("counterSection");

const finalSection =
    document.getElementById("finalSection");


const envelope =
    document.getElementById("envelope");

const typingText =
    document.getElementById("typingText");

const cursor =
    document.getElementById("cursor");

const loveCounter =
    document.getElementById("loveCounter");

const counterMessage =
    document.getElementById("counterMessage");

const globalHearts =
    document.getElementById("globalHearts");

const backgroundMusic =
    document.getElementById("backgroundMusic");



/* =========================================================
   YOUR PERSONAL MESSAGE ❤️
   
   >>> EDIT THIS PART ONLY <<<
========================================================= */

const myMessage = `Dear My Love,

I dont't really know how to put everything
I feel into words...

But I just want to you to know that 
you are very special to me. ❤️

Enaku unna romba pudikum ma
Ivvalavu kaalamum unna 
Romba kashta paduthiten.

Insha allah ini nee santhosama 
Irukalam athuku naan porupu
Unna naan ini nalla paathupen ma.

Love u di ma bottu....❤️

Summa tention, payam unaku 
thevella ma be happyy...

Thank you for being there,
for making me smile,
and for being a beautiful part of my life.❤️
`;



/* =========================================================
   START BUTTON
========================================================= */

startButton.addEventListener("click", function () {

    welcomeSection.classList.add("hidden-section");

    envelopeSection.classList.remove("hidden-section");

    createHeartBurst();

    startFloatingHearts();

    try {

        backgroundMusic.volume = 0.35;

        backgroundMusic.play();

    } catch (error) {

        console.log("Music needs user interaction.");

    }

    scrollToSection(envelopeSection);

});



/* =========================================================
   OPEN LETTER
========================================================= */

openLetterButton.addEventListener("click", function () {

    envelope.classList.add("open");

    openLetterButton.style.display = "none";


    setTimeout(function () {

        envelopeSection.classList.add(
            "hidden-section"
        );

        messageSection.classList.remove(
            "hidden-section"
        );

        scrollToSection(messageSection);

        startTyping();

    }, 1100);

});



/* =========================================================
   TYPING EFFECT
========================================================= */

let typingIndex = 0;


function startTyping() {

    typingText.textContent = "";

    typingIndex = 0;

    cursor.style.display = "inline";

    typeCharacter();

}


function typeCharacter() {

    if (typingIndex < myMessage.length) {

        typingText.textContent +=
            myMessage.charAt(typingIndex);

        typingIndex++;


        let currentCharacter =
            myMessage.charAt(
                typingIndex - 1
            );


        let typingSpeed = 32;


        /*
            Slight pause after punctuation
        */

        if (
            currentCharacter === "." ||
            currentCharacter === "!" ||
            currentCharacter === "?"
        ) {

            typingSpeed = 220;

        }


        if (currentCharacter === ",") {

            typingSpeed = 120;

        }


        setTimeout(
            typeCharacter,
            typingSpeed
        );

    } else {

        cursor.style.display = "none";


        setTimeout(function () {

            messageContinueButton.style.display =
                "inline-block";

        }, 700);

    }

}



/* =========================================================
   MESSAGE → GALLERY
========================================================= */

messageContinueButton.addEventListener(
    "click",
    function () {

        messageSection.classList.add(
            "hidden-section"
        );

        gallerySection.classList.remove(
            "hidden-section"
        );

        createHeartBurst();

        scrollToSection(gallerySection);

    }
);



/* =========================================================
   GALLERY → REASONS
========================================================= */

galleryContinueButton.addEventListener(
    "click",
    function () {

        gallerySection.classList.add(
            "hidden-section"
        );

        reasonsSection.classList.remove(
            "hidden-section"
        );

        createHeartBurst();

        scrollToSection(reasonsSection);

    }
);



/* =========================================================
   REASONS → COUNTER
========================================================= */

reasonsContinueButton.addEventListener(
    "click",
    function () {

        reasonsSection.classList.add(
            "hidden-section"
        );

        counterSection.classList.remove(
            "hidden-section"
        );

        scrollToSection(counterSection);

    }
);



/* =========================================================
   LOVE COUNTER
========================================================= */

let counterStarted = false;


counterButton.addEventListener(
    "click",
    function () {

        if (counterStarted) {

            return;

        }


        counterStarted = true;

        counterButton.style.display =
            "none";


        let number = 0;


        const counterInterval =
            setInterval(function () {

                number += 10;


                if (number < 100) {

                    loveCounter.textContent =
                        number + "%";

                }


                else if (number === 100) {

                    loveCounter.textContent =
                        "100%";

                    counterMessage.textContent =
                        "Wait... that's definitely not enough 😌";

                }


                else if (number < 1000) {

                    loveCounter.textContent =
                        number + "%";

                    counterMessage.textContent =
                        "Okay... it's getting bigger ❤️";

                }


                else {

                    clearInterval(
                        counterInterval
                    );


                    loveCounter.textContent =
                        "∞ ❤️";

                    counterMessage.textContent =
                        "There is no number big enough.";

                    createHeartBurst();


                    setTimeout(function () {

                        counterSection.classList.add(
                            "hidden-section"
                        );

                        finalSection.classList.remove(
                            "hidden-section"
                        );

                        scrollToSection(
                            finalSection
                        );

                    }, 1800);

                }


            }, 70);

    }
);



/* =========================================================
   SCROLL
========================================================= */

function scrollToSection(section) {

    setTimeout(function () {

        section.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }, 50);

}



/* =========================================================
   FLOATING HEARTS
========================================================= */

function createHeart() {

    const heart =
        document.createElement("div");


    heart.classList.add(
        "floating-heart"
    );


    const heartTypes = [
        "❤️",
        "💕",
        "💗",
        "💖",
        "💘",
        "💝"
    ];


    heart.textContent =
        heartTypes[
            Math.floor(
                Math.random() *
                heartTypes.length
            )
        ];


    heart.style.left =
        Math.random() * 100 + "%";


    heart.style.fontSize =
        (15 + Math.random() * 30) + "px";


    heart.style.animationDuration =
        (5 + Math.random() * 5) + "s";


    globalHearts.appendChild(
        heart
    );


    setTimeout(function () {

        heart.remove();

    }, 11000);

}


let heartsStarted = false;


function startFloatingHearts() {

    if (heartsStarted) {

        return;

    }


    heartsStarted = true;


    setInterval(function () {

        createHeart();

    }, 650);

}



/* =========================================================
   HEART BURST
========================================================= */

function createHeartBurst() {

    for (
        let i = 0;
        i < 25;
        i++
    ) {

        setTimeout(
            createHeart,
            i * 50
        );

    }

}



/* =========================================================
   FINAL CLICK / HEART EFFECT
========================================================= */

finalSection.addEventListener(
    "click",
    function () {

        createHeartBurst();

    }
);