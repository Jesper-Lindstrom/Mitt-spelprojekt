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

let myAudio = document.getElementById('themeSong')
myAudio.play()

function toggleMuted() {
    var sound = document.getElementById('themeSong');
    sound.muted = !sound.muted;

}

function main() {
    loadHtmlElements();
    loadStartScene();
}  

//Boolean assignments

let insult = Boolean(false);

let chicken = Boolean(false);

// let *** = true/false to add Boolean futures

// const splash = document.querySelector('.splash');

// const intro = document.getElementsByClassName('.titleFade');
// setTimeout(()=>{
//     splash.classList.add('display-none');
// }, 6000)


  

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

    insult = Boolean(false);

    chicken = Boolean(false);

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

    text.textContent ='*You see a fox.*  *You hear the fox.* I mean literally hear, like words. Its talking. Classic dream';
    
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

    text.textContent ='The fox doesn’t say anything more. Classic fox. (Was it just my imagination?) It begins to walk away. Also kinda classic fox. Classic animal at least.';
    
    button1.textContent = 'Follow the fox';
    button1.onclick = loadFollowFox2;

    button2.textContent = 'Ignore the fox walk forward';
    button2.onclick = loadIgnoreFox;

    button3.textContent = 'Whistle at the fox';
    button3.onclick = loadWhistleFail;

    button4.textContent = 'Attack the fox!';
    button4.onclick = loadAttackFox;

    
}


function loadAttackFox () {
    const div = document.createElement("div");
    const h1 = document.createElement("h1");
    const h2 = document.createElement("h2");

    div.className = "fox-end-div"
   
    document.body.innerHTML = "";
    document.body.append(div, h1, h2);
    
    setTimeout(function(){
    h1.className = "fox-end-h1";
    

    h2.className ="fox-end-h2";
    
    if (chicken === true && insult === false  )   { 
        h1.textContent = '"There is no espace from the reaper"';
        h2.textContent = 'click anywhere to start over.\n(Beginner tip: dont be a coward!)'
        setTimeout(function(){
            onclick = refreshPage
        }, 2000);

    } else if (insult === false  )   { 
        h1.textContent = '"..Did I just get one-shotted by a fox?"';
        h2.textContent = 'click anywhere to start over.\n(Beginner tip: dont attack the fox!)'
        
        setTimeout(function(){
            onclick = refreshPage
        }, 2000);
    } else { 
        h1.textContent = '..Did I just get one-shotted by a worm fox? fox worm?';
        h2.textContent = 'click anywhere to start over.\n(Pro tip: dont insult creatures you have never seen!)'
        
        setTimeout(function(){
            onclick = refreshPage
        }, 2000);
    }

    }, 2000);
    
}


function loadFollowFox2 () {
    
    img.src = "./images/Day scene.png"

    text.textContent = 'The fox is heading for a stream. You just noticed that you may be dying from thirst. "Is this fox my guardian angel?" (I mean, I am REALLY thirsty right now.)';

    button1.textContent = '"Are you my guardian angel?"';
    button1.onclick = loadShapeshifterScene;

    button2.textContent = 'Drink water';
    button2.onclick = loadShapeshifterScene2;

    button3.textContent = 'Attack the fox!';
    button3.onclick = loadAttackFox;

    button4.style.display ='none';
}

function loadWhistleFail () {

    img.src = "./images/Followthefox.webp";    

    text.textContent = '*frpfpfpgg* .. *ffrrrrugpf* .. I cant whistle. My mouth is to dry. I need water.\nThe fox continues to walk. I better run if I want to catch up. (Why am I so obsessed with an animal?)'

    button1.textContent = 'Follow the fox';
    button1.onclick = loadFollowFox2;

    button2.textContent = 'Ignore the fox walk forward';
    button2.onclick = loadIgnoreFox;

    button3.style.display ='none';
    button4.style.display ='none';

}

function loadIgnoreFox () {
     
    
    img.src = "./images/Day scene.png"
    
    text.textContent = 'The fox is gone. You decide to continue walking and soon you see a stream of water. Good for you!';
    
    button1.textContent = 'I miss the fox..';
    button1.onclick = loadShapeshifterScene2;
    
    button2.textContent = 'Drink water';
    button2.onclick = loadShapeshifterScene2;
       
      
    button3.style.display ='none';
    button4.style.display ='none';
}



//övergång? a familiar sound.. like when something appears out of nowhere in.. cartoons?

