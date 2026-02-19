import bgimg from "../../assets/background.png";
import { useState, useEffect, useRef } from "react";

export default function Background() {
	const [offset, setOffset] = useState({ x: 0, y: 0 });
	const keysPressedRef = useRef({ w: false, a: false, s: false, d: false });
	const offsetRef = useRef({ x: 0, y: 0 });

	useEffect(() => {
		const handleKeyDown = (e) => {
			const key = e.key.toLowerCase();
			if (["w", "a", "s", "d"].includes(key)) {
				keysPressedRef.current[key] = true;
			}
		};

		const handleKeyUp = (e) => {
			const key = e.key.toLowerCase();
			if (["w", "a", "s", "d"].includes(key)) {
				keysPressedRef.current[key] = false;
			}
		};

		const gameLoop = () => {
			const step = 5;
			let dx = 0;
			let dy = 0;
			if (keysPressedRef.current["d"]) dx -= 1;
			if (keysPressedRef.current["a"]) dx += 1;
			if (keysPressedRef.current["s"]) dy -= 1;
			if (keysPressedRef.current["w"]) dy += 1;

			// Normalize if moving diagonally
			if (dx !== 0 || dy !== 0) {
				const length = Math.sqrt(dx * dx + dy * dy);
				dx = (dx / length) * step;
				dy = (dy / length) * step;
			}

			offsetRef.current = {
				x: offsetRef.current.x + dx,
				y: offsetRef.current.y + dy,
			};
			setOffset(offsetRef.current);
			requestAnimationFrame(gameLoop);
		};

		const animationId = requestAnimationFrame(gameLoop);

		window.addEventListener("keydown", handleKeyDown);
		window.addEventListener("keyup", handleKeyUp);
		return () => {
			window.removeEventListener("keydown", handleKeyDown);
			window.removeEventListener("keyup", handleKeyUp);
			cancelAnimationFrame(animationId);
		};
	}, []);

	return (
		<div
			className="fixed inset-0 -z-10"
			style={{
				backgroundImage: `url(${bgimg})`,
				backgroundPosition: `${offset.x}px ${offset.y}px`,
			}}
		/>
	);
}
