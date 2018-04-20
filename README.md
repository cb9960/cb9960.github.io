# cb9960.github.io

## The Great Race
CIS 370 Final Project Repo

In this project, you will explore some of the topics discussed in class regarding the Browser Object Model, or Document Object Model.  

You will implement a page that simulates a race between two or more competing teams.  For example: a tortoise racing a hare.  The gist of the functionality you must implement is that there are going to be several images that are manipulated based on actions taken by the user viewing the page.

First, your page needs to display an image of something like a stop light.  The stop light will either show a red light or a green light “lit”.  When the page is loaded, it will show a red light “lit”.  When the image is clicked (the OnClick event) the image displayed should change to a different image with the green light “lit”.  This indicates the start of the race.

The next part of the page that is significant is the characters participating in the race.  These characters should initially be displayed on the left side of the page.  When the race begins, an interval should be started, to fire an event, say, every half second.  Each time the event is fired, a function will be called.  That function should change the position of the images so that they appear to move to the right across the page toward the finish line.  The trick is that the amount that the images move should be based on a random number.  That way, each half second, they move a few pixels to the right, but at a different, random rate of speed.  Eventually, one or the other will reach the right side first, at which time the interval will be cleared, and the winner declared.

When a winner is declared, another image should be displayed.  When the page is loaded, it can be on the page already, but simply hidden.  This image indicates which participant won the race.  When the race is finished, show the image.

When the user clicks on the image indicating who won, the participants should move back to the starting line, the stop sign image should change back to a red light, and the winner image should again be hidden, just like when the page was loaded, ready for another race to begin.

This project will reinforce your understanding and ability to utilize the following techniques discussed in class:
	Referencing objects on a page using the browser object model
	Trapping events (mouse click, etc.)
	Creating/managing timers and intervals
	Manipulating attributes of HTML elements using JavaScript
	JavaScript variables
	JavaScript selection control structures
