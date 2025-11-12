
import { cueTimer } from "./modules/cuepoints.js";

document.addEventListener("DOMContentLoaded", init)

var myCues;

function init() {
 // create a playlist of functions to call at certain moments in the video.
myCues = [
    { seconds: 20, callback: func1 }, //Start of the 1st verse
    { seconds: 64, callback: func2 }, //You can be addicted to.....
    { seconds: 95, callback: func3 }, //But you didn't have to stoop so low
    { seconds: 154, callback: func4 }, //Start of Kimbra's Verse
    { seconds: 184, callback: func5 },  //Start of Final Outro
];


// setup the cuepoint timer
cueTimer.setup("vid", myCues);



// create shortcut variables

const body = document.querySelector("body");

//Vid variables
const vid = document.getElementById("vid");
const selectVid = document.getElementById("video-select");

//Track variables
const selectLang = document.getElementById("language-select");

//controls
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

    
let pop = document.querySelector(".pop");

let web = document.getElementById("web");



//the custom callback functions to trigger when a cuepoint is hit.

function func1() {

    body.style.backgroundColor = "#5C7A7A"; 
    body.style.color = "white";

    }
    

function func2() {

    pop.innerHTML = "<p>We would still be friends?!</p>";
    pop.classList.toggle("hide"); 
    
    // Schedule the hiding event using setTimeout.
    setTimeout(() => {

    pop.classList.toggle("hide");

    }, 2000); // 4000 milliseconds = 4 seconds duration

    }

function func3() {

    body.style.backgroundColor = "#B22222"; 
    body.style.color = "white";

    }

function func4() {

    web.src = "https://www.psychologytoday.com/us/blog/finding-love-the-scientific-take/202110/the-breakup-story";

    }





//Event listeners

//select video
selectVid.addEventListener('change', (e) => {
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