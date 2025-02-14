import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import "./Row.css";
import axios from "../../../utils/axios.jsx";
const API_KEY = import.meta.env.VITE_API_KEY;
import StarIcon from "@mui/icons-material/Star";

const base_Url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState(""); // ✅ NEW: State to store YouTube trailer URL

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const handleClick = async (movie) => {
    if (trailerUrl) {
      setTrailerUrl(""); // Close current trailer before opening a new one
    }

    try {
      const trailerRequest = await axios.get(
        `/movie/${movie.id}/videos?api_key=${
          import.meta.env.VITE_API_KEY
        }&language=en-US`
      );

      const trailer = trailerRequest.data.results.find(
        (video) => video.type === "Trailer"
      );

      if (trailer) {
        setTrailerUrl(trailer.key);
      }
    } catch (error) {
      console.error("Error fetching trailer:", error);
    }
  };

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row_posters">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="row_poster_container"
            onClick={() => handleClick(movie)} // ✅ NEW: Click to show trailer
          >
            <img
              src={`${base_Url}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
              className={`row_poster ${isLargeRow ? "row_posterLarge" : ""}`}
            />
            <div className="row_poster_overlay mt-2 ps-1">
              <p className="row_poster_title">
                {movie?.name ||
                  movie?.title ||
                  movie?.original_name ||
                  "Untitled Movie"}
              </p>
            </div>
            <div class="mov_desc ps-1">
              <p className="row_poster_release_date">
                {movie?.release_date
                  ? new Date(movie.release_date).getFullYear()
                  : ""}
              </p>
              <p className="row_poster_rating">
                {movie?.vote_average ? (
                  <>
                    Rating: {movie.vote_average}
                    <StarIcon
                      style={{
                        color: "yellow",
                        fontSize: "14px",
                        marginLeft: "5px",
                      }}
                    />
                  </>
                ) : (
                  "No Rating"
                )}
              </p>
            </div>
          </div>
        ))}
      </div>

      {trailerUrl && (
        <YouTube
          videoId={trailerUrl}
          opts={{ height: "390", width: "100%", playerVars: { autoplay: 1 } }}
          className="trailer_player"
        />
      )}
    </div>
  );
}

export default Row;
