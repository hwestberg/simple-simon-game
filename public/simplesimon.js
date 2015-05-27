"use strict"

// defines initial round counter for game
var counter = 1;

// empty simonColors array
var simonColors = []; 

// empty userColors array
var userColors = [];

var i = 0;

// generates random color sequence when start button is pressed and animates color and adds colorIndex to array
function showSimonSequence(){

		var simonColorDbid = Math.floor(Math.random() * (4) + 0);
		
		console.log("simonColorDbid is " + simonColorDbid);	
		
		simonColors.push(simonColorDbid);

		console.log("simonColors are " + simonColors);

		$.each(simonColors, flashSimonColor);
};

// flashes each SimonColor
function flashSimonColor(){
			
		$(".circle").filter("[data-dbid='" + simonColors + "']").animate({opacity: .8}, 500).animate({opacity: .3}, 500);	
			
		};

// captures user color sequence
function checkUserSequence (){	
			
// logs dbid for each color that is clicked
		var colorId = this.dataset.dbid;

		console.log("userColor is " + colorId);
			
		$(this).animate({opacity: .8}, 500).animate({opacity: .3}, 500);

		if (colorId == simonColors[i]) {

				console.log("correct color entered");				

				console.log("user color is " + userColors);

				i++

				console.log("index is " + i);

				if (i == simonColors.length){
					
					console.log("correct sequence entered");

					updateCounter();

					$("#round-counter").html("Round: " + counter);

					showSimonSequence();

					i = 0;

				}; 

			} else {

				console.log("game over!");

				simonColors = [];

				userColors = [];

				counter = 1;
				
				$("#round-counter").html("Round: " + counter);
			}

};

// updates counter if userColors == simoncolors
function updateCounter() {
				
	console.log("updating the counter")

	counter +=1;
									
	$("#round-counter").html("Round: " + counter);

};

$(document).ready(function(){
	
	$("#startButton").click(showSimonSequence);	

	$(".circle").click(checkUserSequence);	
				
});
