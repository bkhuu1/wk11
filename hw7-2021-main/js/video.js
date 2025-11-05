var video = document.querySelector("#player1")

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play()
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause video");
	video.pause()
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slowing down");
    video.playbackRate *= 0.9;
    console.log("New speed is ", video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Going faster");
    video.playbackRate /= 0.9;
    console.log("New speed is ", video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skipping ahead");
    
    video.currentTime += 10;
    
    if (video.currentTime >= video.duration) {
        video.currentTime = 0;
		video.play(); 
    }
    
    console.log("Current location is ", video.currentTime);
});