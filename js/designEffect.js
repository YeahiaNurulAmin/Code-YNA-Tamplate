// interactive shadow that follows the cursor for h1 span
const text = document.getElementById('headerSpan');

    text.addEventListener('mousemove', (e) => {
      const rect = text.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      // Calculate shadow position (opposite to cursor)
      const shadowX = -x / 10;
      const shadowY = -y / 10;

      text.style.textShadow = `
        ${shadowX}px ${shadowY}px 5px #6C5CE7,
        ${shadowX * 4}px ${shadowY * 4}px 5px #6C5CE7
      `;
    });

    text.addEventListener('mouseleave', () => {
      text.style.textShadow = '0 0 20px rgba(108, 92, 231, .6)';
    });