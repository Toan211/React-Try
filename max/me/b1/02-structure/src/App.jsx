

import Header from './components/header/Header.jsx'

//REVIEW - if export like a default funtion
import CoreConcept from './components/CoreConcept.jsx'
//REVIEW - if export like a normal function
//import {CoreConcept} from './components/CoreConcept.jsx'

import TabButton from './components/TabButton.jsx'

import {CORE_CONCEPTS} from './data.js'



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

        <section id='examples'>
          <h2>Example</h2>
          <menu>
            <TabButton>Components</TabButton>
            <TabButton>Components</TabButton>
            <TabButton>Components</TabButton>
            <TabButton>Components</TabButton>
          </menu>
        </section>
			</main>
		</div>
	);
}

export default App;
