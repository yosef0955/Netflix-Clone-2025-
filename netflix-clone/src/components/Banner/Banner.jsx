import React, { useState, useEffect } from "react";
import requests from "../../utils/requests";
import axios from "../../utils/axios";
import { truncate } from "../../utils/truncate.js";
import "./Banner.css";

function Banner() {
  const [movie, setMovie] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const request = await axios.get(requests.fetchNetflixOriginals);
        setMovies(request.data.results); 
        setMovie(request.data.results[0]); 
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();

    const bannerInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % movies.length); 
    }, 3000); 

    return () => clearInterval(bannerInterval); 
  }, [movies.length]);

  useEffect(() => {
    if (movies.length > 0) {
      setMovie(movies[currentIndex]); 
    }
  }, [currentIndex, movies]);

  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url('https://image.tmdb.org/t/p/original${movie?.backdrop_path}')`,
        transition: "background-image 1s ease-in-out", // Slower transition for the banner image
      }}
    >
      <div className="banner__contents">
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner_buttons">
          <button className="banner__button play">Play</button>
          <button className="banner__button">My List</button>
        </div>

        <h1 className="banner__description">
          {truncate(movie?.overview, 150)}
        </h1>
      </div>
      <div className="banner__fadeBottom" />
    </div>
  );
}

export default Banner;
