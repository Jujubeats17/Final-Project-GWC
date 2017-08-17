//function changePicture() {
  //document.getElementById("cute-animal1").src="cute-animals2.jpg"
  //document.getElementById("cute-animals1").src="cute-animals3.jpg"
//}

function showPicture() {
  document.getElementById("cute-animal1").style.display= 'block'
  document.getElementById("cute-animal1").src = "cute-animals.jpg"
}

function showPicture2() {
  document.getElementById("cute-animal1").style.display= 'block'
  document.getElementById("cute-animal1").src ="cute-animals2.jpg";
}

function showPicture3() {
  document.getElementById("cute-animal1").style.display= 'block'
  document.getElementById("cute-animal1").src="cute-animals3.jpg";
}

function showLandscape() {
  document.getElementById("natural-landscape1").style.display='block';
  document.getElementById("natural-landscape1").src= "natural-landscape.jpg";
}

function showLandscape2() {
  document.getElementById("natural-landscape1").style.display='block';
  document.getElementById("natural-landscape1").src= "natural-landscape2.jpg";
}

function showLandscape3() {
  document.getElementById("natural-landscape1").style.display='block';
  document.getElementById("natural-landscape1").src="natural-landscape3.jpg";
}
var myAudio = document.getElementById("rain");
function togglePlay() {
  if (rain.paused){
    rain.play();
  } else {
    rain.pause();
  }
};
