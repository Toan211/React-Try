import "./App.css";
import Employee from "./components/Employee";

// nesting component, where father component contain child components
function App() {

	const showEmployees = true;
	/*put branket () when use several component*/
	return (
		<div className="App">
			{/*put js code inside branket to use js*/}
			
			{showEmployees ? (
				<> 	{/*child components*/}
					<Employee name="Cale" role="Intern"/>
					<Employee name="Bruh" />
					<Employee name="Lmao" />
				</> // <> is fragment
			) : (
				<p>you can not see the employee</p>
			)}
		</div>
	);
}

export default App;
