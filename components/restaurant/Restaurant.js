import React, { Component } from "react";
import { viewRestaurant } from "../restaurant/redux/actions";
import RestaurantCard from "./RestaurantCard";
import PropTypes from "prop-types";

class Restaurant extends Component {
  state = {
    restaurant: null,
  };

  componentDidMount() {
    const { dispatch, match, restaurants } = this.props;
    dispatch(viewRestaurant(Number(match.params.id)));

    const restaurant = restaurants.find((h) => h.id === Number(match.params.id));

    if (restaurant) {
      this.setState({ restaurant });
    }
  }

  render() {
    const existed = !!this.state.restaurant;

    return (
      <section className="page">
        {existed && <RestaurantCard restaurant={this.state.restaurant} expanded />}
      </section>
    );
  }
}

Restaurant.propTypes = {
  restaurants: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Restaurant;
