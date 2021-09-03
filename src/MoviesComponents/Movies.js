import React from "react";
import "./Movies.css";
import Rating from "@material-ui/lab/Rating";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: "38%",
    display: "flex",
    flexDirection: "column",
    "& > * + *": {
      marginTop: theme.spacing(1),
    },
  },
}));
const Movies = ({
  Data: { id, name, date, type, description, image, rating, trailer },
  handleName,
}) => {
  const classes = useStyles();
  /*********** display list  movies   **********************/
  return (
    <div>
      <div className="wrapper">
        <div
          className="main_card"
          // onClick={() => handleName(Data.name)
        >
          <div className="card_left">
            <div className="card_datails">
              <h1>{name}</h1>
              <div className="card_cat">
                <p className="year">{rating}</p>
                <p className="genre">{type}</p>
                <p className="time">{date}</p>
              </div>
              <p className="disc">{description}</p>
              <a href="https://www.imdb.com/title/tt4912910/" alt="imagemovies">
                Read More
              </a>
              <div className="social-btn">
                <div>
                  <div className={classes.root}>
                    <Rating name="size-medium" value={parseInt(rating)} />
                  </div>
                </div>
                {/* link to the route  */}
                <Link
                  to={{
                    pathname: `/trailer/${id}`,
                    state: {
                      Data: {
                        id,
                        name,
                        date,
                        type,
                        description,
                        image,
                        rating,
                        trailer,
                      },
                    },
                  }}
                >
                  <button>
                    {" "}
                    <i className="fas fa-play" /> SEE TRAILER
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="card_right">
            <div className="img_container">
              <img src={image} alt={name} />
            </div>
            <div className="play_btn"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movies;
/***********  default Props  **********************/
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
