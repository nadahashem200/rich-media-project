
import { cueTimer } from "./modules/cuepoints.js";

import { 
    selectVideo, selectLanguage, playVideo, pauseVideo, muteVideo, unmuteVideo, 
    onFinished, seekVideo, playRate, rewindVideo 
} from "./video-helpers.js";

document.addEventListener("DOMContentLoaded", init)

var myCues;

function init() {
 // create a playlist of functions to call at certain moments in the video.
myCues = [
    { seconds: 20, callback: func1 }, //Start of the 1st verse
    { seconds: 64, callback: func2 }, //You can be addicted to.....
    { seconds: 95, callback: func3 }, //But you didn't have to stoop so low
    { seconds: 154, callback: func4 }, //Start of Kimbra's Verse
];


// setup the cuepoint timer
cueTimer.setup("vid", myCues);


// create shortcut variables

const body = document.querySelector("body");

let pop = document.querySelector(".pop");
let web = document.getElementById("web");


//Vid variables
const vid = document.getElementById("vid");
const selectVid = document.getElementById("video-select");

const articleBox = document.querySelector(".article-box");

//Track variable
const selectLang = document.getElementById("language-select");

//controls variables
const playButton = document.getElementById("play");
const pauseButton = document.getElementById("pause");
const muteButton = document.getElementById("mute");
const unmuteButton = document.getElementById("unmute");
const endButton = document.getElementById("end");
const seekButton = document.getElementById("seek");
const fastForwardButton = document.getElementById("ff");
const slowButton = document.getElementById("slo");
const normalButton = document.getElementById("normal");
const rewindButton = document.getElementById("rw");

    

//the custom callback functions to trigger when a cuepoint is hit.

function func1() {

    body.style.backgroundColor = '#5C7A7A'; 
    body.style.color = 'white';
}
    

function func2() {

    pop.innerHTML = "<p>We would still be friends?!</p>";
    pop.classList.toggle("hide"); 
    
    // Schedule the hiding event using setTimeout.
    setTimeout(() => {

    pop.classList.toggle("hide");

    }, 5000); // 5000 milliseconds = 5 seconds duration

    pop.style.backgroundColor = 'white';
    pop.style.color = 'black';

    if (window.innerWidth > 760) {
    pop.style.fontSize = '40px';
    pop.style.padding = '20px';
    pop.style.position = 'fixed';
    pop.style.top = '300px';
    pop.style.right = '10px';
    }
//Mobile layout

  else {
        pop.style.fontSize = '20px';
        pop.style.padding = '10px';
        pop.style.position = 'fixed';
        pop.style.zIndex = '1000';
        pop.style.top = '100px';
  }
}


function func3() {

    body.style.backgroundColor = '#B22222'; 
    body.style.color = 'white';
    }

function func4() {
    body.style.backgroundColor = 'beige'; 
    body.style.color = 'black';
      
    articleBox.classList.remove("hide");

    setTimeout(() => {

          articleBox.classList.add("hide");
        }, 20000); // 20 seconds
      
    web.src = "https://en.wikipedia.org/wiki/Breakup";
       

          if (window.innerWidth > 760) {
            articleBox.style.position = 'fixed';
            articleBox.style.width = '30%';
            articleBox.style.top = '50px';
            articleBox.style.right = '10%';
            articleBox.style.border = '1px solid black';

          } else {
            articleBox.style.position = 'static';
            articleBox.style.width = '100%';
            articleBox.style.top = 'auto';
            articleBox.style.border = 'none';
          }
       
      }
      


//Event listeners


//select video

selectVid.addEventListener('change', (e) => {
    // Check which video is selected
    if (e.target.value === 'videos/song.webm') {

        selectLanguage(null, vid, 'en'); // enable English captions

    // reset the cues playlist
        myCues = [
            { seconds: 20, callback: func1 },
            { seconds: 64, callback: func2 },
            { seconds: 95, callback: func3 },
            { seconds: 154, callback: func4 },
        ];

    // recreate the cue timer
        cueTimer.setup("vid", myCues);

    } else if (e.target.value === 'videos/song.mp4') {

    // remove all cues 
        myCues = [];
        selectLanguage(null, vid, 'en');
    }

    // Switch the video source
    selectVideo(e, vid);
});

//select language
selectLang.addEventListener('change', (e) => {
    selectLanguage(e, vid, e.target.value); 
});
//play
playButton.addEventListener('click', () => {
    playVideo(vid);
});
//pause
pauseButton.addEventListener('click', () => {
    pauseVideo(vid);
});
//mute
muteButton.addEventListener('click', () => {
    muteVideo(vid);
});
//unmute
unmuteButton.addEventListener('click', () => {
    unmuteVideo(vid);
});
//end
endButton.addEventListener('click', () => {
    onFinished(vid);
});
//seek
seekButton.addEventListener('click', () => {
    seekVideo(vid, 90);
});
//ff
fastForwardButton.addEventListener('click', () => {
    playRate(vid, 2);
});
//slow

slowButton.addEventListener('click', () => {
    playRate(vid, .5);
});

//normal
normalButton.addEventListener('click', () => {
    playRate(vid, 1);
});

//Rewind
rewindButton.addEventListener('click', () => {
    rewindVideo(vid, 10); 
});

}