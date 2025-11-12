
//select video
function selectVideo(e, vid) 
	{
		vid.src = e.target.value;
		vid.load();
		playVideo(vid);
	}

//select a language
function selectLanguage(e, vid, id) 
	{
		if(vid.textTracks.length > 0) {
			
		  //set all tracks inactive
			for (let track of vid.textTracks) {
				track.mode = 'hidden';
				track.selected = false;
			}

			//turn on the selected track 
			const theTrack = vid.textTracks.getTrackById(id);
			console.log(theTrack);
			theTrack.selected = true;
			theTrack.mode = 'showing';
		}
	}

//controls

//play button
	function playVideo(vid) {
		vid.play();
	}
//pause button
	function pauseVideo(vid){
		vid.pause();
	}
//mute button
	function muteVideo(vid){
		vid.muted = true;
	}
//unmutebutton
	function unmuteVideo(vid){
		vid.muted = false;
	}

//end button
	function onFinished(vid){
		vid.currentTime = 0;
	}

//seek button
	function seekVideo(vid, position) 
	{
		if(!position) position = 0;
		vid.currentTime = position;
		vid.play();
	}

//ff, slow, normal
function playRate(vid, rate){
	vid.playbackRate = rate;
}


//Rewind
function rewindVideo(vid, seconds) {
    vid.currentTime = Math.max(0, vid.currentTime - seconds);
}


	
