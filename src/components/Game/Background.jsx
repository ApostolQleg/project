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
			const step = 10;
			offsetRef.current = {
				x:
					offsetRef.current.x -
					(keysPressedRef.current["d"] ? step : 0) +
					(keysPressedRef.current["a"] ? step : 0),
				y:
					offsetRef.current.y -
					(keysPressedRef.current["s"] ? step : 0) +
					(keysPressedRef.current["w"] ? step : 0),
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
			className="fixed inset-0 z-0"
			style={{
				backgroundImage: `url(${bgimg})`,
				backgroundRepeat: "repeat",
				backgroundPosition: `${offset.x}px ${offset.y}px`,
			}}
		/>
	);
}
