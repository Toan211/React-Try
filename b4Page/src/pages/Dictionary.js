import { useState, useEffect } from "react";

export default function Dictionary() {
	//take value from input and display it on page
	const [word, setWord] = useState('');
    const [word2, setWord2] = useState('');

    //*NOTE -  useEffect is a function => use different from useState
    /*
    ? this function take two argument (opt 2 is optional)
        * arg 1: call back funtion, pass into another funtion 
        ! we want it to be defined within our functional component (meaning inside the {} and Dictionary function)
        * arg 2: Restrict what state we care about for useEffect to be trigger -> dependency array
     */

    /*REVIEW - Use effect execute once per page load & once per each change in state*/
    useEffect(()=>{
        // anything that update will appear in the console, even if the state dont display on the page, executes after the state is update
        console.log('state update for w1 ' +  word);
    }, [word]); 

    useEffect(()=>{
        console.log('state update for w2 ' + word2);
    }, [word2]); 

    /*REVIEW no dependency array => update for any state change, and it will stack (not what we want)
                for example: it will update whenever word1 or word2 update
            empty dependency array [] => execute once        
                for example: it will update only when page load    
            value dependency array [word] => execute once        
                for example: it will update only when word1 state is update, but WONT update when word2 state is update   
                                and we can trust word1 is up to date, but word2 maybe outdate (useEffect will depend on word1 only)
        
    */
   //! useEffect can have multiple times with different dependency
    
 
	return (
		<>
			<input
				type="text"
				onChange={(e) => {
					setWord(e.target.value);
                    //NOTE - this log will slower than above a character, meaning it not guaranteed to immediately getting that value
                    //console.log('state update',  word);
				}}
			/>
			<h2> Let's get the definition for {word}</h2>

            <input
				type="text"
				onChange={(e) => {
					setWord2(e.target.value);
				}}
			/>
			<h2> Let's get the definition for {word2}</h2>
		</>
	);
}
