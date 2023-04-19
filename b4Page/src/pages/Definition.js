import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid"; //npm uuid
import NotFound from "../components/NotFound";

export default function Definition() {
	const [word, setWord] = useState([]); // map go throught an array, so need []
	const [notFound, setNotFound] = useState(false);
	//NOTE: useParam will take a word from our URL from our component (or definition link we define in route)
	let { search } = useParams();
	//define navigate
	const navigate = useNavigate();

	async function logJSONData() {
		const response = await fetch(
			"https://api.dictionaryapi.dev/api/v2/entries/en/" + search
		);
		if (response.status === 404) {
			setNotFound(true);
		}

		const jsonData = await response.json();
		setWord(jsonData[0].meanings);
		//console.log(jsonData[0].meanings);
	}

	useEffect(() => {
		logJSONData();
		/* fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + search)
			.then((response) => response.json())
			.then((data) => {
				setWord(data[0].meanings);

				//console.log(data[0].meanings);
			}); */ //! warning: maybe the api will not yet finish -> problem -> create a turnary
	}, []); //execute just once

	if (notFound === true) {
		return (
			<>
				<NotFound />
                <Link to='/dictionary' >Search again</Link>
			</>
		);
	}
	return (
		<>
			{word ? (
				<>
					<h2>Here is a definition: </h2>
					{word.map((meaning) => {
						return (
							<>
								<p key={uuidv4()}>
									{meaning.partOfSpeech}: {meaning.definitions[0].definition}
								</p>
							</>
						);
					})}
				</>
			) : null}
			{/* if it is slow, then it will blank for a moment b4 it show up */}
		</>
	);
}
