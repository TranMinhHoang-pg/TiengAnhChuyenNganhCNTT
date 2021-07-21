import { scene, stars } from './variables.js'


// background of morning

function sceneMorning() {
    scene.style.background = 'var(--background-morning)';
}

// background of noon
function sceneNoon() {
    scene.style.background = 'var(--background-noon)';
}


// background of night
function sceneNight() {
    scene.style.background = 'var(--dark)';

    // star.

    for (var i = 0; i <= 500; i++) {
        var star = document.createElement('div')
        star.style.position = 'absolute'
        var x = Math.random() * window.innerWidth;
        var y = Math.random() * window.innerHeight;
        var size = Math.random() * 2;
        var durationStar = Math.random() * 5 + 2;
        var delayStar = Math.random() * 2 + 1;

        star.style.left = x + 'px';
        star.style.top = y + 'px';
        star.style.background = '#fff';
        star.style.width = size + 'px';
        star.style.height = size + 'px';
        star.style.borderRadius = '50%';
        star.classList.add('star')
        star.style.animationDelay = delayStar + 's';
        star.style.animationDuration = durationStar + 's';


        stars.appendChild(star);
    }
}

function deleteSceneNight() {
    stars.innerHTML = "";
}

export { sceneMorning, sceneNoon, sceneNight, deleteSceneNight }