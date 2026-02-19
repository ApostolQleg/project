import Button from "../components/Button.jsx";

export default function Menu() {
	return (
		<div className="flex flex-col flex-1 items-center justify-center">
			<Button to="/game" onClick={() => {}}>
				Start
			</Button>
		</div>
	);
}
