//this is components



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
            <h3>Employee {props.name}</h3>

            <p>{props.role ? props.role : "no role"}</p>

            {props.role ? <p>{props.role}</p> : <p>NO rule</p>}
    
        </>
    );
}

//!SECTION
//export it for outside can import
export default Employee;

