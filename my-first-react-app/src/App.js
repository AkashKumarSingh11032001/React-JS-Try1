import React from 'react';
import { useState, useEffect } from 'react';
import './App.css'
import SearchIcon from './search.svg'
import MovieCard from './MovieCard'
// 99f9c1f9

const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=99f9c1f9"

// const movie1 = {
//     "Title": "Ironman Triathlon World Championship",
//     "Year": "1985",
//     "imdbID": "tt0480409",
//     "Type": "movie",
//     "Poster": "https://m.media-amazon.com/images/M/MV5BYjJiOWQwYzEtY2JmZS00NjYyLTkyOGMtOGM5YjQyNjAxZTdhXkEyXkFqcGdeQXVyMjE5MzM3MjA@._V1_SX300.jpg"
// }

const App = () => {

    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    // getting API data
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);
    }

    useEffect(() => {
        searchMovies('IronMan');
    }, []);

    return (
        <div className="app">
            <h1>MoviesLand</h1>

            <div className="search">
                <input
                    placeholder="Search for movies"
                    values= {searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <img
                    src={SearchIcon}
                    alt="search"
                    onClick={() => searchMovies(searchTerm)}
                />

            </div>

            {
                movies.length > 0
                    ? (
                        <div className="container">
                            {movies.map((movie) => (
                                <MovieCard movie={movie} />
                            ))}
                        </div>
                    ) :
                    (
                        <div className="empty">
                            <h2>No Movies found!</h2>
                        </div>
                    )

            }

        </div>
    );
}

export default App;