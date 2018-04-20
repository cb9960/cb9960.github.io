
// Global variables

var kirbyDiv = document.getElementById('kirby');
var poppyDiv = document.getElementById('poppy');
var posK;
var posP;
var kirbyImage = document.getElementById('kirbyImg');
var poppyImage = document.getElementById('poppyImg');

// Resets image sources and position
function setUp(){
  posK = 0;
  posP = 0;
  kirbyDiv.style.left = posK + 'px';
  poppyDiv.style.left = posP + 'px';
  kirbyImage.src = "kirby_bomb.png";
  poppyImage.src = "poppy_bomb.png";
  kirbyImage.style.display = "block";
  poppyImage.style.display = "block";
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
    if (posK > 500 || posP > 500 ){
      clearInterval(timer);
      posK > posP ? kirbyWins() : poppyWins();
    } else {
      var rdmK = Math.floor(Math.random() * 20);
      var rdmP = Math.floor(Math.random() * 20);
      posK += rdmK;
      posP += rdmP;
      kirbyDiv.style.left = posK + 'px';
      poppyDiv.style.left = posP + 'px';

    }
  }
}

// Makes the winning image visible & hides race image
function kirbyWins(){
  kirbyImage.style.display = "none";
  document.getElementById('kirbyWinsImg').style.display = "block";

}
// Makes the winning image visible & hides race image
function poppyWins(){
  poppyImage.style.display = "none";
  document.getElementById('poppyWinsImg').style.display = "block";
}
