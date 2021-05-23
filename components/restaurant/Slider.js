import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Slider extends Component {

  constructor(props) {
    super(props);

    this.state = {
      images: [],
      selected: ''
    };

    this.clickThumb = this.clickThumb.bind(this);
  }

  componentDidMount() {
    const { restaurant } = this.props;

    this.setState({
      images: restaurant.images,
      selected: restaurant.images[0] || 'https://imgplaceholder.com/300x200'
    })
  }

  clickThumb(img) {
    this.setState({
      selected: img
    });
  }

  render() {
    const { restaurant } = this.props;
    const thumbs = this.state.images.map(image => (
      <div key={image} className="slider-thumbs__thumb" onClick={() => this.clickThumb(image)}>
        <img src={image} alt={restaurant.name} />
      </div>
    ));

    return (
      <div className="slider">
        <div className="slider-image">
          <img className="slider-image__img" src={this.state.selected} alt={restaurant.name} />
        </div>
        <div className="slider-thumbs">
          {thumbs}
        </div>
      </div>
    );
  }
}

Slider.propTypes = {
  restaurant: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string.isRequired),
    stars: PropTypes.number.isRequired
  }).isRequired
};

export default Slider;