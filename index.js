// Global variables

var blueDiv = document.getElementById('blue-car-id');
var purpleDiv = document.getElementById('purple-car-id');
var posB;
var posP;
var blueImage = document.getElementById('checkeredFlagImg');
var purpleImage = document.getElementById('checkeredFlagImg');

// Resets image sources and position
function setUp(){
    posB = 0;
    posP = 0;
    blueDiv.style.left = posB + 'px';
    purpleDiv.style.left = posP + 'px';
    blueImage.src = "blue-car-md.png";
    purpleImage.src = "purple-car-md.png";
    blueImage.style.display = "block";
    purpleImage.style.display = "block";
    document.getElementById('checkeredFlagBlue').style.display = "none";
    document.getElementById('checkeredFlagPurple').style.display = "none";
    document.getElementById('startButton').style.display = "block";
    document.getElementById('startButtonGo').style.display = "none";
}

// Conduct "the race"
function race() {
    setUp();
    document.getElementById('startButton').style.display = "none";
    document.getElementById('startButtonGo').style.display = "block";
    // The frame() function occurs at interval
    var timer = setInterval(frame, 100);
    // Moves the images to the right by a random number between 1 and 20
    function frame (){
        if (posB > 500 || posP > 500 ){
            clearInterval(timer);
            posB > posP ? blueWins() : purpleWins();
        } else {
            var rdmB = Math.floor(Math.random() * 20);
            var rdmP = Math.floor(Math.random() * 20);
            posB += rdmB;
            posP += rdmP;
            blueDiv.style.left = posB + 'px';
            purpleDiv.style.left = posP + 'px';
            
        }
    }
}

// Makes the winning image visible & hides race image
function blueWins(){
    blueImage.style.display = "none";
    document.getElementById('checkeredFlagImg').style.display = "block";
    
}
// Makes the winning image visible & hides race image
function purpleWins(){
    purpleImage.style.display = "none";
    document.getElementById('checkeredFlagImg').style.display = "block";
}
