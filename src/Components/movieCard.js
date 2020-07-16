import React from 'react';

export default function movieCard({ movie }) {
    // const movie = props.movie;
    // const {movie} = props;
    const title = movie.title.substring(0, 25) + (movie.title.length > 25 ? '...' : '');
    const description = movie.overview.substring(0, 100) +(movie.overview.length > 100 ? '...' : '');
    return (
        <div className="card">
            <img
                className="card--image"
                src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                alt={movie.title + ' poster image'}
            />
            <div className="card--content">
                <h3 className="card--title">{title}</h3>
                <p><small>RELEASE DATE: {movie.release_date}</small></p> 
                <p><small>RATING: {movie.vote_average}</small></p>
                <p className="card--desc">{description}</p>
            </div>
        </div>
    );
}