#pragma strict
import UnityEngine.SceneManagement;

public class Bird extends MonoBehaviour {
	public var thrust : float = 20000;
	public var acceleration: int = 10000;
	public var topSpeed: int = 15000;
	public var score: int  = 0;
	public var scor: String = "Try to!";
	private var rb: Rigidbody;

	function Start () {
		rb = GetComponent.<Rigidbody>();
		score = 0;
		scor = "Try to!";
	}

	function Update () {	
		rb.AddRelativeForce(Vector3.forward * acceleration * Time.deltaTime);

		if (Input.GetButtonDown('Jump')) {
			rb.AddForce(transform.up * thrust  * Time.deltaTime);
		}

		if (rb.velocity.magnitude > topSpeed) {
			rb.velocity = rb.velocity.normalized * topSpeed;
		}

		if (score == 11) {
			SceneManager.LoadScene("level1"); //Game resets when it reached score 11
		}
	}

	function OnCollisionEnter (col : Collision) {
		SceneManager.LoadScene("level1");
	}

	
	function OnTriggerEnter (col : Collider) {
		if(col.gameObject.tag == "Score"){
			score++;
		} else {
			Debug.Log("Triggered");
		}
	}
}