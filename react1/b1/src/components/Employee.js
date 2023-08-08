//this is components

//SECTION - VD1 components
//template, cookie cutter???
/* 
function Employee(){
    //can return html code
    return <h3>Here is an employee</h3>
}
*/
//!SECTION 1


//SECTION - VD2 props (ctrl k u to uncomment)
// function Employee(props) {
// 	//NOTE - dont try to assign props in this child component, change them in parent component
// 	return (
// 		<>
// 			{/*put inside {} to render stuff*/}
// 			<h3>Employee {props.name}</h3>

// 			{/* two opt,  */}
// 			<p>{props.role ? props.role : "no role"}</p>
// 			{/* strict than opt 2 since this's fixed, can only put in paragraph */}

// 			{props.role ? <p>{props.role}</p> : <p>NO rule</p>}
// 			{/* easier and more flexible, can add class in tag p too */}
 
// 		</>
// 	);
// }

/*REVIEW - VD2
        1. props allow us to pass specific values for diff variable from a template components to main component
        2.1. When inside HTML tag, no quote around string, variable inside {}
        2.2. Likewise, while inside {}, dont need them around variable, but need "quote" around string
            2.3. If u use HTML tag in {}, then go back to 2.1 
 */

//!SECTION 2

//SECTION - VD3 props (ctrl k u to uncomment)            
function Employee(props) {
    return (
        <>
            <h3>Employee {props.name}</h3>

            <p>{props.role ? props.role : "no role"}</p>

            {props.role ? <p>{props.role}</p> : <p>NO rule</p>}
    
        </>
    );
}

//export it for outside can import
export default Employee;

