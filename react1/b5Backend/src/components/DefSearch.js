import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function DefinitionSearch(){
    //take value from input and display it on page
	const [word, setWord] = useState("");

	//define navigate
	const navigate = useNavigate(); //anytime we want to work with url, we will use this

	return (
		<form
			className="flex space-between space-x-2 max-w-[300px]"
			onSubmit={() => {
				//by default, the button will submit the form => can use enter key to submit it
				navigate("/dictionary/" + word);
			}}
		>
			<input
				className="px-2 py-1 rounded shrink min-w-0" // shrink when screen shrink, also h have to have min size
				placeholder="Type"
				type="text"
				onChange={(e) => {
					setWord(e.target.value);
				}}
			/>
			<button
				className="transition duration-300 ease-out
				bg-purple-600 hover:bg-purple-800 text-white font-semibold py-2 px-3 rounded"
			>
				Search
			</button>
		</form>
	);
}