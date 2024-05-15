let dino;
let score = 0;
cross = true;
let audio = new Audio('music.mp3');
 let audiogo = new Audio('gameover.mp3');
setTimeout(() => {
    audio.play();
}, 1000);
document.onkeydown = function (e) {
    // console.log("Key code is : ", e.keyCode);
    if (e.keyCode == 38) {
        dino = document.querySelector('.dino');
        dino.classList.add('animateDino');
        setTimeout(() => {
            dino.classList.remove('animateDino');
        }, 700);
    }
    if (e.keyCode == 13) {
        funcb()
    }
    if (e.keyCode == 39) {
        dino = document.querySelector('.dino');
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = dinoX + 112 + "px";
    }
    if (e.keyCode == 37) {
        dino = document.querySelector('.dino');
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = (dinoX - 112) + "px";
    }
}
setInterval(() => {
    dino = document.querySelector('.dino');
    let gameOver = document.querySelector('.gameOver');
    obstacle = document.querySelector('.obstacle');

    dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue('bottom'));

    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('bottom'));

    offsetX = Math.abs(dx - ox);
    offsetY = Math.abs(dy - oy);
    // console.log(offsetX, offsetY);
    if (offsetX < 93 && offsetY < 52) {
        gameOver.style.visibility = 'visible';
        obstacle.classList.add("paused");
        audiogo.play();
        setTimeout(() => {
            audiogo.pause();
            audio.pause();
        }, 1000);
        var element = document.querySelector(".dino");
        element.classList.remove("dino");
    } else if(offsetX<145){
        score += 1;
        updateScore(score)
    }
}, 100);
setInterval(() => {
    ol = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    if (ol<1) {
        // console.log(ox);
        anidure = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
        newDure = anidure - 0.05;
        if (newDure<=2) {
            newDure=2;  
        }
        obstacle.style.animationDuration = newDure + 's';
        console.log(newDure);
         // console.log(obstacle.style.animationDuration);
    }
}, 100);
function updateScore(score) {
    let scoreCount = document.getElementById('scoreCount');
    scoreCount.innerHTML = "Your Score: " + score;
}
function funcb() {
    location.reload();
    // console.log("hwllo h");
}
