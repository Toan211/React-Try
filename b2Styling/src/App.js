import "./index.css";
import Employee from "./components/Employee";
import { useState } from "react"; //NOTE - variable associate with the display on the web page


/*SECTION - VD3 State (hook?)*/
// nesting component, where father component contain child components
function App() {
	
	const [role, setRole] = useState('dev');
	const showEmployees = true;
	/*put branket () when use several component*/
	return (
		<div className="App bg-red-300">
			{/*put js code inside branket to use js*/}

			{showEmployees ? (
				<>
					<input
						type="text"
						onChange={(e) => {
							console.log(e.target.value);
							setRole(e.target.value)
						}}
					/>
					{/*child components*/}
					<Employee name="Cale" role="Intern" />
					<Employee name="Bruh"  role={role}/>
					<Employee name="Lmao" />
				</> // <> is fragment
			) : (
				<p>you can not see the employee</p>
			)}
		</div>
	);
}
//!SECTION 

export default App;
