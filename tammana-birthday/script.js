
// =========================
// ELEMENTS
// =========================

const giftBox = document.getElementById("giftBox");
const giftButton = document.getElementById("giftButton");

const surpriseButton =
    document.getElementById("surpriseButton");

const secretMessage =
    document.getElementById("secretMessage");

const songButton =
    document.getElementById("songButton");

const birthdaySong =
    document.getElementById("birthdaySong");

const musicCard =
    document.querySelector(".music-card");

const musicProgress =
    document.querySelector(".music-progress");


// =========================
// OPEN GIFT
// =========================

giftButton.addEventListener("click", function () {

    giftBox.classList.add("open");

    setTimeout(function () {

        document
            .getElementById("letter")
            .scrollIntoView({
                behavior: "smooth"
            });

    }, 900);

});


// =========================
// MUSIC PLAYER
// =========================

songButton.addEventListener(
    "click",
    async function () {

        if (birthdaySong.paused) {

            try {

                await birthdaySong.play();

                songButton.textContent = "Ⅱ";

                musicCard.classList.add("playing");

            } catch (error) {

                console.log(
                    "The song could not be played:",
                    error
                );

            }

        } else {

            birthdaySong.pause();

            songButton.textContent = "▶";

            musicCard.classList.remove("playing");

        }

    }
);


// =========================
// MUSIC PROGRESS
// =========================

birthdaySong.addEventListener(
    "timeupdate",
    function () {

        if (!birthdaySong.duration) return;

        const progress =
            (birthdaySong.currentTime /
            birthdaySong.duration) * 100;

        musicProgress.style.width =
            progress + "%";

    }
);


// =========================
// MUSIC ENDED
// =========================

birthdaySong.addEventListener(
    "ended",
    function () {

        songButton.textContent = "▶";

        musicCard.classList.remove("playing");

        musicProgress.style.width = "0%";

    }
);


// =========================
// SURPRISE
// =========================

surpriseButton.addEventListener(
    "click",
    function () {

        secretMessage.classList.add("show");

        surpriseButton.textContent =
            "A Little Message For You 🤍";

    }
);


// =========================
// SCROLL REVEAL
// =========================

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target
                        .classList
                        .add("visible");

                }

            });

        },
        {
            threshold: 0.15
        }
    );


revealElements.forEach(function (element) {

    revealObserver.observe(element);

});
