// Selecting landing page
let landingPage = document.querySelector(".landing-page");

// Get array of images
let arrImages = [];

// Filling arrImages
for (let i = 0; i < 9; i++) {
    arrImages[i] = `../images/0${i + 1}.jpg`;
}

// Get random number
let randomNum;
let currentImage;

// Change background images
setInterval(() => {
    randomNum = Math.floor(Math.random() * arrImages.length);
    currentImage = arrImages[randomNum];

    landingPage.style.backgroundImage = 'url("' + currentImage + `")`;
}, 5000);

// Open setting box
let settingBox = document.querySelector(".settings-box");

document.querySelector(".setting-icon").addEventListener("click", (e) => {
    if (settingBox.classList.contains("open-settings-box"))
        settingBox.classList.remove("open-settings-box");
    else
        settingBox.classList.add("open-settings-box");
});
