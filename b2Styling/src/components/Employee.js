//this is components

import EditEmployee from "./EditEmployee";

/*REVIEW - VD2
        1. props allow us to pass specific values for diff variable from a template components to main component
        2.1. When inside HTML tag, no quote around string, variable inside {}
                        vd: <p>{props.role ? props.role : "no role"}</p>
                                stricter than opt 2 since this's fixed, can only put in paragraph 
        2.2. Likewise, while inside {}, dont need them around variable, but need "quote" around string
                        vd: {props.role ? <p>{props.role}</p> : <p>NO rule</p>}
                                easier and more flexible, can add class in tag p too 
        2.3. If u use HTML tag in {}, then go back to 2.1 
 */

//SECTION
function Employee(props) {
	return (
		<>
			<div class="min-w-[350px] max-w-[350px] m-2 py-8 px-8 bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
				<img
					class="object-cover h-[100px] w-[100px] block mx-auto rounded-full sm:mx-0 sm:shrink-0"
					src={props.img}
					alt="face"
				/>
				<div class="text-center space-y-2 sm:text-left">
					<div class="space-y-0.5">
						<p class="text-lg text-black font-semibold">{props.name}</p>
						<p class="text-slate-500 font-medium">{props.role}</p>
					</div>
					<EditEmployee name={props.name} role={props.role} />
					{/* provive the name and role to the modal field */}
				</div>
			</div>
		</>
	);
}

//!SECTION
//export it for outside can import
export default Employee;
