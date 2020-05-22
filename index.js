for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    makesound(this.innerHTML);
    buttonAnimation(this.innerHTML);
  });
}

document.addEventListener("keydown",function(){
  makesound(event.key);
  buttonAnimation(event.key);
})

function makesound(key){
  switch (key) {
    case "w":
      var tom1 = new Audio("C:/Users/jaina/OneDrive/Desktop/webdev/Drum Kit Starting Files/sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("C:/Users/jaina/OneDrive/Desktop/webdev/Drum Kit Starting Files/sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("C:/Users/jaina/OneDrive/Desktop/webdev/Drum Kit Starting Files/sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("C:/Users/jaina/OneDrive/Desktop/webdev/Drum Kit Starting Files/sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var snare = new Audio("C:/Users/jaina/OneDrive/Desktop/webdev/Drum Kit Starting Files/sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      var crash = new Audio("C:/Users/jaina/OneDrive/Desktop/webdev/Drum Kit Starting Files/sounds/crash.mp3");
      crash.play();
      break;
    case "l":
      var kickbass = new Audio("C:/Users/jaina/OneDrive/Desktop/webdev/Drum Kit Starting Files/sounds/kick-bass.mp3");
      kickbass.play();
      break;
    default:

  }
}

function buttonAnimation(currentKey){
  document.querySelector("."+currentKey).classList.add("pressed");
  setTimeout(function(){document.querySelector("."+currentKey).classList.remove("pressed")},100);
}
