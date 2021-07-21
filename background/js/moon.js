
import {sun, timeMoonDown} from './variables.js';


// change MOON TO SUN
function MoonToSun() {
    
    var i = 0;
    var j = 0;
    var moveDown = setInterval(function () {
       
        if (i <= timeMoonDown ) {
            
            
            sun.style.left = Number(sun.style.left.slice(0,-2))  + i/10 + 'px';
            sun.style.top = Number(sun.style.top.slice(0,-2)) + j/10  + 'px';
           
            
            i++;
            j++;
            
        }
        else {
            clearInterval(moveDown);
        }
    }, 10)
}

export {MoonToSun}