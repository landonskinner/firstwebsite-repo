const introInput = document.getElementById('intro-text');
const introImage = document.getElementById('self-photo');
const introTitle = document.getElementById('about-me');

function enterAlert() {
    introInput.style.border = '8px solid #A6EDF8';
    introImage.style.backgroundColor.replace('white', '');
    introImage.style.backgroundColor = '#A6EDF8';
    introTitle.style.borderBottomStyle = 'dashed';
    introTitle.style.borderBottomColor = '#A6EDF8';
}

introInput.addEventListener('mouseenter', enterAlert);

function exitAlert() {
    introInput.style.border = '8px solid white';
    introImage.style.backgroundColor.replace('#A6EDF8', '');
    introImage.style.backgroundColor = 'white';
}

introInput.addEventListener('mouseout', exitAlert);