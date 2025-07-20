const audio = document.getElementById('meuAudio');

audio.volume = 0.01; // Define o volume para 1%

const detailsbutton = document.querySelector('.details-button');
const details = document.querySelector('.details');
const initialcontainer = document.querySelector('.container');
const returnButton = document.querySelector('.returnbutton');
const volumebutton = document.querySelector('.audiocontrol');

detailsbutton.addEventListener('click', () => {
    initialcontainer.style.display = 'none';
    details.style.display = 'block';
});

returnButton.addEventListener('click', () => {
    details.style.display = 'none';
    initialcontainer.style.display = 'block';
});

volumebutton.addEventListener('click', () => {
    if (audio.volume === 0) {
        audio.volume = 0.01; // Define o volume para 1%
        volumebutton.classList.remove('bi-volume-down-fill');
        volumebutton.classList.add('bi-volume-mute-fill');
    } else {
        audio.volume = 0; // Mute
        volumebutton.classList.remove('bi-volume-mute-fill');
        volumebutton.classList.add('bi-volume-down-fill');
    }
});