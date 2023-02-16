var audio;

for( var i=0; i<6; i++){

  document.querySelectorAll("button")[i].addEventListener("click", function(){
    var theButton = this.innerHTML;

    console.log(theButton);
    playSound (theButton);
    
  });
}

function playSound (theButton) { 
if (audio) {
    // Stop the previously playing audio
    audio.pause();
    audio.currentTime = 0;
  }

  switch (theButton) {
    case theButton: 
      var audio = new Audio ("sounds/"+ theButton + ".mp3");
      audio.play();
         
      break;
      
  default: 
      alert("Wrong Kye");
      break;
  }
}

