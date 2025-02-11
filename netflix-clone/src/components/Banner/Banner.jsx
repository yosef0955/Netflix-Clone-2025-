import React, { useState, useEffect } from 'react';
import requests from '../../utils/requests';
import axios from '../../utils/axios';
// import { truncate } from '../'; // Ensure this import is correct
import "./Banner.css"

function Banner() {
    const [movie, setMovie] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const request = await axios.get(requests.fetchNetflixOriginals);
                setMovie(request.data.results[
                    Math.floor(Math.random() * request.data.results.length)
                ]);
            } catch (error) {
                console.log("Error fetching data:", error);
            }
        };

        fetchData(); // Properly call the fetchData function
    }, []);

    return (
        <div className="banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url('https://image.tmdb.org/t/p/original${movie?.backdrop_path}')`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
            }}>
            <div className="banner__contents">
                <h1 className="banner_title">
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                <div className="banner_buttons">
                    <button className="banner__button play">Play</button>
                    <button className="banner__button">My List</button>
                </div>
                <h1 className="banner__description">
                    {/* {truncate(movie?.overview, 150)} */}
                </h1>
            </div>
            <div className="banner__fadeBottom" />
        </div>
    );
}

export default Banner;