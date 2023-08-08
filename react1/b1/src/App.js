import "./App.css";
import Employee from "./components/Employee";
import { useState } from "react"; //NOTE - variable associate with the display on the web page, use in VD3


/*SECTION - VD3 State (hook?)*/
// nesting component, where father component contain child components
function App() {
	
	const [role, setRole] = useState('dev');
	//NOTE - useState will take default value, role vs setRole is variable that will change
	//		 	with role is default value (dev), and setRole is whatever u change 
	const showEmployees = true;
	/*put branket () when use several component*/
	return (
		<div className="App">
			{/*put js code inside branket to use js*/}

			{showEmployees ? (
				<>
					{/*NOTE - onChange will be invoked anytimes we change the values
						to get what we type in the input, we use e to pass the function to e.target.value
						*/}
					<input
						type="text"
						onChange={(e) => {
							console.log(e.target.value);
							setRole(e.target.value)
							/*NOTE - never assign a value to the default variable directly
										always use set whatever state is 
							*/	
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
//!SECTION 3

export default App;
