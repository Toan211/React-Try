import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid"; //npm uuid
import NotFound from "../components/NotFound";
import DefinitionSearch from "../components/DefSearch";

export default function Definition() {
	const [word, setWord] = useState([]); // map go throught an array, so need []
	const [notFound, setNotFound] = useState(false);
	const [error, setError] = useState(false);
	//NOTE: useParam will take a word from our URL from our component (or definition link we define in route)
	let { search } = useParams();
	//define navigate
	const navigate = useNavigate();

	async function logJSONData() {
		let url = "https://api.dictionaryapi.dev/api/v2/entries/en/" + search;
		//let url2 = "https://httpstat.us/501";
		const response = await fetch(url);
		//console.log(response.status);
		if (response.status === 404) {
			setNotFound(true);
		} else if (response.status === 401) {
			navigate("/login");
		} else if (response.status === 500) {
			setError(true);
		}

		//TODO  catch all if all other response status code errors happen
		if (!response.ok) {
			setError(true);
			throw Error("Something went wrong, stop messing with our website"); // thrown error to be caught down below
		}

		const jsonData = await response.json();
		setWord(jsonData[0].meanings);
		//console.log(jsonData[0].meanings);
	}

	useEffect(() => {
		logJSONData().catch((e) => {
			console.log(e.message);
		});
		//let url = "https://api.dictionaryapi.dev/api/v2/entries/en/" + search;
		//let url2 = "https://httpstat.us/";
		/* fetch(url)
			.then((response) => {
				console.log(response.status);
				if (response.status === 404) {
					setNotFound(true);
				} else if (response.status === 401) {
					navigate("/login");
				} else if (response.status === 500) {
					//setServerError(true);
				}
				return response.json();
			})
			.then((data) => {
				setWord(data[0].meanings); 
				//console.log(data[0].meanings);
			}); */ //! warning: maybe the api will not yet finish -> problem -> create a turnary
	}, []); //execute just once

	if (notFound === true) {
		return (
			<>
				<NotFound />
				<Link to="/dictionary">Search again</Link>
			</>
		);
	} else if (error === true) {
		return (
			<>
				<p>Something went wrong and we are not at found, try again?</p>
				<Link to="/dictionary">Search again</Link>
			</>
		);
	} else
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
                        <h3>Search again?</h3>
                        <DefinitionSearch/>
					</>
				) : null}
				{/* if it is slow, then it will blank for a moment b4 it show up */}
			</>
		);
}
