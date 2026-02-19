import { useState } from "react";
import Player from "../components/Game/Player";
import Button from "../components/Button";
import Background from "../components/Game/Background";
import pause from "../assets/pause.png";

export default function Game() {
	const [isPaused, setIsPaused] = useState(false);

	return (
		<div>
			<Background />
			<Button
				className="fixed top-10 right-10 aspect-square min-w-10"
				onClick={() => {
					setIsPaused(true);
					console.log("Game Paused");
				}}
			>
				<img src={pause} alt="Pause" className="size-8" />
			</Button>
			<Player />
			{isPaused && (
				<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10">
					<h1 className="text-4xl text-white">Game Paused</h1>
				</div>
			)}
		</div>
	);
}
