import reactImg from "../../assets/react-core-concepts.png";

const reactDes = ["Fundamental ", "Core ", "To try "];

let genRandomInt = (max) => {
	return Math.floor(Math.random() * (max + 1));
};

//NOTE -  you can get away with no function name if it's default export, like this:
// export default function () {
export default function Header() {
	let genDes = reactDes[genRandomInt(reactDes.length)];
	return (
		<header>
			<img src={reactImg} alt="Stylized atom" />
			<h1>React Essentials</h1>
			<p>
				{genDes} React concepts you will need for almost any app you are going
				to build!
			</p>
		</header>
	);
}