#pragma strict
import UnityEngine.UI;

public var bird : Bird;
public var scoreBoard : Text;
function Start () {
	
}

function Update () {
    scoreBoard.text="Score : " + bird.score;
}
