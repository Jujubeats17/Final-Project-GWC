//function playSound(){
//  var audio = new Audio('sea_main.mp3');
//  audio.play();
//  if audio
//    audio.pause

//  audio.pause();
//}

//if audio is playing
//  audio.pause
// if audio is paused
// audio play
 var myAudio = document.getElementById("oceanWaves");
 var isPlaying = false;

 function togglePlay() {
   if (isPlaying) {
     oceanWaves.pause()
   } else {
     oceanWaves.play();
   }
};
 oceanWaves.onplaying = function(togglePlay) {
   isPlaying = true;
 };
 oceanWaves.onpause = function(togglePlay) {
   isPlaying = false;
 };
