// COLOR PALETTES
const lightModePastels = [
    '#FFE5E5', '#E5F5FF', '#FFF5E5', '#F0E5FF', '#E5FFE5',
    '#FFE5F5', '#E5FFFF', '#FFF5F0', '#F5FFE5', '#FFE5FF'
];

const darkModePastels = [
    '#8B6B7A', '#6B7A8B', '#8B7A6B', '#7A6B8B', '#6B8B7A',
    '#8B6B85', '#6B8B8B', '#8B7570', '#7A8B6B', '#856B8B'
];

// EVENT LISTENER 1: Toggle Dark Mode on Button Click
const darkModeButton = document.createElement('button');
darkModeButton.textContent = 'Toggle Dark Mode';
darkModeButton.id = 'dark-mode-btn';
darkModeButton.style.cssText = 'position: fixed; top: 20px; right: 20px; padding: 10px 20px; background: #7b68a6; color: white; border: none; border-radius: 8px; cursor: pointer; z-index: 1000;';
document.body.appendChild(darkModeButton);

const characterCards = document.querySelectorAll('.magical-creature-zone');

darkModeButton.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    
    if (document.body.classList.contains('dark-mode')) {
        document.body.style.backgroundColor = '#1a1a2e';
        document.body.style.color = '#eee';
        darkModeButton.textContent = 'Light Mode';
        
        characterCards.forEach(function(card) {
            if (card.classList.contains('card-clicked')) {
                const randomIndex = Math.floor(Math.random() * darkModePastels.length);
                card.style.backgroundColor = darkModePastels[randomIndex];
            }
        });
    } else {
        document.body.style.backgroundColor = '#faf7ff';
        document.body.style.color = '#4a4a4a';
        darkModeButton.textContent = 'Dark Mode';
        
        characterCards.forEach(function(card) {
            if (card.classList.contains('card-clicked')) {
                const randomIndex = Math.floor(Math.random() * lightModePastels.length);
                card.style.backgroundColor = lightModePastels[randomIndex];
            }
        });
    }
});

// EVENT LISTENER 2: Change Character Card Colors on Click
characterCards.forEach(function(card) {
    card.addEventListener('click', function() {
        const isDarkMode = document.body.classList.contains('dark-mode');
        const colorPalette = isDarkMode ? darkModePastels : lightModePastels;
        
        const randomIndex = Math.floor(Math.random() * colorPalette.length);
        const selectedColor = colorPalette[randomIndex];
        card.style.backgroundColor = selectedColor;
        
        card.style.borderColor = '#baa2dd';
        card.style.borderWidth = '4px';
        
        card.classList.add('card-clicked');
    });
});

// EVENT LISTENER 3: Image Hover Effect w/t Text change
const images = document.querySelectorAll('.picture-party img');
const imageCaption = document.createElement('p');
imageCaption.id = 'image-caption';
imageCaption.style.cssText = 'text-align: center; font-size: 1.5em; font-weight: bold; color: #7b68a6; margin-top: 10px; min-height: 30px;';
document.querySelector('.picture-party').appendChild(imageCaption);

images.forEach(function(img) {
    img.addEventListener('mouseenter', function() {
        const altText = img.alt;
        imageCaption.innerHTML = 'Hovering over: <em>' + altText + '</em>';
        
        img.classList.add('img-hover-active');
    });
    
    img.addEventListener('mouseleave', function() {
        imageCaption.innerHTML = '';
        img.classList.remove('img-hover-active');
    });
});

// Random extra - counting at the top the times the title was clicked
const heading = document.querySelector('h1');
let clickCount = 0;

heading.addEventListener('click', function() {
    clickCount++;
    heading.innerHTML = 'The Melody Mountain Adventure (Clicked ' + clickCount + ' times!)';
    
    heading.style.color = clickCount % 2 === 0 ? '#7b68a6' : '#e67e22';
});

heading.style.cursor = 'pointer';