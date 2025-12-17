import Button from "../components/Button.jsx";

export default function Menu() {
	return (
		<div className="flex flex-col flex-1 justify-center items-center">
			<Button to="/game" onClick={() => {}}>
				Start
			</Button>
		</div>
	);
}
