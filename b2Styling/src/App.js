import "./index.css";
import Employee from "./components/Employee";
import { useState } from "react"; //NOTE - variable associate with the display on the web page
import {v4 as uuidv4} from 'uuid'; //npm uuid

/*SECTION - VD3 State (hook?)*/
// nesting component, where father component contain child components
function App() {
	const [role, setRole] = useState("dev");
	// array of employees, which have an object of each employee
	const [employees, setEmployees] = useState([
		{
			name: "Cale",
			role: "Developer",
			img: "https://images.pexels.com/photos/13733057/pexels-photo-13733057.jpeg",
		},
		{
			name: "Sal",
			role: "Intern",
			img: "https://images.pexels.com/photos/13733057/pexels-photo-13733057.jpeg",
		},
		{
			name: "Ale",
			role: "Junior",
			img: "https://images.pexels.com/photos/13733057/pexels-photo-13733057.jpeg",
		},
		{
			name: "Bulan",
			role: "Senior",
			img: "https://images.pexels.com/photos/13733057/pexels-photo-13733057.jpeg",
		},
		{
			name: "Diluc",
			role: "Developer",
			img: "https://images.pexels.com/photos/13733057/pexels-photo-13733057.jpeg",
		},
		{
			name: "Eula",
			role: "Tester",
			img: "https://images.pexels.com/photos/13733057/pexels-photo-13733057.jpeg",
		},
		{
			name: "Fi",
			role: "Manager",
			img: "https://images.pexels.com/photos/13733057/pexels-photo-13733057.jpeg",
		},
	]);
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
						{
							// map funtion on an array that go thought elements and execute each one
							employees.map((employee) => {
								// return multiple line use parentheses ();
								return (
									<Employee
									/*NOTE - id make each emplyee unique, so react can update that id only, instead of rerender all the page
									or just use uuid */
										key={uuidv4()}
										name={employee.name}
										role={employee.role}
										img={employee.img}
									/>
								);
							})
						}
					</div>
				</> // <> is fragment
			) : (
				<p>you can not see the employee</p>
			)}
		</div>
	);
}
//!SECTION

/*REVIEW - Guid: globally unique identifier or Uuid: universal unique identifier (npm uuid) */

export default App;
