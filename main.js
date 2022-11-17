window.addEventListener("DOMContentLoaded", main);


/** @type {HTMLParagraphElement} p-tag to display scene scenario*/
let text;
/**@type {HTMLButtonElement} first option in scenarios */
let button1; 
/**@type {HTMLButtonElement} second option in scenarios */
let button2; 
/**@type {HTMLButtonElement} third option in scenarios */
let button3;
/**@type {HTMLButtonElement} fourth option in scenarios */
let button4;

function main() {
    loadStartScene();
    loadHtmlElements();
}

// let *** = true/false to add Boolean futures

function loadHtmlElements() {
    text = document.getElementById('text');
    button1 = document.getElementById('opt-1');
    button2 = document.getElementById('opt-2');
    button3 = document.getElementById('opt-3');
    button4 = document.getElementById('opt-4');
} 

function loadStartScene() {
    // document.body.innerHTML = "";
    const text = document.getElementById('text');
    const button1 = document.getElementById('opt-1');
    const button2 = document.getElementById('opt-2');
    const button3 = document.getElementById('opt-3');
    const button4 = document.getElementById('opt-4');
    // const button4 = document.createElement('button')

    text.textContent ="Go on an adventure!";
    
    button1.textContent = 'Pick up Sword';
    button1.addEventListener('click', loadSwordScene)

    button2.textContent = 'Pick up Shield';
    button2.addEventListener('click', loadSwordScene)

    button3.textContent = 'Pick up Lucky Charm';
    button3.addEventListener('click', loadSwordScene)

    button4.textContent = 'Go on emptyhanded';
    button4.addEventListener('click', loadEmptyHandedScene)

    // itemChoice = textContent
}

function loadSwordScene() {
    const text = document.getElementById('text');
    const button1 = document.getElementById('opt-1');
    const button2 = document.getElementById('opt-2');
    const button3 = document.getElementById('opt-3');
    const button4 = document.getElementById('opt-4');

    text.textContent = 'So you opted for the sword, eh? Well well. Lets see if it comes in handy!'
}
function loadShieldScene() {
    const text = document.getElementById('text');
    const button1 = document.getElementById('opt-1');
    const button2 = document.getElementById('opt-2');
    const button3 = document.getElementById('opt-3');
    const button4 = document.getElementById('opt-4');

    text.textContent = 'So you opted for the sword, eh? Well well. Lets see if it comes in handy!'
}
function loadLuckyCharmScene() {
    const text = document.getElementById('text');
    const button1 = document.getElementById('opt-1');
    const button2 = document.getElementById('opt-2');
    const button3 = document.getElementById('opt-3');
    const button4 = document.getElementById('opt-4');

    text.textContent = 'So you opted for the sword, eh? Well well. Lets see if it comes in handy!'
}
function loadEmptyHandedScene() {
    const text = document.getElementById('text');
    const button1 = document.getElementById('opt-1');
    const button2 = document.getElementById('opt-2');
    const button3 = document.getElementById('opt-3');
    const button4 = document.getElementById('opt-4');

    text.textContent = 'So you opted for the sword, eh? Well well. Lets see if it comes in handy!'
}