//Great Race script
var pixels2 = 0;
var pixels = 0;




var angelScoot=document.getElementById('angel');
var doctorScoot = document.getElementById('theDoctor');
var start = document.getElementById("startButton");
start.addEventListener("click", startGame, false);

function startGame() {
  start.src = "img/startLogo.gif";
  start.height = "150";

  function angelMove(){
    // changing the css property function line of code? style = "marin-left ="'pixels';"
    angelScoot.setAttribute ("style", "margin-left:" + pixels + "px;");
    // make a random for each object to determine how many pixels each item will move possibly picking 1 - 10 px per cycle of timer
    randomPixels2 = Math.ceil(Math.random()*75)
    // make var to add to pixels
    pixels2 = (pixels2 + randomPixels2);
    // if statement to stop the race when a winner has been choosen
    if (pixels2 > 850) {
      stoptimer();
      angelScoot.src = "img/angelWinner.gif";
      angelScoot.width ="300";
    }
  }


  function doctorMove(){
    doctorScoot.setAttribute ("style", "margin-left:" + pixels + "px;");
    randomPixels = Math.ceil(Math.random()*75)
    pixels = (pixels + randomPixels);
    if (pixels > 850) {
      stoptimer();
      doctorScoot.src = "img/davidWinner.gif";
      doctorScoot.width = "300";
    }
  }
  // //make a timer
  // for each object that will make imagesmove function go every 1 seconds
    myTimer2 = setInterval(angelMove, 1000)
    myTimer = setInterval(doctorMove, 1000)



  function stoptimer(){
    clearInterval(myTimer);
    clearInterval(myTimer2);
  }
}








// diplay image for winner

// if pixels at xpixels display winner image

// make a stoplight that will make the race start
