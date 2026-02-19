import { Routes, Route } from "react-router-dom";
import Menu from "./pages/Menu.jsx";
import Game from "./pages/Game.jsx";
import NotFound from "./pages/NotFound.jsx";

export default function App() {
	return (
		<div className="flex flex-col min-h-screen">
			<Routes>
				<Route path="/" element={<Menu />} />
				<Route path="/game" element={<Game />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</div>
	);
}
