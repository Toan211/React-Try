import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Dictionary() {
	//take value from input and display it on page
	const [word, setWord] = useState('');

    //define navigate
    const navigate = useNavigate(); //anytime we want to work with url, we will use this

	return (
		<>
			<input
				type="text"
				onChange={(e) => {
					setWord(e.target.value);
				}}
			/>	
            <button onClick={()=>{
                navigate('/definition/' + word) //u also can redirect them
            }}>Search</button>	
		</>
	);
}
