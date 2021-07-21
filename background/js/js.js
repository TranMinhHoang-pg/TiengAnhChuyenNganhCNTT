import { sun, scene, countSecondFromSunToMoon } from './variables.js';
import { sunToMoon, resetSun, addBlinkSun } from './sun.js';
import { MoonToSun } from './moon.js';
import { sceneMorning, sceneNoon, sceneNight, deleteSceneNight } from './scene.js'




// WHEN CLICK ON THE SUN OR THE MOON
sun.addEventListener('click', function() {
    var t = countSecondFromSunToMoon() * 1000;

    if (!scene.classList.contains('dark')) {

        sunToMoon();
        addBlinkSun();

        //add dark after t/1.5s
        setTimeout(() => {
            scene.classList.add('dark')
            sceneNight();
        }, t / 1.5);
        //add background dark
        setTimeout(() => {
                sceneNoon();
            },
            t / 3);
    } else {
        MoonToSun();
        deleteSceneNight();
        setTimeout(() => {
            sceneMorning();
            scene.classList.remove('dark')
            resetSun();
        }, 2000);
    }

})