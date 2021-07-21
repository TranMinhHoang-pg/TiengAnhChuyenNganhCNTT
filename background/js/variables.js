let sun = document.querySelector('.sun')

let scene = document.querySelector('.scene')

let stars = document.querySelector('.stars')

function countSecondFromSunToMoon() {
    var v = 1000;
    var s = window.innerWidth * 0.75;
    var t = s * 4.4 / v;
    return t;
}

export const timeMoonDown = 100;
export { sun, scene, countSecondFromSunToMoon, stars };