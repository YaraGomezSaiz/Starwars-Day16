import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
//Import Boostrap components
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";

export default function Card2(props) {
	return (
		<Card style={{ width: "18rem" }}>
			<Card.Img variant="top" src="holder.js/100px180" />
			<Card.Body>
				<Card.Title>{props.title}</Card.Title>
				<Card.Text>
					<div>
						{" "}
						Gender:
						{props.gender}
					</div>
					<div>Hair Color: {props.hairColor}</div>
					<div>Eye-Color: {props.eyesColor}</div>
				</Card.Text>
				<Card.Link href={props.url}>Learn More</Card.Link>
			</Card.Body>
		</Card>
	);
}

Card2.propTypes = {
	title: PropTypes.string,
	gender: PropTypes.string,
	hairColor: PropTypes.string,
	eyesColor: PropTypes.string,
	url: PropTypes.string
};
