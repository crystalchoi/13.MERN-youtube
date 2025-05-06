import React, {useEffect, useState} from 'react'
import axios from "axios";


const Home = () => {
	const [books, setBooks]  = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true)
		axios.get("http://localhost:8000/Books/").then((res) => {
			setBooks(res.data.data);
			console.log(res.data.data);
			setLoading(false);
		})
	}, [])

	return (
		<>
			<h1> Home </h1>
		</>
	)
}

export default Home
