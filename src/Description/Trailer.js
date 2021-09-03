import React from "react";
import Movies from "../MoviesComponents/Movies";
const Trailer = ({
  location: {
    state: { Data },
  },
  history,
  list,
  match,
}) => {
  // find movie with parametre id
  const movieMatch = list.find((e) => match.params.id == e.id);

  return (
    <div>
      {/* <Movies Data={Data} /> */}
      {/* the selected movie card  */}
      <Movies Data={movieMatch} />
      {/* trailer of selected movie*/}
      <iframe
        width="560"
        height="315"
        src={Data.trailer}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      {/* go back button with history router */}
      <button onClick={() => history.goBack()}>Go back</button>
    </div>
  );
};

export default Trailer;
