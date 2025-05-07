import './App.css'
import { Routes, Route} from 'react-router-dom'
import Home from "./Pages/Home/Home.tsx";
import {useEffect, useState} from "react";
import axios from "axios";

function App() {

  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    // const fetchBooks = async () => {
    //   let result = await fetch('http://localhost:3000/Books');
    //   return result.json();
    // }
    // setBooks(fetchBooks());
    axios.get('http://localhost:8000/Books').then((response) => {
      setBooks(response.data.data);
      setLoading(false);
      console.log(response.data)
    }).catch((error) => {
      console.log(error);
      setLoading(false);
    })
  }, [])

  return (
    <>
      <Routes>
        <Route path="/" element={[<Home/>]}></Route>
      </Routes>
    </>
  )
}

export default App
