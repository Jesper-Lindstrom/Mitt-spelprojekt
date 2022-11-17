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
    loadHtmlElements();
    loadStartScene();
}

// let *** = true/false to add Boolean futures

function loadHtmlElements() {
    img = document.querySelector('#scenery-div img');
    text = document.getElementById('text');
    button1 = document.getElementById('opt-1');
    button2 = document.getElementById('opt-2');
    button3 = document.getElementById('opt-3');
    button4 = document.getElementById('opt-4');
} 







function loadStartScene() {
    // document.body.innerHTML = "";
   
    // const button4 = document.createElement('button')

    img.src = "./images/Start scene.webp";

    text.textContent ='Go on an adventure!';
    
    button1.textContent = 'Pick up Sword';
    button1.addEventListener('click', loadSwordScene)

    button2.textContent = 'Pick up Shield';
    button2.addEventListener('click', loadShieldScene)

    button3.textContent = 'Pick up Lucky Charm';
    button3.addEventListener('click', loadLuckyCharmScene)

    button4.textContent = 'Go on emptyhanded';
    button4.addEventListener('click', loadEmptyHandedScene)

    // itemChoice = textContent
}




function loadSwordScene() {
   
    text.textContent = 'So you opted for the sword, eh? Well well. Lets see if it comes in handy!   '

    img.src = "./images/Free gifs gif.gif"

    
    

    const itemBox = document.getElementById('loot-items')

    button1.textContent = 'Pick up Sword';
    button1.addEventListener('click', loadSwordScene)

    button2.textContent = 'Pick up Shield';
    button2.addEventListener('click', loadShieldScene)

    button3.textContent = 'Pick up Lucky Charm';
    button3.addEventListener('click', loadLuckyCharmScene)

    button4.textContent = 'Go on emptyhanded';
    button4.addEventListener('click', loadEmptyHandedScene)
  
    
}
function loadShieldScene() {

    text.textContent = 'A shield? Anyone in their right mind would probably pick a sword before a shield. I guess you are not in your right mind'
    
    button1.textContent = 'Pick up Sword';
    button1.addEventListener('click', loadSwordScene)

    button2.textContent = 'Pick up Shield';
    button2.addEventListener('click', loadShieldScene)

    button3.textContent = 'Pick up Lucky Charm';
    button3.addEventListener('click', loadLuckyCharmScene)

    button4.textContent = 'Go on emptyhanded';
    button4.addEventListener('click', loadEmptyHandedScene)
}
function loadLuckyCharmScene() {
    
    text.textContent = 'Who needs a sword when your enemies wont ever be able to hit you? Maybe you dont even meet your enemies? WHO KNOWS?'

    button1.textContent = 'Pick up Sword';
    button1.addEventListener('click', loadSwordScene)

    button2.textContent = 'Pick up Shield';
    button2.addEventListener('click', loadShieldScene)

    button3.textContent = 'Pick up Lucky Charm';
    button3.addEventListener('click', loadLuckyCharmScene)

    button4.textContent = 'Go on emptyhanded';
    button4.addEventListener('click', loadEmptyHandedScene)
    
}
function loadEmptyHandedScene() {
    
    text.textContent = 'You are mad. What if you encounter a dragon? Are you going to slap it?'

    button1.textContent = 'Pick up Sword';
    button1.addEventListener('click', loadSwordScene)

    button2.textContent = 'Pick up Shield';
    button2.addEventListener('click', loadShieldScene)

    button3.textContent = 'Pick up Lucky Charm';
    button3.addEventListener('click', loadLuckyCharmScene)

    button4.textContent = 'Go on emptyhanded';
    button4.addEventListener('click', loadEmptyHandedScene)
}