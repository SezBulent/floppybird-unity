#pragma strict
import UnityEngine.UI;

public var bird : Bird;
public var scoreBoard : Text;
public var scor : Text;
function Start () {
	
}

function Update () {
    scoreBoard.text="Score : " + bird.score;
	var sez = ["","Surprisingly, you made it here", "Wow, how did you go over 1?", "Your cat would've finished already"];
	var sezLength = sez.length;
	for (var i = 0; i <= bird.score; i++) {
		scor.text = sez[i];
	}
}