import React, { useState, useEffect } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

export default function Home() {
	const [planets, setPlanets] = useState([]);
	let BaseURL = "https://www.swapi.tech/api/";

	// OBTENER LISTADO COMPLETO AL CARGAR LA PAGINA
	useEffect(() => {
		//method: GET para obtener el listado completo
		fetch(BaseURL + "planets/", {
			method: "GET", // *GET, POST, PUT, DELETE, etc.
			headers: {
				"Content-Type": "application/json"
				// 'Content-Type': 'application/x-www-form-urlencoded',
			}
		})
			.then(response => {
				return response.json();
			})
			.then(responseJson => {
				setPlanets(responseJson);
			});
	}, []);

	return (
		<div className="text-center mt-5">
			<h1>Hello Rigo!</h1>
			<p>
				<img src={rigoImage} />
			</p>
			<a href="#" className="btn btn-success">
				If you see this green button, bootstrap is working
			</a>
		</div>
	);
}
