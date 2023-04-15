import { useState, useEffect } from "react";

export default function Dictionary() {
	//*take value from input and display it on page
	const [word, setWord] = useState('');

    //*NOTE -  useEffect is a function => use different from useState
    /*
    ? this function take two argument (opt 2 is optional)
        * arg 1: call back funtion, pass into another funtion 
        ! we want it to be defined within our functional component (meaning inside the {} and Dictionary function)
     */

    /*REVIEW - Use effect execute once per page load & once per each change in state
                there was two console log, -> strict mode inside index.js (delete that)*/
    useEffect(()=>{
        // anything that update will appear in the console, even if the state dont display on the page
        // it will update the state as it executes after the state is update 
        console.log('state update',  word);
    }); //TODO: Limit what state useEffect cares about -> dependency array


	return (
		<>
			<input
				type="text"
				onChange={(e) => {
					setWord(e.target.value);
                    //NOTE - this will slow a character behind, meaning it not guaranteed to immediately getting that value
                    //console.log('state update',  word);
				}}
			/>
			<h1> Let's get the definition for {word}</h1>
		</>
	);
}
