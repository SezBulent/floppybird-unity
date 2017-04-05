#pragma strict

public var obstacleTemplate: Transform;
public var minDistance : int = 20;
public var maxDistance: int = 40;
public var minHeight: int = 3;
public var maxHeight: int = 20;
public var levelWidth: int = 10;
public var initialZ: int = 20;
function Start () {
	var nextZ = initialZ;
	var nextHeight;
	for(var i = 0; i< levelWidth; i++){
		nextZ += Random.Range(minDistance, maxDistance);
		nextHeight = Random.Range(minHeight, maxHeight);
		Instantiate(obstacleTemplate, Vector3 (0, nextHeight, nextZ), Quaternion.identity);
	}
}

function Update () {
	
}
