import React, { useState } from "react";
// import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

// add dont preload data, any data will be new
function AddEmployee(props) {
	//NOTE - empty string cus we dont need default value
	const [name, setName] = useState("");
	const [role, setRole] = useState("");
	const [img, setImg] = useState("");

	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const resetState = () => {
		setName("");
		setRole("");
		setImg("");
	};

	return (
		<>
			{/*onClick={handleShow} allow the modal to popup, Button is custom bootstrap component */}
			<button
				onClick={handleShow}
				class="transition duration-300 ease-out mx-auto block m-3
				bg-purple-600 hover:bg-purple-800 text-white font-semibold py-2 px-3 rounded"
			>
				+ Add Employee
			</button>
			<Modal
				show={show}
				onHide={handleClose}
				backdrop="static"
				keyboard={false}
			>
				<Modal.Header closeButton>
					<Modal.Title>Add Employee</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<form
						onSubmit={(e) => {
							resetState();
							e.preventDefault(); // prevent page refreshing
							props.newEmployee(name, role, img);
						}}
						id="editModal"
						class="w-full max-w-sm"
					>
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
									placeholder="Joe Mama"
									// defaultValue="Jane Doe"
									value={name}
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
									placeholder="Developer"
									value={role}
									onChange={(e) => {
										setRole(e.target.value);
									}}
								/>
							</div>
						</div>

						<div class="md:flex md:items-center mb-6">
							<div class="md:w-1/3">
								{/* label for -> input id name  */}
								<label
									class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
									for="img"
								>
									Image URL
								</label>
							</div>
							<div class="md:w-2/3">
								<input
									class="bg-gray-200 appearance-none border-2 border-gray-200 
                                    rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none
                                     focus:bg-white focus:border-purple-500"
									id="img"
									placeholder="No"
									type="text"
									value={img}
									onChange={(e) => {
										setImg(e.target.value);
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
						onClick={handleClose} //2nd way to do auto close form when click
						form="editModal"
					>
						Add
					</button>
				</Modal.Footer>
			</Modal>
		</>
	);
}

/*REVIEW - took a function from app.js, pass through a component,  */

export default AddEmployee;
