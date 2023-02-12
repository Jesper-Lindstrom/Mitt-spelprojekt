window.addEventListener("DOMContentLoaded", main);

/**
 * @toggleMuted function for enabling mute and unmute music on a button.
 */

 function toggleMuted() {
    let sound = document.getElementById('themeSong');
    sound.muted = !sound.muted;
}

/**
 * @function main loads nesessary elements and the first scene. Also makes the button for music working
 */

function main() {
    loadHtmlElements();
    loadStartScene();
    function toggleMuted() {
        let sound = document.getElementById('themeSong');
        sound.muted = !sound.muted;
    }
}  
/**
 * @type {insult} boolean to trigger different death scene
 * @type {chicken} boolean to trigger different death scene  
 * @type {reckless} boolean to trigger different death scene
 * @type {sword} boolean to trigger different death/win scene
 * @type {shield} boolean to trigger different death/win scene
 * @type {luckyCharm} boolean to trigger different death/win scene
 * @type {emptyhanded} boolean to trigger different death scene
 */

// Boolean assigntmens
let insult = (false);
let chicken = (false);
let reckless = (false);
let sword = (false);
let shield = (false);
let luckyCharm = (false);
let emptyhanded =  (false)

/**
 * @type {splash} variable to pair the intro screen with corresponding div in html.
 * @type {intro} variable with settimeout to make the intro fade out. Also used in other instanses. 
 */
const splash = document.querySelector('.splash');

const intro = document.getElementsByClassName('.titleFade');
setTimeout(()=>{
    splash.classList.add('display-none');
    
}, 5000)

/**
 * @type {loadhtmlparagraph} function to build the structure of the program */
let text;
/** @type {HTMLButtonElement} first option in scenarios */
let button1;
/**@type {HTMLButtonElement} second option in scenarios */
let button2; 
/**  @type {HTMLButtonElement} third option in scenarios */
let button3;
/** @type {HTMLButtonElement} fourth option in scenarios*/
let button4;
/**
 * @type {loadHtmlElements} function to set up the basic layout of the game.
 */
function loadHtmlElements() {
    img = document.querySelector('#scenery-div img');
    text = document.getElementById('text');
    button1 = document.getElementById('opt-1');
    button2 = document.getElementById('opt-2');
    button3 = document.getElementById('opt-3');
    button4 = document.getElementById('opt-4');
} 

/**
 * @refreshPage function to reload the page.
 */
function refreshPage() {
    window.location.reload();
}

/**
 * @type {loadStartScene} setting the booleans to false (default) for when you start over. Then starts the scene with options.
 */

