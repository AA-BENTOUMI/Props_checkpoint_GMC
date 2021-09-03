import React from "react";
import Movies from "./Movies";

const MoviesCards = ({ list, searchedhWord, rateStars }) => {
  // const handleName = (name) => alert(`this Movie's name is ${name}`);

  return (
    <div>
      <div>
        {list
          .filter((movie) =>
            movie.name
              ? movie.name
                  .toLowerCase()
                  .includes(searchedhWord.toLowerCase()) &&
                movie.rating >= rateStars
              : list
          )
          .map((el, i) => (
            <Movies
              Data={el}
              key={el.id}
              // handleName={handleName}
            />
          ))}
      </div>
    </div>
  );
};

export default MoviesCards;
