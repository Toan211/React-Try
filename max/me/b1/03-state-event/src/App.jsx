import { useState } from 'react' // to use useState event and hook
// tell React that data changed and that will therefore cause React to update the UI.

import Header from './components/header/Header.jsx'

//REVIEW - if export like a default funtion
import CoreConcept from './components/CoreConcept.jsx'
//REVIEW - if export like a normal function
//import {CoreConcept} from './components/CoreConcept.jsx'

import TabButton from './components/TabButton.jsx'

import {CORE_CONCEPTS} from './data.js'



function App() {

  const [selectTopic, setSeclectTopic] = useState('Please click the button');
  //NOTE -  useState must be called directly inside of the component function (at very top level), not nested inside of some other code.

/*REVIEW -   the first element selectedTopic will be the current data snapshot for this component execution cycle,
      Now for the second elements, Always be a function can be executed to update this state,
         so to update this stored value, calling setSeclectTopic, 
          will also tell React that this component function here must be executed again.
*/

  function handleSelect(selectedButton){
    setSeclectTopic(selectedButton);
    console.log(selectTopic);
  }

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
            {/* static value from function */}
            {/* <TabButton onSelect={handleSelect}>Components</TabButton> */}
            
            {/* manually control and execute at will */}
            <TabButton onSelect={()=>handleSelect('Component')}>Components</TabButton>
            <TabButton onSelect={()=>handleSelect('JSX')}>JSX</TabButton>
            <TabButton onSelect={()=>handleSelect('Props')}>Props</TabButton>
            <TabButton onSelect={()=>handleSelect('Components')}>Components</TabButton>
          </menu>
          {selectTopic}
        </section>
			</main>
		</div>
	);
}

export default App;
