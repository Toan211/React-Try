import "../index.css";
import { useState } from "react"; //NOTE - variable associate with the display on the web page
import { v4 as uuidv4 } from "uuid"; //npm uuid

//components
import Employee from "../components/Employee";
import AddEmployee from "../components/AddEmployee";
import EditEmployee from "../components/EditEmployee";
import Header from "../components/Header";

/*SECTION - VD11 Page*/
function Employees() {
	const [employees, setEmployees] = useState([
		{
			id: 1,
			name: "Cale",
			role: "Developer",
			img: "https://images.pexels.com/photos/13733057/pexels-photo-13733057.jpeg",
		},
		{
			id: 2,
			name: "Sal",
			role: "Intern",
			img: "https://images.pexels.com/photos/13733057/pexels-photo-13733057.jpeg",
		},
		{
			id: 3,
			name: "Ale",
			role: "Junior",
			img: "https://images.pexels.com/photos/13733057/pexels-photo-13733057.jpeg",
		},
		{
			id: 4,
			name: "Bulan",
			role: "Senior",
			img: "https://images.pexels.com/photos/13733057/pexels-photo-13733057.jpeg",
		},
		{
			id: 5,
			name: "Diluc",
			role: "Developer",
			img: "https://images.pexels.com/photos/13733057/pexels-photo-13733057.jpeg",
		},
		{
			id: 6,
			name: "Eula",
			role: "Tester",
			img: "https://images.pexels.com/photos/13733057/pexels-photo-13733057.jpeg",
		},
		{
			id: 7,
			name: "Fi",
			role: "Manager",
			img: "https://images.pexels.com/photos/13733057/pexels-photo-13733057.jpeg",
		},
	]);

	const updateEmployee = (id, newName, newRole) => {
		console.log("this is main function of update employee");
		//create a new list and replace the state it
		const updateEmployee = employees.map((emp) => {
			if (id == emp.id) {
				/*NOTE - ... expand attribute of employee, keyword: spreading
					for example, instead of ...emp, we can use:
						img: emp.img (since we have img in employee list
						id: emp.id
						and other attributes)
				If dont do this, and miss some attributes, then the web will alarm undefined
				 */
				return { ...emp, name: newName, role: newRole };
			}
			return emp;
		});
		setEmployees(updateEmployee);
	};

	const newEmployee = (name, role, img) => {
		const newEmployee = {
			id: uuidv4(),
			name: name,
			role: role,
			img: img,
		};
		setEmployees([...employees, newEmployee]);
	};

	const showEmployees = true;
	/*put branket () when use several component*/
	return (
		// need to set min height to make bg full screen
		<div className="App bg-gray-300 min-h-screen">
			
			{/*put js code inside branket to use js*/}

			{showEmployees ? (
				<>
					
					{/*child components*/}
					<div className="flex flex-wrap justify-center my-1">
						{
							// map funtion on an array that go thought elements and execute each one
							employees.map((employee) => {
								//define editEmployee in map list, this editEmployee is a component
								const editEmployee = (
									<EditEmployee
										id={employee.id}
										name={employee.name}
										role={employee.role}
										//use above function directly (same file)
										updateEmployee={updateEmployee}
									/>
								);
								// return multiple line use parentheses ();
								return (
									<Employee
										key={employee.id}
										id={employee.id}
										name={employee.name}
										role={employee.role}
										img={employee.img}
										//this will go directly to EditEmplyee, no need to pass through employee
										editEmployee={editEmployee}
									/>
								);
							})
						}
					</div>
					<AddEmployee newEmployee={newEmployee} />
				</> // <> is fragment
			) : (
				<p>you can not see the employee</p>
			)}
		</div>
	);
}
//!SECTION

/*REVIEW - Guid: globally unique identifier or Uuid: universal unique identifier (npm uuid) */

export default Employees;