function loadShapeshifterScene () {

    img.src = "./images/foxencounter.png"

    text.textContent = '"No I am not"\n(Did.. did it talk? I am loosing my mind. Cant the fox just stay quiet so I can stay sane?)';

    button1.textContent = 'Embrace your madness. Close your eyes.';
    button1.onclick = loadShapeshifterScene3;

    button2.textContent = 'What are you?';
    button2.onclick = loadShapehifterIdentityRevealed2;

    button3.style.display ='block';
    button3.textContent = 'Just drink water';
    button3.onclick = loadShapeshifterScene2;

    button4.style.display ='block';
    button4.textContent = 'Attack the fox!';
    button4.onclick = loadAttackFox;

 }

// Övergång magiskt ljud
 
function loadShapeshifterScene2 () {

    img.src = "./images/Wurm.png"

    text.textContent = 'You freeze. Before you stands a creature you never seen. It has a dark and sinister aura.';

    button1.textContent = 'I knew it! (did I?)';
    button1.onclick = loadShapehifterIdentityRevealed2;

    button2.textContent = 'Is that a ..worm?';
    button2.onclick = loadAttackFox, insult = Boolean(true);


    button3.style.display = 'block'
    button3.textContent = 'What are you?';
    button3.onclick = loadShapehifterIdentityRevealed;


 }
function loadShapeshifterScene3 () {

    img.src = "./images/Wurm.png"

    text.textContent = 'You open your eyes. The fox is gone and infront of you is a creauture you would describe as a..';

    button1.textContent = 'Snake?';
    button1.onclick = loadShapehifterIdentityRevealed;

    button2.textContent = 'Worm?';
    button2.onclick = loadAttackFox, insult = Boolean(true);
    

    button3.style.display ='block';
    button3.textContent = 'Attack the "fox!"';
    button3.onclick = loadAttackFox;

    button4.style.display ='none';
   


 }

function loadShapehifterIdentityRevealed () {
    text.textContent = '"You fool. I am whatever I want. I am a shapeshifter. And the only reason you are alive is because I need you to do something for me" ';

    button1.textContent = 'Yes Master! Anyting for you.';
    button1.onclick = loadShapehifterDemands;

    button2.textContent = 'So why pick a worm?';
    button2.onclick = loadAttackFox, insult = Boolean(true);
    
    button3.textContent = 'Attack the "fox!"';
    button3.onclick = loadAttackFox;

    button4.style.display='block';
    button4.textContent = 'Bow your head. (scream inside)';
    button4.onclick = loadShapehifterDemands;

}


function loadShapehifterIdentityRevealed2 () {
    text.textContent = '"You knew nothing. You are a fool. And I am whatever I want. I am a shapeshifter. And the only reason you are alive is because I need you to do something for me"';
}

    button1.textContent = 'Yes Master! Anyting for you.';
    button1.onclick = loadShapehifterDemands;

    button2.textContent = 'So why pick a worm?';
    button2.onclick = loadAttackFox, insult = Boolean(true);

    button3.textContent = 'Attack the "fox!"';
    button3.onclick = loadAttackFox;

    button4.textContent = 'Bow your head';
    button4.onclick = loadShapehifterDemands;


    function loadShapehifterDemands () {
    text.textContent = 'You are going to get into a cave just ahead and slay the demon that resides there.';

    button1.textContent = 'Why me? Why cant you do it?';
    button1.onclick = loadDemandAnswer;

    button2.textContent = 'Yes Master! (scream inside)';
    button2.onclick = loadLoyalSevant;

    button3.style.display ='none';
    button4.style.display ='none';

}

function loadLoyalSevant () {
    img.src = "./images/Owl.webp"

    text.textContent = "*The former fox turn into an Owl and sits on the tree nearby* You are really a fool. I won't let you go emptyhanded. The sun is setting. Pick a weapon of choice. ";

    }

function loadDemandAnswer () {
    img.src = "./images/Reaper.webp"

    text.textContent = "*The Shapeshifter turns into a dark figure*\nBecause I will end your life if you dont. I won't let you go emptyhanded. The sun is setting. Pick a weapon of choice"
    
    button1.textContent = 'Yes Master! (scream inside)';
    button1.onclick = loadPickLoot;

    button2.textContent = '(I miss the fox)';
    button2.onclick = loadPickLoot;

    button3.style.display ='block'
    button3.textContent = 'RUUUUN';
    button3.onclick = loadAttackFox, chicken = Boolean(true) ;


}


function loadPickLoot () {
    img.src = "./images/Free gifs gif.gif"

    text.textContent = "I am no slayer, but theese weapons should come in handy! (Maybe I get to live at least 15 more minutes)"
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