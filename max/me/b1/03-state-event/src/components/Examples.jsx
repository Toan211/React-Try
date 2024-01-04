import { useState } from "react"; // to use useState event and hook
// tell React that data changed and that will therefore cause React to update the UI.

import TabButton from "./TabButton.jsx";

import { EXAMPLES } from "../data.js";

export default function Examples() {
	const [selectTopic, setSeclectTopic] = useState();
	//NOTE -  useState must be called directly inside of the component function (at very top level), not nested inside of some other code.

	/*REVIEW -   the first element selectedTopic will be the current data snapshot for this component execution cycle,
      Now for the second elements, Always be a function can be executed to update this state,
         so to update this stored value, calling setSeclectTopic, 
          will also tell React that this component function here must be executed again.
*/

	function handleSelect(selectedButton) {
		setSeclectTopic(selectedButton);
		console.log(selectTopic);
	}

	/*REVIEW - //* 3 - use variable to store jsx code */
	let tabContent = <p>Please select a topic.</p>;

	if (selectTopic) {
		tabContent = (
			<div id="tab-content">
				<h3>{EXAMPLES[selectTopic].title}</h3>
				<p>{EXAMPLES[selectTopic].description}</p>
				<pre>
					<code>{EXAMPLES[selectTopic].code}</code>
				</pre>
			</div>
		);
	}

	return (
		<section id="examples">
			<h2>Example</h2>
			<menu>
				{/* static value from function */}
				{/* <TabButton onSelect={handleSelect}>Components</TabButton> */}

				{/* manually control and execute at will */}
				<TabButton
					isActived={selectTopic === "components"}
					onSelect={() => handleSelect("components")}
				>
					Components
				</TabButton>
				{/* Component is identifier */}
				<TabButton
					isActived={selectTopic === "jsx"}
					onSelect={() => handleSelect("jsx")}
				>
					JSX
				</TabButton>
				{/* isActived will yield true, if selectedTopic is equal to this components identifier, and false otherwise. */}
				<TabButton
					isActived={selectTopic === "props"}
					onSelect={() => handleSelect("props")}
				>
					Props
				</TabButton>
				<TabButton
					isActived={selectTopic === "state"}
					onSelect={() => handleSelect("state")}
				>
					State
				</TabButton>
			</menu>

			{/*REVIEW - //* 1 - use conditional tranditional if else */}
			{/* {!selectTopic ? (
						<p>Please select a topic.</p>
					) : (
						<div id="tab-content">
							<h3>{EXAMPLES[selectTopic].title}</h3>
							<p>{EXAMPLES[selectTopic].description}</p>
							<pre>
								<code>{EXAMPLES[selectTopic].code}</code>
							</pre>
						</div>
					)} */}

			{/*REVIEW - //* 2 - use AND operator */}
			{/* {!selectTopic && <p>Please select a topic.</p>}
					{selectTopic && (
						<div id="tab-content">
							<h3>{EXAMPLES[selectTopic].title}</h3>
							<p>{EXAMPLES[selectTopic].description}</p>
							<pre>
								<code>{EXAMPLES[selectTopic].code}</code>
							</pre>
						</div>
					)} */}

			{/*REVIEW - //* 3 - use variable to store jsx code */}
			{tabContent}
		</section>
	);
}
