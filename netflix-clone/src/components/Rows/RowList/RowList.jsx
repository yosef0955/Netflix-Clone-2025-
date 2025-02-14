import React, { useState } from "react";
import Row from "../Row/Row.jsx";
import YouTube from "react-youtube";
import "./RowList.css"; 
import requests from "../../../utils/requests.jsx";


function RowList() {
  const [trailerUrl, setTrailerUrl] = useState("");

  return (
    <div className="rowList">
      {/* Only show trailer when there's a valid URL */}
      {trailerUrl && (
        <div className="trailer_container">
          <YouTube videoId={trailerUrl} opts={{ height: "390", width: "100%" }} />
        </div>
      )}

      <Row title="Top Rated" fetchUrl={requests.fetchTopRatedMovies} isLargeRow />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      <Row title="TV Shows" fetchUrl={requests.fetchTvShow} />
    </div>
  );
}

export default RowList;
