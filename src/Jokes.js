import React, { useState, useEffect } from 'react';

const Jokes = () => {
	useEffect(() => {
		fetchJoke();
	}, []);

	const [randomJoke, setRandomJoke] = useState([]);

	const fetchJoke = async () => {
		const jokeData = await fetch('https://api.chucknorris.io/jokes/random');

		const joke = await jokeData.json();
		console.log(joke.value);
		setRandomJoke(joke.value);
	};

	return (
		<div>
			<h1>Joke Page</h1>
			<p>{randomJoke}</p>
		</div>
	);
};

export default Jokes;
