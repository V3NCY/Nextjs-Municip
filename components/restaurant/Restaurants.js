import React from "react";
import PropTypes from "prop-types";
import Card from "./RestaurantCard.js";
import SearchBar from "./SearchBarContainer.js";

function Restaurants({ restaurants }) {
  const count = restaurants.length > 0 ? `${restaurants.length} ` : "";
  const cards =
    restaurants.length > 0 ? (
      restaurants.map((h) => <Card key={h.id} restaurant={h} />)
    ) : (
      <p>Няма намерени ресторанти...</p>
    );

  return (
    <section className="page">
      <SearchBar />
      <h2 className="page__title">Всички ресторанти: {count}</h2>
      {cards}
    </section>
  );
}

Restaurants.propTypes = {
  restaurants: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Restaurants;
