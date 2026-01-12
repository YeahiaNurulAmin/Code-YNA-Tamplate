// Selecting landing page
let landingPage = document.querySelector(".landing-page");
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
// Get all the progress elements
const progressElements = document.querySelectorAll(".progress");
// Images relate to landing page
let arrLandingImages = [];
// Images for gallery
let arrGalleryImages = [];

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
function fillImagesArray(imagePath, numOfImages) {
    let temArray = [];
    for (let i = 0; i < numOfImages; i++) {
        if (i >= 9) {
            temArray[i] = imagePath.replace("+++", `${i + 1}`);
        } else {
            temArray[i] = imagePath.replace("+++", `0${i + 1}`);
        }
    }
    return temArray;
}

// Initialize background images
function initializeRandomBG() {
    arrLandingImages = fillImagesArray("../images/+++.jpg", 9);

    if (randomBGImage == true) {
        randBGIntervalID = setInterval(() => {
            randomNum = Math.floor(Math.random() * arrLandingImages.length);
            currentImagePath = arrLandingImages[randomNum];

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

// Check if the skills are in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();

    return rect.top < window.innerHeight && rect.bottom > 0;
}

// Filling progress
function fillingProgress() {
    progressElements.forEach((pe) => {
        if (isInViewport(pe)) {
            pe.style.width = pe.dataset.progress;
        } else {
            pe.style.width = "1%";
        }
    });
}

// Animate progress
function animateProgress() {
    // Run on scroll
    window.addEventListener("scroll", fillingProgress);
    // Run on page load in case some are already in view
    window.addEventListener("load", animateProgress);
}

// Filling images in gallery
function fillingImageInGallery(totalImage) {
    arrGalleryImages = fillImagesArray("images/gi+++.jpg", totalImage);

    let galleryImageBox = document.querySelector(".gallery .image-box");

    arrGalleryImages.forEach((imagePath, index) => {
        galleryImageBox.innerHTML += `<img loading="lazy" src="${imagePath}" alt="Image ${index + 1}">`;
    });
}

// image popup
function imagePopup(obj) {
    const popupContainer = document.querySelector(".popup-container");
    const imageHolder = document.querySelector(".popup-container .image-holder");
    const popupImage = document.querySelector(".popup-container .image-holder .popup-image");
    const closeBtn = document.querySelector(".popup-container .image-holder .close-btn");
    const imageName = document.querySelector(".popup-container .image-holder h3");

    // open the popup
    popupContainer.style.display = "flex";

    // add image path to popup image
    popupImage.setAttribute("src", obj.iPath);
    imageName.textContent = obj.iName;

    // close popup
    popupContainer.addEventListener("click", () => {
        popupContainer.style.display = "none";
    });
    closeBtn.addEventListener("click", () => {
        popupContainer.style.display = "none";
    });

    // stop propagation from parent
    imageHolder.addEventListener("click", (e) => {
        e.stopPropagation();
    });
}

// image on click
function getClickImagePathAndName() {
    const allGalleryImage = document.querySelectorAll(".gallery .image-box img");
    let imageInfo = {
        iName: "",
        iPath: "",
    };

    allGalleryImage.forEach((image) => {
        image.addEventListener("click", () => {
            if (image.getAttribute("src") != "") {
                imageInfo.iName = image.getAttribute("alt") ?? "";
                imageInfo.iPath = image.getAttribute("src") ?? "";
                imagePopup(imageInfo);
            };
        });
    });
}

// Calling functions
animateProgress();
initializeRandomBGButtons();
setMainColor();
toggleFlipIcon();
openSettingBox();
checkLocalStorageValue();
initializeRandomBG();
setBackgroundImage(localStorage.getItem("currentImagePath") ?? "../images/03.jpg");
fillingImageInGallery(18);
getClickImagePathAndName();



