import reactImg from "./assets/react-core-concepts.png";
import {CORE_CONCEPTS} from './data.js'

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

//NOTE - normal usage
/* function CoreConcept(props) {
	return (
		<li>
			<img src={props.image} alt={props.title} />
			<h3>{props.title}</h3>
			<p>{props.description}</p>
		</li>
	);
} */

function CoreConcept({image, title, description}) {
	return (
		<li>
			<img src={image} alt={title} />
			<h3>{title}</h3>
			<p>{description}</p>
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
		  {/* //NOTE - normal usage
			<CoreConcept
              title="abc"
              description="abc"
              image={reactImg}
              /> */}
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
              />
              <CoreConcept {...CORE_CONCEPTS[1]}/>
              <CoreConcept {...CORE_CONCEPTS[2]}/>
              <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
				</section>
			</main>
		</div>
	);
}

export default App;
