// Language switcher (English / Arabic) with RTL support.
// English strings are always the original HTML content. The original
// values are cached on first switch and restored when switching back.

const LANG_STORAGE_KEY = "siteLang";

let currentLang = localStorage.getItem(LANG_STORAGE_KEY) || "en";

const originalTextCache = new Map();
const originalPlaceholderCache = new Map();
const originalTitleCache = new Map();
const originalValueCache = new Map();
const originalAltCache = new Map();

function applyLanguage(lang) {
    const dict = translations[lang] || {};

    document.documentElement.lang = lang;
    document.documentElement.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");

    if (lang === "ar") {
        // Cache original English values, then apply Arabic
        document.querySelectorAll("[data-i18n]").forEach((el) => {
            const key = el.dataset.i18n;
            if (dict[key] === undefined) return;
            if (!originalTextCache.has(el)) originalTextCache.set(el, el.textContent);
            el.textContent = dict[key];
        });
        document.querySelectorAll("[data-i18n-ph]").forEach((el) => {
            const key = el.dataset.i18nPh;
            if (dict[key] === undefined) return;
            if (!originalPlaceholderCache.has(el)) originalPlaceholderCache.set(el, el.placeholder);
            el.placeholder = dict[key];
        });
        document.querySelectorAll("[data-i18n-title]").forEach((el) => {
            const key = el.dataset.i18nTitle;
            if (dict[key] === undefined) return;
            if (!originalTitleCache.has(el)) originalTitleCache.set(el, el.title || "");
            el.title = dict[key];
        });
        document.querySelectorAll("[data-i18n-value]").forEach((el) => {
            const key = el.dataset.i18nValue;
            if (dict[key] === undefined) return;
            if (!originalValueCache.has(el)) originalValueCache.set(el, el.value);
            el.value = dict[key];
        });
        document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
            const key = el.dataset.i18nAlt;
            if (dict[key] === undefined) return;
            if (!originalAltCache.has(el)) originalAltCache.set(el, el.alt);
            el.alt = dict[key];
        });
    } else {
        // Restore original English values
        originalTextCache.forEach((original, el) => (el.textContent = original));
        originalPlaceholderCache.forEach((original, el) => (el.placeholder = original));
        originalTitleCache.forEach((original, el) => (el.title = original));
        originalValueCache.forEach((original, el) => (el.value = original));
        originalAltCache.forEach((original, el) => (el.alt = original));
    }

    // Translate gallery image alt text ("Image N" <-> "صورة N")
    document.querySelectorAll(".gallery .image-box img").forEach((img, i) => {
        if (lang === "ar") {
            img.setAttribute("alt", `صورة ${i + 1}`);
        } else {
            img.setAttribute("alt", `Image ${i + 1}`);
        }
    });

    // Update language toggle buttons (dark-mode style pill)
    document.querySelectorAll(".lang-toggle").forEach((btn) => {
        btn.dataset.active = lang === "ar" ? "true" : "false";
        const label = btn.querySelector(".lang-label");
        if (label) label.textContent = lang === "ar" ? "ع" : "EN";
        btn.title = lang === "en" ? "Switch to Arabic" : "Switch to English";
        btn.setAttribute("aria-label", btn.title);
    });

    localStorage.setItem(LANG_STORAGE_KEY, lang);
}

function initializeLanguage() {
    document.querySelectorAll(".lang-toggle").forEach((btn) => {
        btn.addEventListener("click", () => {
            const nextLang = currentLang === "ar" ? "en" : "ar";
            currentLang = nextLang;
            applyLanguage(nextLang);
        });
    });

    applyLanguage(currentLang);
}

initializeLanguage();