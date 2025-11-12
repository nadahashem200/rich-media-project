
//select video
export function selectVideo(e, vid) 
	{
		vid.src = e.target.value;
		vid.load();
		playVideo(vid);
	}

//select a language
export function selectLanguage(e, vid, id) 
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
export function playVideo(vid) {
		vid.play();
	}
//pause button
export function pauseVideo(vid){
		vid.pause();
	}
//mute button
export function muteVideo(vid){
		vid.muted = true;
	}
//unmutebutton
export function unmuteVideo(vid){
		vid.muted = false;
	}

//end button
export function onFinished(vid){
		vid.currentTime = 0;
	}

//seek button
export function seekVideo(vid, position) 
	{
		if(!position) position = 0;
		vid.currentTime = position;
		vid.play();
	}

//ff, slow, normal
export function playRate(vid, rate){
	vid.playbackRate = rate;
}


//Rewind
export function rewindVideo(vid, seconds) {
    vid.currentTime = Math.max(0, vid.currentTime - seconds);
}


	
