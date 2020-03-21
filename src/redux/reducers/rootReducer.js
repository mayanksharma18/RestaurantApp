import { combineReducers } from 'redux'
import { fetchTopRestaurantsList, sortedData } from './topRestaurants';


const rootReducer = combineReducers({
  fetchTopRestaurantsList,
  sortedData
});

export default rootReducer