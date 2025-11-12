
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

    const vid = document.getElementById("vid");
    const selectVid = document.getElementById("video-select");
    const selectlang = document.getElementById("language-select");
    
    let pop = document.querySelector(".pop");
    let web = document.getElementById("web");



    //the custom callback functions to trigger when a cuepoint is hit.
    //You can code up whatever behavior you need in your own callbacks
    
    function func1() {
       body.style.backgroundColor = "#5C7A7A"; 
       body.style.color = "white";
    }
    
    function func2() {
        pop.innerHTML = "<p>We would still be friends?!</p>";
        pop.classList.toggle("hide"); 
    
    // 4. Schedule the hiding event using setTimeout.
    setTimeout(() => {
        // HIDE the element.
        // Toggling 'hide' when it's absent (visible) will add it, making the element hidden.
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

}