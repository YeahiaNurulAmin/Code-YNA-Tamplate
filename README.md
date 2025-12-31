# Code YNA - Creative Agency Template

A modern, responsive landing page template for a creative agency. This project showcases a professional web design with dynamic background images, settings customization, and smooth animations.

## 📋 Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [File Descriptions](#file-descriptions)
- [Customization](#customization)
- [License](#license)

## ✨ Features

- **Responsive Design**: Fully responsive layout that works on all device sizes
- **Dynamic Background Images**: Automatically rotates background images every 5 seconds
- **Settings Panel**: Customizable settings box for testing options
- **Modern UI**: Clean and professional design with smooth animations
- **Icon Integration**: FontAwesome icons for enhanced visual elements
- **Cross-browser Compatible**: Works across all modern browsers

## 📁 Project Structure

```
Code YNA Template/
├── index.html                    # Main HTML file
├── package.json                  # Project dependencies
├── README.md                     # This file
├── css/
│   └── master.css               # Main stylesheet
├── js/
│   ├── master.js                # Main JavaScript logic
│   └── designEffect.js          # Design effects and animations
├── images/                      # Background and asset images
├── fontawesome-free-7.1.0-web/ # FontAwesome icon library
└── node_modules/                # Project dependencies
```

## 🛠 Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Styling with responsive design
- **JavaScript (ES6+)**: Dynamic functionality and interactivity
- **FontAwesome 7.1.0**: Icon library for UI elements
- **Google Fonts**: Open Sans font family
- **Normalize.css**: CSS reset for consistent cross-browser styling

## 📦 Installation

1. **Clone or download** the repository
   ```bash
   git clone <repository-url>
   cd "Code YNA Template"
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Open in browser**
   - Simply open `index.html` in your web browser
   - Or use a local development server like Live Server

## 🚀 Usage

### Basic Setup
1. Ensure all image files are in the `images/` folder
2. Open `index.html` in your browser
3. The page will automatically display with rotating background images

### Settings Panel
- Click the settings icon (⚙️) in the top-left corner to open the settings panel
- The panel provides options for testing various features

### Customizing Content
Edit the following in `index.html`:
- **Logo**: Modify the SVG logo in the header
- **Navigation**: Update menu links in the `<nav>` section
- **Main Heading**: Change the headline text
- **Description**: Update the introductory paragraph

## 📄 File Descriptions

### HTML (`index.html`)
- Contains the main page structure
- Includes header with logo and navigation
- Landing page section with overlay
- Introduction text with dynamic heading

### CSS (`css/master.css`)
- Defines all styling and layout
- Responsive design rules
- Animation effects
- Color scheme and typography

### JavaScript

#### `js/master.js`
- Handles random background image rotation (every 5 seconds)
- Manages settings panel open/close functionality
- Dynamic image array loading from the `images/` directory

#### `js/designEffect.js`
- Contains additional design effects and animations
- Enhances user interactions

## 🎨 Customization

### Changing Background Images
1. Add your images to the `images/` folder
2. Ensure images are named sequentially: `01.jpg`, `02.jpg`, etc.
3. Update the array length in `js/master.js` if you add more images

### Modifying Colors
Edit `css/master.css` to change:
- Primary color: `#0A2540` (dark blue)
- Accent color: `#00B4D8` (cyan)
- Or create custom color variables

### Adjusting Image Rotation Speed
In `js/master.js`, change the interval value (currently 5000ms):
```javascript
setInterval(() => {
    // ... rotation code
}, 5000); // Change 5000 to desired milliseconds
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 📝 License

This project is part of the Elzero Web School curriculum.

---

**Created as a learning project for modern web development practices.**

