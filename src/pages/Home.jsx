import Button from "../components/Button.jsx";

export default function Home() {
	return (
		<div className=" flex flex-col flex-1 justify-center items-center">
			<Button to="/start" onClick={() => {}}>
				Start
			</Button>
		</div>
	);
}
