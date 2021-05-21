import { connect } from 'react-redux';
import Restaurant from './Restaurant';

function mapStateToProps(state) {
  return {
    restaurants: state.restaurants
  };
}

export default connect(mapStateToProps)(Restaurant);