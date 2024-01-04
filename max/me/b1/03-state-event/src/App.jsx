//NOTE - import { Fragment } from "react";
// use <Fragment> or <> so we can get a jsx value to return

import Header from "./components/header/Header.jsx";
import CoreConcepts from "./components/CoreConcepts.jsx";
import Examples from "./components/Examples.jsx";

function App() {
	return (
		<>
			<Header />
			<main>
				<CoreConcepts />
				<Examples />
			</main>
		</>
	);
}

export default App;
