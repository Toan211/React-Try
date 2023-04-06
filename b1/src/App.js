import "./App.css";
import Employee from "./components/Employee";

// nesting component, where father component contain child components
function App() {
	console.log("show the list of the employees");
  
	const showEmployees = true;
	return (
		<div className="App">
			{/*put js code inside branket to use js*/}
      {console.log("inside the return")}
			{showEmployees ? (
				<>
					<Employee />
					<Employee />
					<Employee />
				</>
			) : (
				<p>you can not see the employee</p>
			)}
		</div>
	);
}

export default App;
