// State Object

var state = {
 questions: [
// Question 1
   {
	text: " What is the real name of the mysterious old man you talk to when Link wakes up? ",
	choices: ["King Bob", "King Aurthor", "King Impa", "King Rhoam "],
	correctAnswer: 3
}, {
// Question 2
	text: " What color are the first rank Bokoblins you fight? ",
	choices: ["Black", "Blue", "Red", "Yellow"],
	correctAnswer: 2
}, {
// Question 3
	text: " When you discover a Korok, what do they hand you as a reward? ",
	choices: ["Korok Plant", "Korok Seed", "Korok Candy", "Korok Money"],
	correctAnswer: 1
}, {
// Question 4
	text: " Which 4 are the correct champion’s names? ",
	choices: ["Daruk, Mipa, Ron, Urbosi"] , ["Mitaa, Darku, Ravali, Urbose"] , ["Revali, Urbosa, Mipha, Darke"], [" Mipha, Daruk, Revali, Urbosa "]
	correctAnswer: 3
}, {
// Question 5
	text: " What is the name of the group is trying to kill Link? ",
	choices: ["Yiga Gang", "Rito Clan", "Yiga Clan", "Rito Gang"],
	correctAnswer: 2
}

]};

/*
  praises : [
    "HYAH!",
    "SEYAHH!"
  ],

  shames: [
    "You have let done Princess Zelda....",
    "HEY LISTEN!...you got it wrong..."
  ],
*/

// State modification function

 var buildQuiz = function(state, questions) {
    state.questions.push(questions);
};


// Render functions

function renderApp(state,questions) {
	Object.keys(questions).forEach(function() {
		questions[].hide();
	});
		questions[].show();
}

};

function renderStartPage(state, questions) {
};

function renderFinalPage(state,questions) {
	
};

// Event listeners


