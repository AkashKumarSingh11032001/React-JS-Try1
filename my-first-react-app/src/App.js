import React from 'react';
import { useEffect } from 'react';
import './App.css'
import SearchIcon from './search.svg'
// 99f9c1f9

const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=99f9c1f9"

const App = () => {

    // getting API data
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        console.log(data.Search);
    }

    useEffect(() => {
        searchMovies('IronMan');
    }, []);

    return (
        <div className="app">
            <h1>MoviesLand</h1>
        </div>
    );
}

export default App;