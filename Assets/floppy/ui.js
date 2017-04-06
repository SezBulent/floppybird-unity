#pragma strict
import UnityEngine.UI;

public var bird : Bird;
public var scoreBoard : Text;
public var scor : Text;
function Start () {
	
}

function Update () {
    scoreBoard.text="Score : " + bird.score;
//	if (bird.score == 1) {
//		scor.text="Surprisingly, you made it here";
//	}
//	else if (bird.score == 2) {
//		scor.text="Wow, how did you go over 1?";
//	}
//	else if (bird.score == 3) {
//		scor.text="I will asume you just have luck";
//	}
//	else if (bird.score == 4) {
//		scor.text="This surely isn't you playing";
//	}
//	else if (bird.score == 5) {
//		scor.text="Prepare for the challenges";
//	}
	var sez = ["","Surprisingly, you made it here", "Wow, how did you go over 1?", "Your cat would've finished already"];
	var sezLength = sez.length;
	for (var i = 0; i <= bird.score; i++) {
		scor.text = sez[i];
	}
}