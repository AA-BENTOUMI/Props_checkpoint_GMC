import React from 'react'
import Movies from "./Movies";

const MoviesCards = ({ Data, }) => {
  const handleName = (name) => alert(`this Movie's name is ${name}`);
    return (
      <div>
        <div>
          {Data.map((el, i) => (
            <Movies Data={el} key={i} handleName={handleName} />
          ))}
        </div>
      </div>
    );
}

export default MoviesCards;
