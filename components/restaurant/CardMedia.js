import React from "react";
import PropTypes from "prop-types";
import Slider from "./Slider.js";


function CardMedia({ restaurant }) {
  return (
    <div className="card-media">
      <span role="img" className="card-media__star my-2" aria-label="star">
        {" "}
        ⭐ {restaurant.stars}
      </span>
      <Slider restaurant={restaurant} />
    </div>
  );
}

CardMedia.propTypes = {
  restaurant: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string.isRequired),
    stars: PropTypes.number.isRequired,
  }).isRequired,
};

export default CardMedia;
