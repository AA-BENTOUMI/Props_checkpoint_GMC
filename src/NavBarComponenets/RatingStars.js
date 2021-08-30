import React from "react";
import Rating from "@material-ui/lab/Rating";

const RatingStars = (props) => {
  const getStarsValue = (e) => {
    props.starsrate(e.target.value);
  };
  return (
    <div>
      <Rating name="size-medium" value={1} onClick={getStarsValue} />
    </div>
  );
};
export default RatingStars;
