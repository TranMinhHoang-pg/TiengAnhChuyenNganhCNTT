

import {sun,countSecondFromSunToMoon} from './variables.js';
// change SUN TO MOON

function sunToMoon() {
    let x = window.innerWidth * 0.8;


    var i = 0;
    var j = 0;
    var moveRight = setInterval(function () {
        
        if (i <= x) {
            sun.style.left = window.innerWidth * 0.05 + i + 'px';
            sun.style.top = window.innerHeight * 0.05 + j / 6 + 'px';
           
            
            i++;
            j++;
            
        }
        else {
            clearInterval(moveRight);
        }
    }, 1)
}

// set the sun on the left
function resetSun() {
    sun.style.left = window.innerWidth * 0.05 + 'px';   
    sun.style.top = window.innerHeight * 0.05  + 'px';
    sun.style.animation = `toSun 2s linear`;
    
}

// sun blink blink 
function addBlinkSun() {
    sun.style.animation = `toMoon ${countSecondFromSunToMoon()}s linear`;
}



export {sunToMoon, resetSun, addBlinkSun};