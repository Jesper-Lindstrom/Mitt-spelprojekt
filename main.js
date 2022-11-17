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

// const titleFade = document.querySelector('.titleFade')

// document.addEventListener()

function main() {
    loadHtmlElements();
    loadStartScene();
}  

// let *** = true/false to add Boolean futures

const splash = document.querySelector('.splash');

const intro = document.getElementsByClassName('.titleFade');
setTimeout(()=>{
    splash.classList.add('display-none');
}, 6000)






function loadHtmlElements() {
    img = document.querySelector('#scenery-div img');
    text = document.getElementById('text');
    button1 = document.getElementById('opt-1');
    button2 = document.getElementById('opt-2');
    button3 = document.getElementById('opt-3');
    button4 = document.getElementById('opt-4');
} 

function refreshPage() {
    window.location.reload();
}


function loadStartScene() {


    img.src = "./images/Forest.png";

    text.textContent ='(You open up your eyes. The sun is shining..)' + '\n' + 'Why are we in a forest? Wait.. who are we?' + '\n' + '(Does my inner voice count as another .. human? Person? Being?)';
    
    button1.textContent = 'Is this the real life?';
    button1.onclick = loadStartScene2;

     button2.textContent = 'Is this just fantasy?';
    button2.onclick = loadStartScene2;

    button3.textContent = 'Am I mad?';
    button3.onclick = loadStartScene2;

    button4.textContent = 'Go back to sleep';
    button4.onclick = ('click', refreshPage);

    // restart!!! button4

    // itemChoice = textContent
}

function loadStartScene2 () {


    img.src = "./images/Forest.png";

    text.textContent ='Maybe. (Why does it feel like this inner voice isn’t really my own? It does sound like an outer voice. Is that a thing?)';
    
    button1.textContent = 'Wait.. Who said maybe?';
    button1.onclick = loadFoxEncounter;

     button2.textContent = 'Did I say maybe?';
    button2.onclick = loadFoxEncounter;

     button3.textContent = 'Did I dream I said maybe?';
    button3.onclick = loadFoxEncounter;

    button4.textContent = 'Maybe baby?';
    button4.onclick = loadFoxEncounter;

}




// Ska detta vara i funtionen?

// const incomingFox = document.querySelector('.incomingFox.hidden');

//     const foxEncounter = document.getElementsByClassName('.titleFade');
//     setTimeout(()=>{
//         incomingFox.classList.remove("hidden");
//         incomingFox.classList.add('display-none');
//     }, 6000)


function loadFoxEncounter () {



    img.src = "./images/foxencounter.png";

    text.textContent ='*You see a fox. You hear the fox. I mean literally hear, like words. Its talking. Classic dream*';
    
    button1.textContent = 'Hello? Mr fox?.. Ms fox?';
    button1.onclick = loadFollowFox;

     button2.textContent = 'Did you say something?';
    button2.onclick = loadFollowFox;

     button3.textContent = '( Nice.. I am insane.)';
    button3.onclick = loadFollowFox;

    button4.textContent = '(Act .. normal?)';
    button4.onclick = loadFollowFox;

}

function loadFollowFox () {

    img.src = "./images/Followthefox.webp";

    text.textContent ='The fox doesn’t say anything. Classic fox. It begins to walk. Also kinda classic fox. Classic animal at least.';
    
    button1.textContent = 'Follow the fox';
    button1.onclick = loadAttackFox;

     button2.textContent = 'Go the other direction';
    button2.onclick = loadAttackFox;

     button3.textContent = 'Whistle at the fox';
    button3.onclick = loadAttackFox;

    button4.textContent = 'Attack the fox!';
    button4.onclick = loadAttackFox;
}


function loadAttackFox () {
    const div = document.createElement("div");
    const h1 = document.createElement("h1");
    const h2 = document.createElement("h2");

    div.className = "fox-end-div"
    h1.className = "fox-end-h1"
    h1.textContent = '..Did I just get one-shotted by a fox?';

    h2.className ="fox-end-h2"
    h2.textContent = 'click anywhere to start over. ( Pro tip: dont attack the fox next time!)'
    // h1.className = "fox-end-h1";


    document.body.innerHTML = "";
    document.body.append(div, h1, h2);
    
    // setTimeout(function(){
    //     onclick = refreshPage
    // }, 2000);
}



























function loadSwordScene() {
   
    text.textContent = 'So you opted for the sword, eh? Well well. Lets see if it comes in handy!   '

    img.src = "./images/Free gifs gif.gif"

    const itemBox = document.getElementById('loot-items')

    button1.textContent = 'Pick up Sword';
    button1.onclick = loadSwordScene;

; button2.textContent = 'Pick up Shield';
    button2.onclick = loadShieldScene;

;  button3.textContent = 'Pick up Lucky Charm';
    button3.onclick = loadLuckyCharmScene;

    button4.textContent = 'Go on emptyhanded';
    button4.onclick = loadEmptyHandedScene;
  
    
}
function loadShieldScene() {

    text.textContent = 'A shield? Anyone in their right mind would probably pick a sword before a shield. I guess you are not in your right mind'
    
    button1.textContent = 'Pick up Sword';
    button1.onclick = loadSwordScene;

; button2.textContent = 'Pick up Shield';
    button2.onclick = loadShieldScene;

;  button3.textContent = 'Pick up Lucky Charm';
    button3.onclick = loadLuckyCharmScene;

    button4.textContent = 'Go on emptyhanded';
    button4.onclick = loadEmptyHandedScene;
}
function loadLuckyCharmScene() {
    
    text.textContent = 'Who needs a sword when your enemies wont ever be able to hit you? Maybe you dont even meet your enemies? WHO KNOWS?'

    button1.textContent = 'Pick up Sword';
    button1.onclick = loadSwordScene;

; button2.textContent = 'Pick up Shield';
    button2.onclick = loadShieldScene;

;  button3.textContent = 'Pick up Lucky Charm';
    button3.onclick = loadLuckyCharmScene;

    button4.textContent = 'Go on emptyhanded';
    button4.onclick = loadEmptyHandedScene;
    
}
function loadEmptyHandedScene() {
    
    text.textContent = 'You are mad. What if you encounter a dragon? Are you going to slap it?'

    button1.textContent = 'Pick up Sword';
    button1.onclick = loadSwordScene;

; button2.textContent = 'Pick up Shield';
    button2.onclick = loadShieldScene;

;  button3.textContent = 'Pick up Lucky Charm';
    button3.onclick = loadLuckyCharmScene;

    button4.textContent = 'Go on emptyhanded';
    button4.onclick = loadEmptyHandedScene;
}