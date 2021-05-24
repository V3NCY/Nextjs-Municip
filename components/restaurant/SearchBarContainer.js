import { connect } from 'react-redux';
import SearchBar from './SearchBar.js';

function mapStateToProps(state) {
  return {

    search_key: state.search_key
  }
}

export default connect(mapStateToProps)(SearchBar);