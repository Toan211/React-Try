import "./index.css";
import Employee from "./components/Employee";
import { useState } from "react"; //NOTE - variable associate with the display on the web page

/*SECTION - VD3 State (hook?)*/
// nesting component, where father component contain child components
function App() {
	const [role, setRole] = useState("dev");
	const showEmployees = true;
	/*put branket () when use several component*/
	return (
		<div class="App">
			{/*put js code inside branket to use js*/}

			{showEmployees ? (
				<>
					<input
						type="text"
						onChange={(e) => {
							console.log(e.target.value);
							setRole(e.target.value);
						}}
					/>
					{/*child components*/}
					<div className="flex flex-wrap justify-center ">
						<Employee name="Cale" role="Intern" img="https://images.pexels.com/photos/13733057/pexels-photo-13733057.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
						<Employee name="Bruh" role={role} img="https://images.pexels.com/photos/13733057/pexels-photo-13733057.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
						<Employee name="Lmao" img="https://images.pexels.com/photos/13733057/pexels-photo-13733057.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
						<Employee name="Cale" role="Intern" img="https://images.pexels.com/photos/13733057/pexels-photo-13733057.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
						<Employee name="Bruh" role={role} img="https://images.pexels.com/photos/13733057/pexels-photo-13733057.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
						<Employee name="Lmao" img="https://images.pexels.com/photos/13733057/pexels-photo-13733057.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
						<Employee name="Cale" role="Intern" img="https://images.pexels.com/photos/13733057/pexels-photo-13733057.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
						<Employee name="Bruh" role={role} img="https://images.pexels.com/photos/13733057/pexels-photo-13733057.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
						<Employee name="Lmao" img="https://images.pexels.com/photos/13733057/pexels-photo-13733057.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>

					</div>
				</> // <> is fragment
			) : (
				<p>you can not see the employee</p>
			)}
		</div>
	);
}
//!SECTION

export default App;
