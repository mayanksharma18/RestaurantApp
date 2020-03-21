import { combineReducers } from 'redux';
import {
  fetchTopRestaurantsList as TopRestaurantsList,
  sortedData as sortedDataWithYear
} from './topRestaurants';

const rootReducer = combineReducers({
  TopRestaurantsList,
  sortedDataWithYear
});

export default rootReducer;
