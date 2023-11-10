import reactImg from "./assets/react-core-concepts.png";
import reactImgComponents from "./assets/components.png";

const reactDes = ["Fundamental ", "Core ", "To try "];

let genRandomInt = (max) => {
	return Math.floor(Math.random() * (max + 1));
};

function Header() {
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

function CoreConcept(props) {
	return (
		<li>
			<img src={props.image} alt={props.title} />
			<h3>{props.title}</h3>
			<p>{props.des}</p>
		</li>
	);
}

function App() {
	return (
		<div>
			<Header />
			<main>
				<section id="core-concepts">
					<h2>Core concepts</h2>
          <ul>
            <CoreConcept
              title="Component"
              des="The core UI build block"
              image={reactImgComponents}
              />
              <CoreConcept
             
              />
              <CoreConcept
              
              />
              <CoreConcept
              
              />
          </ul>
				</section>
			</main>
		</div>
	);
}

export default App;
