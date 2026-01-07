// Selecting landing page
let landingPage = document.querySelector(".landing-page");
// Get array of images
let arrImages = [];
// Get random number
let randomNum;
let currentImagePath;
// Store randomBGTimer value in localStorage
let randomBGImage = localStorage.getItem("randBGTimer") ?? true;
let randBGIntervalID;
// Switch color
const LiColor = document.querySelectorAll(".color-list li");
// get main color from localStorage
let mainColor = localStorage.getItem("mainColor");

// Check value in localStorage
function checkLocalStorageValue() {
    if (mainColor) {
        document.documentElement.style.setProperty("--primary-color", localStorage.getItem("mainColor"));
        document.querySelectorAll(".color-list li").forEach((i) => {
            i.dataset.color === mainColor ? i.classList.add("active") : i.classList.remove("active");
        });
    }
}

// Filling arrImages
function fillImagesArray() {
    for (let i = 0; i < 9; i++) {
        arrImages[i] = `../images/0${i + 1}.jpg`;
    }
}

// Initialize background images
function initializeRandomBG() {
    fillImagesArray();

    if (randomBGImage == true) {
        randBGIntervalID = setInterval(() => {
            randomNum = Math.floor(Math.random() * arrImages.length);
            currentImagePath = arrImages[randomNum];
            console.log(currentImagePath);

            // Storing current image path
            localStorage.setItem("currentImagePath", currentImagePath);

            setBackgroundImage(currentImagePath);
        }, 5000);
        document.querySelector(".yes").classList.add("active");
    } else {
        document.querySelector(".no").classList.add("active");
    }
}

// Set background image
function setBackgroundImage(imagePath) {
    landingPage.style.backgroundImage = 'url("' + imagePath + `")`;
}

// Open setting box
function openSettingBox() {
    document.querySelector(".setting-icon").addEventListener("click", (e) => {
        document.querySelector(".settings-box").classList.toggle("open-settings-box");
    });
}

// Toggle flip icon
function toggleFlipIcon() {
    document.querySelector(".setting-icon").addEventListener("click", (e) => {
        e.currentTarget.classList.toggle("fa-shake");
    });
}

function setMainColor(color) {
    LiColor.forEach((i) => {
        i.addEventListener("click", (e) => {
            e.currentTarget.parentElement.querySelectorAll(".active").forEach((j) => {
                j.classList.remove("active");
            });

            localStorage.setItem("mainColor", e.currentTarget.dataset.color);

            document.documentElement.style.setProperty("--primary-color", e.currentTarget.dataset.color);

            e.currentTarget.classList.add("active");
        });
    });
}

//Switch random backgrounds between ON and OFF
//--Switch active class between yes and no buttons
function initializeRandomBGButtons() {
    document.querySelectorAll(".yes, .no").forEach((btn, _, btns) => {
        btn.addEventListener("click", (e) => {
            btns.forEach((b) => {
                b.classList.remove("active");
            });

            e.currentTarget.classList.add("active");
            if (e.currentTarget.classList.contains("no")) {
                randomBGImage = 0;
                localStorage.setItem("randBGTimer", false);
                clearInterval(randBGIntervalID);
            } else {
                randomBGImage = 1;
                localStorage.setItem("randBGTimer", true);
                clearInterval(randBGIntervalID);
                initializeRandomBG();
            }
        });
    });
}

// Calling functions
initializeRandomBGButtons();
setMainColor();
toggleFlipIcon();
openSettingBox();
checkLocalStorageValue();
initializeRandomBG();
setBackgroundImage(localStorage.getItem("currentImagePath") ?? "../images/03.jpg");
