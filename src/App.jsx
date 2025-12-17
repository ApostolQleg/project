import { Routes, Route } from "react-router-dom";
import Menu from "./pages/Menu.jsx";
import Game from "./pages/Game.jsx";
import NotFound from "./pages/NotFound.jsx";

export default function App() {
	return (
		<div className="min-h-screen bg-gray-900 text-gray-300 flex flex-col flex-1">
			<Routes>
				<Route path="/" element={<Menu />} />
				<Route path="/game" element={<Game />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</div>
	);
}
