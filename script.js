const subtitle = document.getElementById('header-subtitle');
subtitle.addEventListener('click', function() {
    alert('okay so maybe not yet... but I will be soon. (:')
})







const introInput = document.getElementById('intro-text');
const introImage = document.getElementById('self-photo');

function enterAlert() {
    introInput.style.border = '8px solid #A6EDF8';
    introImage.style.backgroundColor.replace('white', '');
    introImage.style.backgroundColor = '#A6EDF8';
}

introInput.addEventListener('mouseenter', enterAlert);

function exitAlert() {
    introInput.style.border = '8px solid white';
    introImage.style.backgroundColor.replace('#A6EDF8', '');
    introImage.style.backgroundColor = 'white';
}

introInput.addEventListener('mouseout', exitAlert);

const interestInput = document.getElementById('interest-text');

function enterAlert1() {
    interestInput.style.border = '8px solid #477665';
}

interestInput.addEventListener('mouseenter', enterAlert1);

function exitAlert1() {
    interestInput.style.border = '8px solid white';
}

interestInput.addEventListener('mouseout', exitAlert1);

const photoInput1 = document.getElementById('photo1');
const photoInput2 = document.getElementById('photo2');
const photoInput3 = document.getElementById('photo3');
const photoInput4 = document.getElementById('photo4');
const photoInput5 = document.getElementById('photo5');
const photoInput6 = document.getElementById('photo6');

photoInput1.addEventListener('mouseenter', function() {
    photoInput1.style.border = '8px solid #A6EDF8';
});
photoInput1.addEventListener('mouseout', function() {
    photoInput1.style.border.replace('8px solid #A6EDF8','');
    photoInput1.style.border = '8px solid white';
});

photoInput2.addEventListener('mouseenter', function() {
    photoInput2.style.border = '8px solid #A6EDF8';
});
photoInput2.addEventListener('mouseout', function() {
    photoInput2.style.border.replace('8px solid #A6EDF8','');
    photoInput2.style.border = '8px solid white';
});

photoInput3.addEventListener('mouseenter', function() {
    photoInput3.style.border = '8px solid #A6EDF8';
});
photoInput3.addEventListener('mouseout', function() {
    photoInput3.style.border.replace('8px solid #A6EDF8','');
    photoInput3.style.border = '8px solid white';
});

photoInput4.addEventListener('mouseenter', function() {
    photoInput4.style.border = '8px solid #A6EDF8';
});
photoInput4.addEventListener('mouseout', function() {
    photoInput4.style.border.replace('8px solid #A6EDF8','');
    photoInput4.style.border = '8px solid white';
});

photoInput5.addEventListener('mouseenter', function() {
    photoInput5.style.border = '8px solid #A6EDF8';
});
photoInput5.addEventListener('mouseout', function() {
    photoInput5.style.border.replace('8px solid #A6EDF8','');
    photoInput5.style.border = '8px solid white';
});

photoInput6.addEventListener('mouseenter', function() {
    photoInput6.style.border = '8px solid #A6EDF8';
});
photoInput6.addEventListener('mouseout', function() {
    photoInput6.style.border.replace('8px solid #A6EDF8','');
    photoInput6.style.border = '8px solid white';
});
