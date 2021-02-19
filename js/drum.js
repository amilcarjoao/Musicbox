let keys = document.querySelectorAll('.key');

document.addEventListener('keydown', function (a) {
    let audio = document.querySelector(`audio[data-key="${a.keyCode}"]`);
     let keys = document.querySelector(`div[data-key="${a.keyCode}"]`);

    audio.play();
    keys.classList.add('playing');
});

document.addEventListener('keyup', function (a) {
    let audio = document.querySelector(`audio[data-key="${a.keyCode}"]`);
     let keys = document.querySelector(`div[data-key="${a.keyCode}"]`);

    audio.play();
    keys.classList.add('pause');
});
