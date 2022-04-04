import React from 'react';
import {useEffect} from 'react';
// 99f9c1f9

const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=99f9c1f9"

const App = () => {

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        console.log(data.Search);
    } 

    useEffect(() => {
        searchMovies('IronMan');
    },[]);

    return (
        <h1>Hello</h1>
    );
}

export default App;