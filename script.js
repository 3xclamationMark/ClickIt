const newScore = localStorage.getItem('score'); //getting the previous score
var num = 0;//setting the score to zero
var root = document.documentElement;
let cursor = document.getElementById('cursor');
document.body.onkeyup = function(e){
if(e. keyCode == 32){
	addScore();
}
}

root.addEventListener("mousemove", e => {
  root.style.setProperty('--mouse-x', e.clientX + "px");
  root.style.setProperty('--mouse-y', e.clientY + "px");
});

//adding the previous score to the current score
if(parseInt(newScore)>1){
	num += parseInt(newScore);
}

document.getElementById("score").innerHTML = num;//shows score

var changeColor = function(){
	if(num>=2500){
		root.style.setProperty('--cols', 'yellow');
	} else if(num>2000){
		root.style.setProperty('--cols', 'purple');
	} else if(num>1500){
		root.style.setProperty('--cols', 'tomato');
	} else if(num>=1000){
		 root.style.setProperty('--cols', 'lawngreen');
		} else if(num>=500){
		root.style.setProperty('--cols', 'cyan');
	} else if(num>=100){
		root.style.setProperty('--cols', 'pink');
	} else{
		root.style.setProperty('--cols', 'red');
	}
}
changeColor();

//adds 1 to score, and changes the number displayed
var addScore = function(){
	if(num >= 500){
		num += 5;
	} else{
		num += 1;
	}
	document.getElementById("score").innerHTML = num;
	changeColor();
}

//saves the score to the local storage
var save = function(){
	localStorage.setItem('score', num);
	if(num >= 500){
		num -= 5;
	} else{
		num -= 1;
	}
}

//resets the score
var reset = function(){
	localStorage.removeItem('score');
	num = -1;
}
