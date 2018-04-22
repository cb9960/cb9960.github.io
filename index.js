
// Global variables

var blueDiv = document.getElementById('blue-car');
var greenDiv = document.getElementById('green-car');
var posB;
var posG;
var blueImage = document.getElementById('blueImg');
var greenImage = document.getElementById('greenImg');

// Resets image sources and position
function setUp(){
  posB = 0;
  posG = 0;
  blueDiv.style.left = posB + 'px';
  greenDiv.style.left = posG + 'px';
  blueImage.src = "blue_car.png";
  greenImage.src = "green_car.png";
  blueImage.style.display = "block";
  greenImage.style.display = "block";
  document.getElementById('kirbyWinsImg').style.display = "none";
  document.getElementById('poppyWinsImg').style.display = "none";
  document.getElementById('startButton').style.display = "block";
  document.getElementById('startButtonBW').style.display = "none";
}

// Conduct "the race"
function race() {
  setUp();
  document.getElementById('startButton').style.display = "none";
  document.getElementById('startButtonBW').style.display = "block";
  // The frame() function occurs at interval
  var timer = setInterval(frame, 100);
// Moves the images to the right by a random number between 1 and 20
  function frame (){
    if (posB > 1000 || posG > 1000 ){
      clearInterval(timer);
      posB > posG ? blueWins() : greenWins();
    } else {
      var rdmB = Math.floor(Math.random() * 40);
      var rdmG = Math.floor(Math.random() * 40);
      posB += rdmB;
      posG += rdmG;
      blueDiv.style.left = posB + 'px';
      greenDiv.style.left = posG + 'px';

    }
  }
}

// Makes the winning image visible & hides race image
function blueWins(){
  kirbyImage.style.display = "none";
  document.getElementById('kirbyWinsImg').style.display = "block";
    window.alert("Blue wins!");

}
// Makes the winning image visible & hides race image
function greenWins(){
  poppyImage.style.display = "none";
  document.getElementById('poppyWinsImg').style.display = "block";
    window.alert("Green wins!");
}
