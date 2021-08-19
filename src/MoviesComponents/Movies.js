import React from 'react'
import "./Movies.css";
const Movies = ({ Data, handleName }) => {
  return (
    <div onClick={() => handleName(Data.name)}>
      <div className="wrapper">
        <div className="main_card">
          <div className="card_left">
            <div className="card_datails">
              <h1>{Data.name}</h1>
              <div className="card_cat">
                <p className="PG">PG - 13</p>
                <p className="year">{Data.date}</p>
                <p className="genre">{Data.type}</p>
                <p className="time">2h 28m</p>
              </div>
              <p className="disc">{Data.description}</p>
              <a href="https://www.imdb.com/title/tt4912910/" target="_blank">
                Read More
              </a>
              <div className="social-btn">
                {/* WATCH TRAILER*/}
                <button>
                  <i className="fas fa-play" /> SEE TRAILER
                </button>
                {/* GET*/}
                <button>
                  <i className="fas fa-download" /> DOWNLOAD
                </button>
                {/*USERS RATINGS*/}
                <button>
                  <i className="fas fa-thumbs-up" /> 97%
                </button>
                {/*BOOKMARK*/}
                <button>
                  <i className="fas fa-star" />
                  {Data.rating}
                </button>
              </div>
            </div>
          </div>
          <div className="card_right">
            <div className="img_container">
              <img src={Data.image} alt="movies" />
            </div>
            <div className="play_btn">
              <a href={Data.image} target="_blank" alt="movies">
                <i className="fas fa-play-circle" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    // <div>
    //   <h1>data from Movies Componenets</h1>
    //   <p>{Data.image}</p>
    //   <p>{Data.name}</p>
    //   <p>{Data.date}</p>
    //   <p>{Data.type}</p>
    //   <p>{Data.description}</p>
    // </div>
  );
};

export default Movies;

Movies.defaultProps = {
  Data: {
    id: Math.random(),
    image:
      "https://www.smallwoods.org.uk/assets/Uploads/Documents/ac72cd8e0a/product-default-img__PadWzQxMCwyNjAsIkZGRkZGRiIsMF0.jpg",
    rating: 4,
    name: "NO data",
    date: "NO data",
    type: "NO data",
    description: "NO data",
  },
};