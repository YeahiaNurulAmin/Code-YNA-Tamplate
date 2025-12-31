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
document.querySelector(".setting-icon").addEventListener("click", (e) => {
    document.querySelector(".settings-box").classList.toggle("open-settings-box");
});


// Toggle flip icon
document.querySelector(".setting-icon").addEventListener("click", (e) => {
    e.currentTarget.classList.toggle("fa-flip");
});


// Switch color
const LiColor = document.querySelectorAll(".color-list li");

LiColor.forEach((i) => {
    i.classList.remove("active");
    i.addEventListener("click", e => {
        document.documentElement.style.setProperty("--primary-color", e.currentTarget.dataset.color);
        e.currentTarget.classList.add("active");
    })
})
