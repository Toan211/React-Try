import "./index.css";
//import { useState } from "react"; //NOTE - variable associate with the display on the web page
//import { v4 as uuidv4 } from "uuid"; //npm uuid
import { BrowserRouter, Routes, Route } from "react-router-dom";

//page components
import Employees from "./pages/Employees";
import Customers from "./pages/Customers";
import Dictionary from "./pages/Dictionary";
import Definition from "./pages/Definition";

// element component
import Header from "./components/Header";
import NotFound from "./components/NotFound";

// nesting component, where father component contain child components
function App() {
	/*put branket () when use several component*/
	return (
		<>
			{/*ANCHOR - BrowserRouter surround all our route */}
			<BrowserRouter>
				{/*NOTE - header wrapping employee component */}
				<Header>
					<Routes>
						{/*ANCHOR - structure of making a route: path = path and element = component */}
						<Route path="/employees" element={<Employees />} />
						<Route path="/dictionary" element={<Dictionary />} /> {/* // we are going to use search bar here */}
						<Route path="/dictionary/:search" element={<Definition />} />
						<Route path="/customers" element={<Customers />} />
						<Route path="/404" element={<NotFound />} />  {/* we want to catch all the garbage link in our link too*/}
						<Route path="*" element={<NotFound />} /> {/* * mean anything beside the link we define*/}
					</Routes>
				</Header>
			</BrowserRouter>
		</>
	);
}

export default App;
