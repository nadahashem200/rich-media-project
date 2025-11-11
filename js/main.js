

document.addEventListener("DOMContentLoaded", init);

//declaring global variables outside init
//for videos
let songPlayer;
let paradePlayer;

//for controls
let currentPlayer; 
let ff;
let slo;
let normal;
let select;

//for fallback
let songFallback;
let paradeFallback;
let noErrorParade;
let noErrorSong;
let paradeContainer;
let songContainer;


//calling both parade and song players and setting the default player to match html structure
function onYouTubeIframeAPIReady() {
    
    // Song Player
    songPlayer = new YT.Player('song-iframe', {
        events: {
            'onError': onPlayerError 
        }
    });

    // Parade Player
    paradePlayer = new YT.Player('parade-iframe', {
        events: {
            'onError': onPlayerError 
        }
    });
    
    // Setting the default player
}
    

// get fallback texts to work in case of an error
function onPlayerError (e) {
    if (e.target === songPlayer) {
    songFallback.style.display = 'block'
    noErrorSong.style.display= 'none';
    paradeContainer.style.display= 'none';
    }

    if (e.target === paradePlayer) {
        paradeFallback.style.display = 'block'
        noErrorParade.style.display= 'none';
        songContainer.style.display= 'none'; 
    };
}


//start of local functions and variables
function init() {
    

 //declaring local variables and assigning values to them
    const song = document.getElementById("song-iframe");
    const parade= document.getElementById("parade-iframe");
 
    ff = document.getElementById("ff");
    slo = document.getElementById("slo");
    normal = document.getElementById("normal");
    select = document.getElementById("video-select");

//assigning values to global variables

   //assigning value to the global noerror variables 
    noErrorSong= document.getElementById("noerror-song");
    noErrorParade= document.getElementById("noerror-parade");

  //assigning value to the global containers variables 
    songContainer= document.getElementById("reverence-isis");
    paradeContainer= document.getElementById("golden-parade");


    //assigning value to the global fallback variables 
    songFallback = document.querySelector('.fallback-song');
    paradeFallback = document.querySelector('.fallback-parade');   


//Functions


//select a video
select.addEventListener('change', function() {
    if (this.value === 'reverence-isis') {
        currentPlayer = songPlayer; 
        songContainer.style.display = 'block';
        paradeContainer.style.display= 'none';
    }

    else { currentPlayer = paradePlayer; 
           songContainer.style.display = 'none';
           paradeContainer.style.display= 'block';
    }      
});

//controls

ff.addEventListener("click", (e) => {
currentPlayer.setPlaybackRate(2);
});

slo.addEventListener("click", (e) => {
currentPlayer.setPlaybackRate(0.5);
});

normal.addEventListener("click", (e) => {
currentPlayer.setPlaybackRate(1);

});
}
