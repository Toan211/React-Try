import React, { useState } from "react";
// import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function EditEmployee(props) {
	//NOTE - maintain state in this component, state variable
	const [name, setName] = useState(props.name);
	const [role, setRole] = useState(props.role);

	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			{/*onClick={handleShow} allow the modal to popup, Button is custom bootstrap component */}
			<button
				onClick={handleShow}
				class="transition duration-300 ease-out px-4 py-1 text-sm
                 text-purple-600 font-semibold rounded-full border
                  border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent
                   focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
			>
				Update
			</button>
			<Modal
				show={show}
				onHide={handleClose}
				backdrop="static"
				keyboard={false}
			>
				<Modal.Header closeButton>
					<Modal.Title>Update Employee</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<form onSubmit={(e)=>{
                        handleClose(); //automatic close the modal
                        e.preventDefault(); // prevent page refreshing
                        console.log('this is edit employee order');
                        //we dont change id, but we change the name and role from that id (id is the key)
                        //also, name and role is state variable from above in this js file
                        console.log(props.id, name, role);
                        props.updateEmployee(props.id, name, role);
                    }}
                    id="editModal" class="w-full max-w-sm">
						<div class="md:flex md:items-center mb-6">
							<div class="md:w-1/3">
								{/* label for -> input id name  */}
								<label
									class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
									for="name"
								>
									Full Name
								</label>
							</div>
							<div class="md:w-2/3">
								<input
									class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
									id="name"
									type="text"
									/*NOTE - defaultValue make everyone can change that value in the field 
                                    by default use value then use onChange event handler 
                                    when changing, we want the value being update*/
									// defaultValue="Jane Doe"
									value={name}
                                    /*NOTE - onChange now can pass the state from employee and keep the recent change in the modal field */
									onChange={(e) => {
										setName(e.target.value);
									}}
								/>
							</div>
						</div>
						<div class="md:flex md:items-center mb-6">
							<div class="md:w-1/3">
								{/* label for -> input id name  */}
								<label
									class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
									for="role"
								>
									Role
								</label>
							</div>
							<div class="md:w-2/3">
								<input
									class="bg-gray-200 appearance-none border-2 border-gray-200 
                                    rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none
                                     focus:bg-white focus:border-purple-500"
									id="role"
									type="text"
									value={role}
									onChange={(e) => {
										setRole(e.target.value);
									}}
								/>
							</div>
						</div>
						{/*if use button here, a button inside a form will automatically submit the form */}
					</form>
				</Modal.Body>
				<Modal.Footer>
					<button
						class="bg-slate-500 hover:bg-slate-800 text-white transition 
                        duration-300 ease-out font-semibold py-2 px-3 rounded"
						onClick={handleClose}
					>
						Close
					</button>
					{/* this button will communicate with the form from form id */}
					<button

						class="bg-purple-600 hover:bg-purple-800 text-white transition 
                        duration-300 ease-out font-semibold py-2 px-3 rounded"
						form="editModal"
					>
						Update
					</button>
				</Modal.Footer>
			</Modal>
		</>
	);
}

export default EditEmployee;
