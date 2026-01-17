# YNA Code - Creative Agency Landing Page

> A fully interactive, responsive landing page template featuring dynamic backgrounds, customizable themes, and a smooth user experience with modern web technologies.

## Overview

**YNA Code** is a professional landing page template designed for creative agencies and development portfolios. Built with vanilla JavaScript, this project demonstrates modern web development practices including DOM manipulation, localStorage integration, and responsive design patterns.

**🌐 Live Demo**: [https://ynacode.netlify.app/](https://ynacode.netlify.app/)

You can also open `index.html` locally in your browser to experience the dynamic interface with rotating backgrounds and interactive settings panel.

---

## ✨ Key Features

| Feature | Description |
|---------|-------------|
| 🎨 **Dynamic Backgrounds** | Automatically rotates background images every 5 seconds with localStorage persistence |
| ⚙️ **Settings Panel** | Customizable theme panel with color picker, background controls, and navigation options |
| 🎯 **Navigation Bullets** | Quick-access navigation sidebar for smooth scrolling to page sections |
| 🎭 **Theme Customization** | Switch between predefined color themes with instant visual feedback |
| 📱 **Fully Responsive** | Optimized for desktop, tablet, and mobile devices |
| 🚀 **Performance Optimized** | Minified assets and efficient DOM manipulation |

---

## 🛠 Tech Stack

- **HTML5** - Semantic structure and custom data attributes
- **CSS3** - CSS variables, animations, and grid/flexbox layouts
- **JavaScript (ES6+)** - Event handling, localStorage API, DOM manipulation
- **FontAwesome 7.1.0** - Comprehensive icon library
- **Google Fonts** - Open Sans typeface
- **Normalize.css** - Cross-browser consistency

---

## 📦 Installation & Setup

### Quick Start
```bash
# 1. Navigate to project directory
cd "Code YNA Template"

# 2. Install dependencies
npm install

# 3. Open index.html
# Use any modern browser or a local server (Live Server recommended)
```

### Project Structure
```
Code YNA Template/
├── index.html                 # Main entry point
├── package.json              # Dependencies configuration
├── css/
│   └── master.css           # Unified stylesheet with CSS variables
├── js/
│   ├── master.js            # Core functionality (BG rotation, settings)
│   └── designEffect.js      # Animation effects & interactions
├── images/                  # Background images (01.jpg - 09.jpg)
├── fontawesome-free-7.1.0-web/
│   ├── css/                # Icon stylesheets
│   ├── js/                 # Icon scripts
│   └── webfonts/           # Icon font files
└── README.md
```

---

## 🎮 How to Use

### Default Behavior
1. Open `index.html` - page loads with a random background image
2. Images rotate automatically every 5 seconds
3. Settings and preferences persist across browser sessions via localStorage

### Settings Panel
Click the **⚙️ slider icon** (top-left) to open the settings panel:

- **Colors** - Select from predefined themes:
  - Dark Blue (`#0A2540`) - Default
  - Tomato Red (`#ff6347`)
  - Pure Blue (`#0000ff`)
  
- **Random Backgrounds** - Toggle automatic image rotation (YES/NO)
  
- **Navigation Bullets** - Show/hide the side navigation menu
  
- **Reset** - Restore all settings to defaults

---

## 🔧 Customization Guide

### Adding New Background Images
1. Add images to `images/` folder with naming convention: `01.jpg`, `02.jpg`, etc.
2. Update image count in [js/master.js](js/master.js#L58):
   ```javascript
   arrLandingImages = fillImagesArray("../images/+++.jpg", 10); // Change 10 to your image count
   ```

### Modifying Color Theme
Edit [css/master.css](css/master.css) to adjust the default colors:
```css
:root {
    --primary-color: #0A2540;  /* Main theme color */
    --accent-color: #00B4D8;   /* Accent elements */
}
```

Or modify color options in [index.html](index.html#L31-L35):
```html
<li class="active" data-color="#YourColorCode"></li>
```

### Changing Image Rotation Speed
In [js/master.js](js/master.js), adjust the interval (default: 5000ms):
```javascript
setInterval(() => {
    randomNum = Math.floor(Math.random() * arrLandingImages.length);
    landingPage.style.backgroundImage = `url('${currentImagePath}')`;
}, 5000); // Milliseconds - change to desired value
```

### Updating Logo & Branding
Edit the SVG logo in [index.html](index.html#L78-L85):
```html
<text class="main-logo-test" font-size="18" fill="#0A2540">
    YNA Code
</text>
```

---

## 📋 Component Details

### Core JavaScript Files

**[master.js](js/master.js)**
- Random background image rotation logic
- Settings panel interactions
- Color theme switching with CSS variables
- localStorage integration for persistence
- Navigation bullet functionality

**[designEffect.js](js/designEffect.js)**
- Smooth animations and transitions
- Interactive effect enhancements
- User experience improvements

### Main Stylesheet

**[master.css](css/master.css)**
- Complete page layout and styling
- CSS custom properties for theming
- Responsive breakpoints
- Animation keyframes
- Settings panel styling

---

## 🌐 Browser Compatibility

| Browser | Status |
|---------|--------|
| Chrome/Chromium | ✅ Full Support |
| Firefox | ✅ Full Support |
| Safari | ✅ Full Support |
| Edge | ✅ Full Support |
| Mobile Browsers | ✅ Full Support |

**Note**: Requires ES6 JavaScript support and CSS custom properties (variables)

---

## 📚 Learning Outcomes

This project demonstrates:
- DOM manipulation and event delegation
- Browser localStorage API for state persistence
- CSS custom properties for dynamic theming
- Responsive design techniques
- Modular JavaScript structure
- SVG graphics and icon integration
- Modern HTML5 semantic markup

---

## 📝 Notes

- Settings are saved to localStorage and persist across sessions
- Images must follow sequential naming convention (01.jpg, 02.jpg, etc.)
- All colors are easily configurable through CSS variables
- The design follows mobile-first responsive approach



