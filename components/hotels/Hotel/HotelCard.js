import React from "react";
// import { Link } from "react-router-dom";
import PropTypes from "prop-types";
// import "../Hotel/scss/card.scss";
import CardMedia from "./CardMedia";
import Booking from "./Booking";
import Link from "next/link"
import { Button } from 'reactstrap'

function HotelCard({ hotel, expanded }) {
  let actions = (
    <Button
    
      href={`/hotels/${hotel.id}`}
      className="card__link"
      title={`Резервирайте сега ${hotel.name}`}
    >
      Резервирайте сега
    
    </Button>
  );

  if (expanded) {
    actions = <Booking hotel={hotel} />;
  }

  return (
    <article className="card">
      <CardMedia hotel={hotel} />

      <div className="card-content">
        <Link href={`/hotels/${hotel.id}`} className="card__name">
          {hotel.name}
        </Link>
        <p className="card__description">{hotel.description}</p>

        {actions}
      </div>
    </article>
  );
}

HotelCard.defaultProps = {
  expanded: false,
};

HotelCard.propTypes = {
  hotel: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string.isRequired),
    stars: PropTypes.number.isRequired,
  }).isRequired,
};

export default HotelCard;
