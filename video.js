var video = document.querySelector("#player1")

window.addEventListener("load", function() {
	console.log("Good job opening the window");
    video.autoplay = false;
    video.loop = false;
    document.querySelector("#volume").innerHTML = "";
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
    video.play();
    document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
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

document.querySelector("#mute").addEventListener("click", function() {
    if (video.muted) {
        video.muted = false;
        this.innerHTML = "Mute";
    } else {
        video.muted = true;
        this.innerHTML = "Unmute";
    }
});

document.querySelector("#slider").addEventListener("change", function() {
    video.volume = this.value / 100;
    document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
});

document.querySelector("#vintage").addEventListener("click", function() {
    video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
    video.classList.remove("oldSchool");
});
 
// NOTE load the volume bar on play, it should be blank when I first visit the site NOTE