import React, { useState }  from "react";
import MovieCard from "./movieCard";

export default function SearchMovies(){
    const [query, setQuery] = useState('');//states- input query, movies
    const [movies, setMovies] = useState([]);//create the state for movies
    const [loading, setLoading] = useState(false);//create the state for loading
    const [error, setError] = useState(null);//create the state for error
    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();
        const url = `https://api.themoviedb.org/3/search/movie?api_key=7354f8c5f61a3aa3f92ba82516d29dd9&language=en-US&query=${query}&page=1&include_adult=false`;
        try {
            const res = await fetch(url);
            const data  = await res.json();
            setMovies(data.results);
        }catch(err){
            setError('Failed to fetch movies');
            setMovies([]);
        }finally {
            setLoading(false);
        }
    };
    return (
        <>
            <form className="form" onSubmit={handleSubmit}>
                <label className="label" htmlFor="query">Movie Name</label>
                <input className="input" type="text" name="query"
                    placeholder="i.e. Jurassic Park"
                    value={query} onChange={(e) => setQuery(e.target.value)}
                    />
                <button className="button" type="submit">Search</button>
            </form>
            {loading && <p className="flash info">Loading...</p>}
            {error && <p className="flash error">{error}</p>}
            {!loading && !error && (
                <div className="card-list">
                    {movies &&
                        movies
                            .filter((movie) => movie.poster_path)
                            .map((movie) => (
                                <MovieCard movie={movie} key={movie.id} />
                            ))}
                </div>
            )}
        </>
    )
}