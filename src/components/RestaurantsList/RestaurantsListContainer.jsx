import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchTopRestaurantsListThunk, sortedRankingsWithYear } from "../../redux/reducers/topRestaurants";
import { datawithYearRankingSorted, filterKeys } from '../../utils/Restaurants';
import RestaurantListByCountries from './RestaurantListByCountries/RestaurantListByCountries'

const mapStateToProps = state => {
   return {
     restaurantsData : state.TopRestaurantsList
   }
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    { fetchTopRestaurantsListThunk, sortedRankingsWithYear },
    dispatch
  )
});

class RestaurantsListContainer extends React.Component {
  
  
  componentDidMount() {
    const { actions } = this.props;
    actions.fetchTopRestaurantsListThunk();
  }

  componentDidUpdate() {
   this.updateSortedData();
  }

  updateSortedData = () => {
    const { restaurantsData, actions } = this.props;
     // eslint-disable-next-line no-console
   console.log(filterKeys('Country',restaurantsData));
    const data = datawithYearRankingSorted(restaurantsData)
    if(restaurantsData.length > 0 ) return actions.sortedRankingsWithYear(data);
    return null;
  }

  render() {
    const { restaurantsData } = this.props;
    return (
    <RestaurantListByCountries countries={filterKeys('Country',restaurantsData)}/>
    )
  }
};

RestaurantsListContainer.propTypes = {
  actions: PropTypes.shape({
    fetchTopRestaurantsListThunk: PropTypes.func.isRequired,
    sortedRankingsWithYear: PropTypes.func.isRequired,
  }),
  restaurantsData : PropTypes.array,
};
RestaurantsListContainer.defaultProps = {
  actions: {
    fetchTopRestaurantsListThunk: () => {},
    sortedRankingsWithYear: () => {},
  },
  restaurantsData: [],
};
export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsListContainer);
