import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Jokes = () => {
	const [newJoke, setNewJoke] = useState('');

	useEffect(() => {
		joke();
	}, []);

	const joke = () => {
		const getJoke = axios
			.get('https://api.chucknorris.io/jokes/random')
			.then(jokeData => {
				setNewJoke(jokeData.data.value);
			});
	};

	return (
		<div>
			<h1>Joke Page</h1>
			<p>{newJoke}</p>
		</div>
	);
};

export default Jokes;
