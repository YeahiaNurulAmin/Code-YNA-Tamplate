// Check value in localStorage
let mainColor = localStorage.getItem("mainColor");

if (mainColor) {
    document.documentElement.style.setProperty("--primary-color", localStorage.getItem("mainColor"));
}

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
    i.addEventListener("click", (e) => {
        e.currentTarget.parentElement.querySelectorAll(".active").forEach((j) => {
            j.classList.remove("active");
        });

        localStorage.setItem("mainColor", e.currentTarget.dataset.color);

        document.documentElement.style.setProperty("--primary-color", e.currentTarget.dataset.color);
        
        e.currentTarget.classList.add("active");
    });
});
