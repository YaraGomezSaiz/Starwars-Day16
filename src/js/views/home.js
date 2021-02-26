import React, { useState, useEffect } from "react";
import "../../styles/home.scss";

import Card2 from "../component/card.jsx";

export default function Home() {
	const [planets, setPlanets] = useState([]);
	const [character, setCharacter] = useState({ result: { properties: { name: "", gender: "" } } });
	const [characters, setCharacters] = useState({ results: [] });
	const [fetchCharactersEnd, setFetchCharactersEnd] = useState(false);

	let ArrayCharacters;
	let baseURL = "https://www.swapi.tech/api/";

	function fetchGET(baseURL, extURL, result, end) {
		end = false;
		fetch(baseURL + extURL, {
			method: "GET",
			headers: {
				"Content-Type": "application/json"
			}
		})
			.then(res => res.json())
			.then(responseJson => {
				result(responseJson);
				end = true;
			});
	}

	//OBTENER LISTADO COMPLETO AL CARGAR LA PAGINA
	useEffect(() => {
		// fetchGET(baseURL, "planets/", setPlanets, setPlanetsLoad);
		fetchGET(baseURL, "people/", setCharacters, setFetchCharactersEnd);
	}, []);

	if (fetchCharactersEnd) {
		fetchGET(baseURL, "people/1", setCharacter);
		console.log("hola");
	}

	return (
		<div className="text-center mt-5">
			{/* <Card2
				title={character.result.properties.name}
				gender={character.result.properties.gender}
				hairColor={character.result.properties.hair_color}
				eyesColor={character.result.properties.eye_color}
				url={character.result.properties.url}
			/> */}
			{characters.results.length}
			{character.result.properties.name}
			{/* <ul>
				{characters.results.map(character => {
					return "hola";
				})}
			</ul> */}
		</div>
	);
}
