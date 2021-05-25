import React from "react";
import PropTypes from "prop-types";
import CardMedia from "./CardMedia.js";
import Booking from "./Booking.js";
import Link from "next/link"
import { Button } from "reactstrap"


function RestaurantCard({ restaurant, expanded }) {
  let actions = (
    <Button
      href={`/restaurants/${restaurant.id}`}
      className="card__link"
      title={`Резервирайте сега ${restaurant.name}`}
    >
      Резервирайте сега
    </Button>
  );

  if (expanded) {
    actions = <Booking restaurant={restaurant} />;
  }

  return (
    <article className="card">
      <CardMedia restaurant={restaurant} />

      <div className="card-content">
        <Link href={`/restaurants/${restaurant.id}`} className="card__name">
          {restaurant.name}
        </Link>
        <p className="card__description">{restaurant.description}</p>

        {actions}
      </div>
    </article>
  );
}

RestaurantCard.defaultProps = {
  expanded: false,
};

RestaurantCard.propTypes = {
  restaurant: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string.isRequired),
    stars: PropTypes.number.isRequired,
  }).isRequired,
};

export default RestaurantCard;
