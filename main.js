window.addEventListener("DOMContentLoaded", main);

/**
 * @toggleMuted function for enabling mute and unmute music on a button.
 */

 function toggleMuted() {
    var sound = document.getElementById('themeSong');
    sound.muted = !sound.muted;
}

/**
 * @function main loads nesessary elements and the first scene. Also makes the button for music working
 */

function main() {
    loadHtmlElements();
    loadStartScene();
    function toggleMuted() {
        var sound = document.getElementById('themeSong');
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

function loadStartScene() {
    let insult = (false);
    let chicken = (false);
    let reckless = (false);
    let sword = (false);
    let shield = (false);
    let luckyCharm = (false);
    let emptyhanded =  (false)

    img.src = "./images/Forest.png";

    text.textContent ='*You open up your eyes* The sun is shining. why are we in a forest? Wait.. who are we? (Does my inner voice count as another .. human? Person? Being?)';
    
    button1.textContent = 'Is this the real life?';
    button1.onclick = loadStartScene2;

    button2.textContent = 'Is this just fantasy?';
    button2.onclick = loadStartScene2;

    button3.textContent = 'Am I mad?';
    button3.onclick = loadStartScene2;

    button4.textContent = 'Go back to sleep';
    button4.onclick = refreshPage;
}

/**
 * @type {loadStartScene2} scene with options. Placed the function to play music here to avoid the error message when trying to include autoplaying songs at the start page.
 */

function loadStartScene2 () {

   
    let myAudio = document.getElementById('themeSong')
    myAudio.play()

    img.src = "./images/Forest.png";
    text.textContent = "Maybe. (Why does it feel like this inner voice isn't really my own? It does sound like an outer voice. Is that a thing?)"
    
    button1.textContent = 'Wait.. Who said maybe?';
    button1.onclick = loadFoxEncounterScene;

    button2.textContent = 'Did I say maybe?';
    button2.onclick = loadFoxEncounterScene;

    button3.textContent = 'Did I dream I said maybe?';
    button3.onclick = loadFoxEncounterScene;

    button4.textContent = 'Maybe baby?';
    button4.onclick = loadFoxEncounterScene;
}


/**
 * @type {loadFoxEncounterScene} scene with options
 */
function loadFoxEncounterScene () {
    img.src = "./images/foxencounter.png";

    text.textContent ='*You see a fox.*  *You hear the fox.* I mean literally hear, like words. Its talking. Classic dream.';
    
    button1.textContent = 'Hello? Mr fox?.. Ms fox?';
    button1.onclick = loadFollowFox;

    button2.textContent = 'Did you say something?';
    button2.onclick = loadFollowFox;

    button3.textContent = '( Nice.. I am insane.)';
    button3.onclick = loadFollowFox;

    button4.textContent = '(Act .. normal?)';
    button4.onclick = loadFollowFox;
}

/**
 * @type {loadFollowFox} scene with options
 */
function loadFollowFox () {
    img.src = "./images/Followthefox.webp";

    text.textContent ="The fox doesn’t say anything more. Classic fox. (Was it just my imagination?) It begins to walk away. Also kinda classic fox. Classic animal at least.";
    
    button1.textContent = 'Follow the fox';
    button1.onclick = loadFollowFox2;

    button2.textContent = 'Ignore the fox walk forward';
    button2.onclick = loadIgnoreFox;

    button3.textContent = 'Whistle at the fox';
    button3.onclick = loadWhistleFail;

    button4.textContent = 'Attack the fox!';
    button4.onclick = loadDeath;    
}

/**
 * @type {loadDeath} different scenarios where you died. If statements to view different text on a black screen.
 */
function loadDeath () {
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
        h1.textContent = '"There is no espace from the Shapeshifter. You got a swift death"';
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

    } else if (reckless === true  )   { 
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


/**
 * @type {loadFollowFox2} scene with options
 */
function loadFollowFox2 () {
    img.src = "./images/Day scene.png"

    text.textContent = 'The fox is heading for a stream. You just noticed that you may be dying from thirst. "Is this fox my guardian angel?" (I mean, I am REALLY thirsty right now.)';

    button1.textContent = '"Are you my guardian angel?"';
    button1.onclick = loadShapeshifterScene;

    button2.textContent = 'Drink water';
    button2.onclick = loadShapeshifterScene2;

    button3.style.display ='block'
    button3.textContent = 'Attack the fox!';
    button3.onclick = loadDeath;

    button4.style.display ='none';
}

/**
 * @type {loadWhistleFail} scene with options
 */

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

/**
 * @type {loadIgnoreFox} scene with options
 */

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


/**
 * @type {loadShapeshifterScene} scene with options
 */


function loadShapeshifterScene () {
    img.src = "./images/Wurm.png.png"

    text.textContent = '"No I am not"\n(Did.. did it talk? I am loosing my mind. Cant the fox just stay quiet so I can stay sane?)';

    button1.textContent = 'Embrace your madness. Close your eyes.';
    button1.onclick = loadShapeshifterScene3;

    button2.textContent = 'What are you?';
    button2.onclick = loadShapehifterIdentityRevealed2Scene;

    button3.style.display ='block';
    button3.textContent = 'Just drink water';
    button3.onclick = loadShapeshifterScene2;

    button4.style.display ='block';
    button4.textContent = 'Attack the fox!';
    button4.onclick = loadDeath;
 }

 
/** 
 * @type {loadShapeshifterScene2} scene with options. 
 */

function loadShapeshifterScene2 () {

    img.src = "./images/Wurm.png"

    text.textContent = 'You freeze. Something appeared out of nowhere. Before you stands a creature you never seen. It has a dark and sinister aura.';

    button1.textContent = 'I knew it! (did I?)';
    button1.onclick = loadShapehifterIdentityRevealed2Scene;

    button2.textContent = 'Is that a ..worm?';
    button2.onclick = loadDeath, insult = (true);

    button3.style.display = 'block'
    button3.textContent = 'What are you?';
    button3.onclick = loadShapehifterIdentityRevealed;
}

/**
 * @type {loadShapeshifterScene3} scene with options
 */
function loadShapeshifterScene3 () {

    img.src = "./images/Wurm.png"

    text.textContent = 'You open your eyes. The fox is gone and infront of you is a creauture you would describe as a..';

    button1.textContent = 'Snake?';
    button1.onclick = loadShapehifterIdentityRevealed;

    button2.textContent = 'Worm?';
    button2.onclick = loadDeath, insult = (true);

    button3.style.display ='block';
    button3.textContent = 'Attack the "fox!"';
    button3.onclick = loadDeath;

    button4.style.display ='none';
 }
/**
 * @type {loadShapehifterIdentityRevealed} scene with options
 */
function loadShapehifterIdentityRevealed () {
    text.textContent = '"You fool. I am whatever I want. I am a shapeshifter. And the only reason you are alive is because I need you to do something for me" ';

    button1.textContent = 'Yes Master! Anyting for you.';
    button1.onclick = loadShapehifterDemandsScene;

    button2.textContent = 'So why pick a worm?';
    button2.onclick = loadDeath, insult = (true);
    
    button3.textContent = 'Attack the "fox!"';
    button3.onclick = loadDeath;

    button4.style.display='block';
    button4.textContent = 'Bow your head. (scream inside)';
    button4.onclick = loadShapehifterDemandsScene;
}

/**
 * @type {loadShapehifterIdentityRevealed2Scene} scene with options
 */
function loadShapehifterIdentityRevealed2Scene () {
    img.src ="./images/Wurm.png"

    text.textContent = '"You knew nothing. You are a fool. And I am whatever I want. I am a shapeshifter. And the only reason you are alive is because I need you to do something for me"';

    button1.textContent = 'Yes Master! Anyting for you.';
    button1.onclick = loadShapehifterDemandsScene;

    button2.textContent = 'So why pick a worm?';
    button2.onclick = loadDeath, insult = (true);

    button3.textContent = 'Attack the "fox!"';
    button3.onclick = loadDeath;

    button4.textContent = 'Bow your head';
    button4.onclick = loadShapehifterDemandsScene;
}

/**
 * @type {loadShapehifterDemandsScene} scene with options
 */
    function loadShapehifterDemandsScene () {
    text.textContent = 'You are going to get into a cave just ahead and slay the demon that resides there.';

    button1.textContent = 'Why me? Why cant you do it?';
    button1.onclick = loadDemandAnswer;

    button2.textContent = 'Yes Master! (scream inside)';
    button2.onclick = loadLoyalServantScene;

    button3.style.display ='none';
    button4.style.display ='none';
}

/**
 * @type {loadLoyalServantScene} scene with options
 */
function loadLoyalServantScene () {
    img.src = "./images/Owl.webp"

    text.textContent = "*The former fox turn into an Owl and sits on the tree nearby* You are really a fool. I won't let you go emptyhanded. Pick a weapon of choice. ";

    button1.textContent = 'Yes Master! (scream inside)';
    button1.onclick = loadPickLootScene;

    button2.textContent = '(I miss the fox)';
    button2.onclick = loadPickLootScene;

    button3.style.display ='block'
    button3.textContent = 'RUUUUN';
    button3.onclick = loadDeath, chicken = (true) ;
}

/**
 * @type {loadDemandAnswer} scene with options
 */
function loadDemandAnswer () {
    img.src = "./images/Reaper.webp"

    text.textContent = "*The Shapeshifter turns into a dark figure* Because I will end your life if you dont. I won't let you go emptyhanded. Pick a weapon of choice"
    
    button1.textContent = 'Yes Master! (scream inside)';
    button1.onclick = loadPickLootScene;

    button2.textContent = '(I miss the fox)';
    button2.onclick = loadPickLootScene;

    button3.style.display ='block'
    button3.textContent = 'RUUUUN';
    button3.onclick = loadDeath, chicken = (true);
}

/**
 * @type {loadPickLootScene} scene with options
 */
function loadPickLootScene () {
    img.src = "./images/Free gifs gif.gif"

    text.textContent = "(I am no slayer, and I dont want to be slayed by anything at the moment. Maybe I get to live at least 15 more minutes if I obey him.)"
   
    button1.textContent = 'Pick Sword';
    button1.onclick = loadSwordScene;

    button2.textContent = 'Pick Shield';
    button2.onclick = loadShieldScene;

    button3.textContent = 'Pick Lucky Charm';
    button3.onclick = loadLuckyCharmScene;

    button4.style.display ='block'
    button4.textContent = 'Go on emptyhanded';
    button4.onclick = loadEmptyHandedScene;  
}

/**
 * @type {loadSwordScene} scene with options
 */
function loadSwordScene() {
    text.textContent = 'So you opted for the sword, eh? Well well. Lets see if it comes in handy!'

    img.src = "./images/Free gifs gif.gif"

    button1.textContent = "I'll slice his head of!";
    button1.onclick = loadSunset, sword = true;

    button2.textContent = 'Change your mind';
    button2.onclick = loadPickLootScene;

    button3.textContent = 'Attack the Shapeshifter';
    button3.onclick = loadDeath, reckless = true;

    button4.style.display ='none'
}

 /**
 * @type {loadShieldScene} scene with options
 */   

function loadShieldScene() {
    text.textContent = 'A shield? Anyone in their right mind would probably pick a sword before a shield. I guess you are not in your right mind.'
    
    button1.textContent = 'Block block run?';
    button1.onclick = loadSunset, shield = true;

    button2.textContent = 'Block SMASH block SMASH!';
    button2.onclick = loadSunset, shield = true;

    button3.style.display ='block'
    button3.textContent = 'Change your mind';
    button3.onclick = loadPickLootScene;

    button4.style.display ='none'
}

/**
 * @type {loadLuckyCharmScene} scene with options
 */
function loadLuckyCharmScene() {
    text.textContent = 'Who needs a sword when your enemies wont ever be able to hit you? Maybe you dont even meet your enemies? WHO KNOWS?'

    button1.textContent = 'Luck is my only chance..';
    button1.onclick = loadSunset, luckyCharm = true;

    button2.textContent = 'Try your luck. RUN!';
    button2.onclick = loadEscapeScene;

    button3.style.display ='block'
    button3.textContent = 'change your mind';
    button3.onclick = loadPickLootScene;

    button4.style.display ='none'    
}

/**
 * @type {loadEmptyHandedScene} scene with options
 */

function loadEmptyHandedScene() {
    text.textContent = 'You are mad. You may be facing a demon? Are you going to slap it?'

    button1.textContent = 'change your mind';
    button1.onclick = loadPickLootScene;

    button2.textContent = '(I need to be light so I can run!)';
    button2.onclick = loadSunset, emtptyhanded = true;

    button3.textContent = 'Falcon punch?';
    button3.onclick = loadSunset, emptyhanded = true;

    button4.style.display ='none'
}

/**
 * @type {loadSunset} scene with options
 */
function loadSunset () {
    img.src = "/images/sunset.gif"

    text.textContent = '*The sun is setting.* Someone is about to die tonight.'

    button1.textContent = 'Is it me?';
    button1.onclick = loadEnterCaveScene;

    button2.textContent = 'Is it the demon?';
    button2.onclick = loadEnterCaveScene;

    button3.textContent = 'Please help me';
    button3.onclick = loadEnterCaveScene;
}

/**
 * @type {loadEnterCaveScene} scene with options
 */

function loadEnterCaveScene ()  {
    img.src ="./images/Cave.webp"

    text.textContent = '*The Shapeshifter forces you into the cave with some kind of magic scary gaze*'

    button1.textContent = 'Anybody home?';
    button1.onclick = loadBossFightScene;

    button2.textContent = 'CHAARGE!!';
    button2.onclick = loadBossFightScene;

    button3.textContent = '(Please help me)';
    button3.onclick = loadBossFightScene;

    button4.style.display = 'block'
    button4.textContent = 'RUUN';
    button4.onclick = loadEscapeScene;
}


/**
 * @type {loadBossFightScene} scene with options
 */
function loadBossFightScene () {
    img.src = "./images/Final boss.png"

    text.textContent = 'As you step into the cave the demon charges you. "WHO DARES ENTER MY LAIR? YOU WILL SUFFER"'

    button1.textContent = 'Focus. Slay it.';
    button1.onclick = loadDemonSlayerScene;

    button2.textContent = 'Close your eyes';
    button2.onclick = loadSlayedByDemonScene;

    button3.style.display = 'block'
    button3.textContent = 'RUUN';
    button3.onclick = loadEscapeScene;

    button4.style.display = 'none'
}

/**
 * @type {loadSlayedByDemonScene} scene with options
 */
function loadSlayedByDemonScene () {
        const div = document.createElement("div");
        const h1 = document.createElement("h1");
        const h2 = document.createElement("h2");
    
        div.className = "fox-end-div"
       
        document.body.innerHTML = "";
        document.body.append(div, h1, h2);
        
        h1.className = "fox-end-h1";
        h2.className ="fox-end-h2";
         
        h1.textContent = '"YOU DIED"';
        h2.textContent = 'click anywhere to start over.\n(Beginner tip: dont be a coward!)'

        setTimeout(function(){
            onclick = refreshPage
        }, 2000);
}
/**
 * @type {loadEscapeScene} scene with function for win/loose scene
 */
function loadEscapeScene () {

        const div = document.createElement("div");
        const h1 = document.createElement("h1");
        const h2 = document.createElement("h2");
    
        div.className = "fox-end-div"
       
        document.body.innerHTML = "";
        document.body.append(div, h1, h2);
        
        setTimeout(function(){
        h1.className = "fox-end-h1";
        h2.className ="fox-end-h2";
        
        if (luckyCharm === true )   { 
            h1.textContent = '"I.. I escaped.. I am finally free. I am never taking anything for granted! Iife is beautiful! I am beautiful! I will work out and eat healthy. Work for the poor and.. go to bed early! Yeah, lets go!"';
            h2.textContent = 'click anywhere to continue'
            setTimeout(function(){
                onclick = refreshPage;
            }, 2000);
    
        }  else { 
            h1.textContent = '..YOU DIED';
            h2.textContent = 'click anywhere to start over.\n(Pro tip: dont be a coward!)'
            
            setTimeout(function(){
                onclick = refreshPage
            }, 2000);
        }
    
        }, 2000);
}
/**
 * @type {loadDemonSlayerScene} scene with options
 */
function loadDemonSlayerScene () {
    const div = document.createElement("div");
        const h1 = document.createElement("h1");
        const h2 = document.createElement("h2");
    
        div.className = "fox-end-div"
       
        document.body.innerHTML = "";
        document.body.append(div, h1, h2);
        
        setTimeout(function(){
        h1.className = "fox-end-h1";
    
        h2.className ="fox-end-h2";
        
        if (luckyCharm === true || sword === true || shield === true)   { 
            h1.textContent = '"I guess I am a demon slayer? Or did I have plot armor? I dont care. I need to get out of here and continue my life avoiding foxes."';
            h2.textContent = 'click anywhere to continue!)'
                onclick = refreshPage;

        }  else { 
            h1.textContent = '..YOU DIED';
            h2.textContent = 'click anywhere to start over.\n(Pro tip: maybe accept free loot next time?)'
            setTimeout(function(){
                onclick = refreshPage;
            }, 2000);
            
        }
    
        }, 2000);
}
