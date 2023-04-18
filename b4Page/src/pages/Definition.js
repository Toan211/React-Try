import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid"; //npm uuid

export default function Definition() {
	const [word, setWord] = useState([]); // map go throught an array, so need []

	useEffect(() => {
		fetch("https://api.dictionaryapi.dev/api/v2/entries/en/hello")
			.then((response) => response.json())
			.then((data) => {
				setWord(data[0].meanings);

				console.log(data[0].meanings);
			}); //! warning: maybe the api will not yet finish -> problem -> create a turnary
	}, []); //execute just once
	return (
		<>
			<h2>Here is a definition: </h2>
			{word
				? word.map((meaning) => {
						return (
							<>
								<p key={uuidv4()}>
									{meaning.partOfSpeech}: {meaning.definitions[0].definition}
                                   
                                    
								</p>
							</>
						);
				  })
				: null}
			{/* if it is slow, then it will blank for a moment b4 it show up */}
		</>
	);
}
