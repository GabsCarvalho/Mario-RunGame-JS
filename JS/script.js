let score = 0;
let highScore = localStorage.getItem("highScore") || 0;
let scoreInterval;

const mario = document.querySelector('.Mario');
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector('.clouds');
const gameover = document.querySelector('.container');
const resetButton = document.querySelector('.restart');
const scoreDisplay = document.getElementById('score');
const highScoreDisplay = document.getElementById('high-score');
highScoreDisplay.innerText = `Recorde: ${highScore}`;
const resetscore = document.querySelector('.resetscore');
const audio = document.getElementById('meuAudio');
const volumebutton = document.querySelector('.audiocontrol');
const audioVolume = localStorage.getItem("audioVolume") || 0.01; // Pega o volume salvo ou define como 1%

const jump = () => {
    mario.classList.add('jump');
    
    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500)
}

const updateScore = () => {
    score += 1;
    scoreDisplay.innerText = `Score: ${score}`;
}

scoreInterval = setInterval(updateScore, 200); // atualiza o score a cada 100ms

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = window.getComputedStyle(mario).bottom.replace('px', '');
    const cloudsPosition = clouds.offsetLeft;

    if(pipePosition <= 150 && pipePosition > 0 && marioPosition < 100) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        clouds.style.animation = 'none';
        clouds.style.left = `${cloudsPosition}px`;

        mario.src = 'IMAGEM/game-over.png';
        mario.style.width = '75px';
        mario.style.margin = '10px';

        clearInterval(loop);

        clearInterval(scoreInterval); // para de contar score

        if (score > highScore) {
            highScore = score;
            localStorage.setItem("highScore", highScore);
            highScoreDisplay.innerText = `Recorde: ${highScore}`;
        }


        gameover.style.display = 'Block';

    }

},10);

resetButton.addEventListener('click', () => {
    window.location.href = 'game page.html';
});

resetscore.addEventListener('click', () => {
    highScore = 0;
    highScoreDisplay.innerText = `Recorde: ${highScore}`;
    localStorage.removeItem("highScore");
});

document.addEventListener('keydown', jump) ||
document.addEventListener('click', jump);

audio.volume = audioVolume; // Define o volume para 1%

volumebutton.addEventListener('click', () => {
    if (audio.volume === 0) {
        audio.volume = 0.01; // Define o volume para 1%
        volumebutton.classList.remove('bi-volume-mute-fill');
        volumebutton.classList.add('bi-volume-down-fill');
        localStorage.setItem("audioVolume", 0.01);
    } else {
        audio.volume = 0; // Mute
        volumebutton.classList.remove('bi-volume-down-fill');
        volumebutton.classList.add('bi-volume-mute-fill');
        localStorage.setItem("audioVolume", 0);
    }
});