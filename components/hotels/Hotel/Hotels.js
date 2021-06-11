import React from "react";
import PropTypes from "prop-types";
import HotelCard from "../Hotel/HotelCard";
import SearchBar from "../Hotel/SearchBarContainer";
// import SearchBar from "../Hotel/SearchBar"

function Hotels({ hotels }) {
  const count = hotels.length > 0 ? `${hotels.length} ` : "";
  const cards =
    hotels.length > 0 ? (
      hotels.map((h) => <HotelCard key={h.id} hotel={h} />)
    ) : (
      <p>Няма намерени хотели...</p>
    );

  return (
    <section className="page">
      <SearchBar />
      <h2 className="page__title">Всички хотели: {count}</h2>
      {cards}
    </section>
  );
}

Hotels.propTypes = {
  hotels: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Hotels;
