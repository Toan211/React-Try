import "./index.css";
//import { useState } from "react"; //NOTE - variable associate with the display on the web page
//import { v4 as uuidv4 } from "uuid"; //npm uuid
import { BrowserRouter, Routes, Route } from "react-router-dom";

//page components
import Employees from "./pages/Employees";
import Customers from "./pages/Customers";

// element component
import Header from "./components/Header";

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

						<Route path="/customers" element={<Customers />} />
					</Routes>
				</Header>
			</BrowserRouter>
		</>
	);
}

export default App;
