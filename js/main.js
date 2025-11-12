
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
    { seconds: 184, callback: func5 }  //Start of Final Outro
];


 // setup the cuepoint timer
cueTimer.setup("vid", myCues);




    // create shortcut variables
    const vid = document.querySelector("#vid");
    const selectVid = document.querySelector("#video_select");
    const selectTxt = document.querySelector("#text-track");
    const display = document.getElementById("transcript");
    const transcript_en = document.getElementById("transcript-en");
    const transcript_es = document.getElementById("transcript-es");
    const transcript_fr = document.getElementById("transcript-fr");
    const showHide = document.getElementById("show-hide");

    // initialize video select dropdown behavior
    selectVid.addEventListener("change", (e) => {
 
        // depending on which video is selected, change the cues
        // and change the captions.
        if (e.target.value == 'assets/leverage-a-synergy.mp4') {
            
            // choose the english caption text
            selectTrack(null, vid, 'en');

            // reset the cues playlist
            myCues = [
                { seconds: 2, callback: func1 },
                { seconds: 9, callback: func2 },
                { seconds: 15, callback: func3 },
                { seconds: 25, callback: func6 },
                { seconds: 37, callback: func4 },
                { seconds: 50, callback: func5 }
            ];
            // recreate the cue timer
            cueTimer.setup("vid", myCues);

        } else if(e.target.value == 'assets/bunny.mp4') {
            // if bunny video, empty the myCues array
            // and change the caption texts
            myCues.splice(0, myCues.length);
            selectTrack(null, vid, 'en-bunny');
        }
        // finally, swap the video to play
        selectVideo(e, vid);
    });

    // initialize video captions dropdown behavior
    selectTxt.addEventListener("change", (e) => {
        const id = e.target.value;
        selectTrack(e, vid, id);
    });

    // initialize text transcript display (english)
    transcript_en.addEventListener(
        "click",
        function (e) {
            e.preventDefault();
            webvttTranscript("captions/synergy.vtt", display);
        });

    // initialize text transcript display (Spanish)
    transcript_es.addEventListener(
        "click",
        function (e) {
            e.preventDefault();
            webvttTranscript("subtitles/spanish.vtt", display);
        });

    // initialize text transcript display (French)
    transcript_fr.addEventListener(
        "click",
        function (e) {
            e.preventDefault();
            webvttTranscript("subtitles/french.vtt", display);
        });

        
    showHide.addEventListener(
        "click",
        function (e) {
            e.preventDefault();
            webvttTranscript("subtitles/french.vtt", display);
            if (e.target.innerHTML == "Show Transcript") {
                e.target.innerHTML = "Hide Transcript";
                display.style.display = "block";
            } else {
                e.target.innerHTML = "Show Transcript";
                display.style.display = "none";
            }
        });
}



//the custom callback functions to trigger when a cuepoint is hit.
//You can code up whatever behavior you need in your own callbacks

function func1() {
    document.querySelector("#vid").style = "outline : 10px solid red";
}

function func2() {
    let pop = document.querySelector(".pop");
    pop.innerHTML = "<p>Ohh Snap!</p>";
    document.querySelector(".pop").classList.toggle("hide");
    setTimeout(() => {
        document.querySelector(".pop").classList.toggle("hide");
    }, 2000);
}

function func3() {
    const pop = document.querySelector(".pop");
    pop.innerHTML = "<p>E=MC<sup>2</sup> is NOT Statistical Data!!</p>";
    pop.classList.toggle("hide");
    setTimeout(() => {
        document.querySelector(".pop").classList.toggle("hide");
    }, 2000);
    document.querySelector("#vid").style = "outline: 0px solid red";
    document.querySelector("#web").src =
        "https://en.wikipedia.org/wiki/Albert_Einstein";
}

function func4() {
    document.querySelector("#web").src =
        "https://en.wikipedia.org/wiki/Paradigm_shift";
}

function func5() {
    document.querySelector("#web").src =
        "https://en.wikipedia.org/wiki/Domestic_violence";
}

function func6() {
    document.querySelector("#web").src = "images/koljr-banana-splits-400.jpg";
}