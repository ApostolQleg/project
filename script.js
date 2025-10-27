const startButton = document.getElementById("startButton");
const player = document.getElementById("player");
const background = document.getElementById("background");
const pauseButton = document.getElementById("pauseButton");
const resumeButton = document.getElementById("resumeButton");
const menuButton = document.getElementById("menuButton");

startButton.style.display = "block";
// block scrolling
document.body.style.cssText = `overflow: hidden`;

// Start button logic
startButton.addEventListener("click", () => {
	startButton.style.display = "none";
	player.style.display = "block";
	pauseButton.style.display = "block";
});

// Movement logic (WASD)
const keysPressed = {};
const step = 3;
let x = window.innerWidth / 2; // Centered x position
let y = window.innerHeight / 2; // Centered y position
background.style.width = Math.ceil(background.offsetWidth / 512) * 512 * 4 + "px";
background.style.height = Math.ceil(background.offsetHeight / 512) * 512 * 4 + "px";

document.addEventListener("keydown", (event) => {
	keysPressed[event.code] = true;
});

document.addEventListener("keyup", (event) => {
	keysPressed[event.code] = false;
});

function movement() {
	if (pauseButton.style.display === "block") {
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

		// Render wrapping
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

// Pause button logic
pauseButton.addEventListener("click", () => {
	if (pauseButton.style.display === "block") {
		pauseButton.style.display = "none";
		resumeButton.style.display = "block";
		menuButton.style.display = "block";
	}
});

// Resume button logic
resumeButton.addEventListener("click", () => {
	if (resumeButton.style.display === "block") {
		resumeButton.style.display = "none";
		menuButton.style.display = "none";
		pauseButton.style.display = "block";
	}
});

// Menu button logic
menuButton.addEventListener("click", () => {
	if (menuButton.style.display === "block") {
		menuButton.style.display = "none";
		resumeButton.style.display = "none";
		player.style.display = "none";
		startButton.style.display = "block";
	}
});
