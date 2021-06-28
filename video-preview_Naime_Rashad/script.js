
function HoverPlayer(){
    var video = document.getElementById('VideoPlayer');
    video.muted = true;
    video.play();
}
function PausePlayer(){
    var video = document.getElementById('VideoPlayer');
    video.currentTime = 0;
    video.pause();    
}