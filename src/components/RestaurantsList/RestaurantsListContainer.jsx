import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchTopRestaurantsListThunk } from "../../redux/reducers/topRestaurants";
import { customfilterKeys, getRankingYears, fliterByYearRanking, datawithYearRankingSorted } from '../../utils/Restaurants';

const mapStateToProps = state => {
   return {
     restaurantsData : state.fetchTopRestaurantsList
   }
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ fetchTopRestaurantsListThunk }, dispatch)
});

class RestaurantsListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      xyz : "",
    };
  }

  componentDidMount() {
    const { actions } = this.props;
    actions.fetchTopRestaurantsListThunk();
    
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //    // eslint-disable-next-line no-console
  //   console.log('Hi',nextProps);
  //    // eslint-disable-next-line no-console
  //   console.log(nextState);
  //   // eslint-disable-next-line react/destructuring-assignment
  //   if(nextProps === this.props.restaurantsData) return true
  //   return false
  // }

  componentDidUpdate() {
    // eslint-disable-next-line no-console
    console.log("componentDidUpdate -> componentDidUpdate");
  }

  render() {
    const { restaurantsData } = this.props;
    const {xyz} = this.state
    // eslint-disable-next-line no-console
    console.log(datawithYearRankingSorted(restaurantsData));
    // eslint-disable-next-line no-console
    console.log(getRankingYears(restaurantsData));
    // eslint-disable-next-line no-console
    console.log(customfilterKeys("Country", restaurantsData));
    // eslint-disable-next-line no-console
    console.log(fliterByYearRanking("2016", restaurantsData));
    // eslint-disable-next-line no-console
    console.log(xyz);
    return <p>HI</p>;
  }
};

RestaurantsListContainer.propTypes = {
  actions: PropTypes.shape({
    fetchTopRestaurantsListThunk: PropTypes.func.isRequired
  }),
  // eslint-disable-next-line react/no-unused-prop-types
  restaurantsData : PropTypes.array,
};
RestaurantsListContainer.defaultProps = {
  actions: {
    fetchTopRestaurantsListThunk: () => {}
  },
  restaurantsData: [],
};
export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsListContainer);
