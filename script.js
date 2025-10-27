const startButton = document.getElementById("startButton");
const player = document.getElementById("player");
const background = document.getElementById("background");
player.style.display = "none";

startButton.addEventListener("click", () => {
	startButton.style.display = "none";
	player.style.top = "50%";
	player.style.left = "50%";
	player.style.display = "block";
});

// Movement logic (WASD) for the player (will be changed a lot)
const keysPressed = {};
const step = 3;
let x = window.innerWidth / 2; // Centered x position
let y = window.innerHeight / 2; // Centered y position
background.style.width = Math.ceil(background.offsetWidth / 512) * 512 * 2 + "px";
background.style.height = Math.ceil(background.offsetHeight / 512) * 512 * 2 + "px";

document.addEventListener("keydown", (event) => {
	keysPressed[event.code] = true;
});

document.addEventListener("keyup", (event) => {
	keysPressed[event.code] = false;
});

function movement() {
	if (player.style.display === "block") {
		if (keysPressed["KeyW"]) {
			y += step;
		}
		if (keysPressed["KeyA"]) {
			x += step;
		}
		if (keysPressed["KeyS"]) {
			y -= step;
		}
		if (keysPressed["KeyD"]) {
			x -= step;
		}

		background.style.top = y + "px";
		background.style.left = x + "px";

		if (x > background.offsetWidth / 2) {
			x = 0;
		}
		if (x < 0) {
			x = background.offsetWidth / 2;
		}
		if (y > background.offsetHeight / 2) {
			y = 0;
		}
		if (y < 0) {
			y = background.offsetHeight / 2;
		}
	}
	requestAnimationFrame(movement);
}

requestAnimationFrame(movement);
