import fetchRestaurantsData from "../../api/fetchListApiCall";
import { datawithYearRankingSorted } from '../../utils/Restaurants'

export const FETCH_TOP_RESTAURANTS_LIST = "FETCH_TOP_RESTAURANTS_LIST";
export const FETCH_TOP_RESTAURANTS_LIST_SUCCESS =
  "FETCH_TOP_RESTAURANTS_LIST_SUCCESS";
export const FETCH_TOP_RESTAURANTS_LIST_FAILURE =
  "FETCH_TOP_RESTAURANTS_LIST_FAILURE";
export const UPDATED_TOP_RESTAURANTS_LIST_SORTED_BY_YEAR = "UPDATED_TOP_RESTAURANTS_LIST_SORTED_BY_YEAR";  

export function fetchingList() {
  return {
    type: FETCH_TOP_RESTAURANTS_LIST
  };
}

export function fetchingListSuccess(payload) {
  return {
    type: FETCH_TOP_RESTAURANTS_LIST_SUCCESS,
    data: payload
  };
}
export function fetchingListFail() {
  return {
    type: FETCH_TOP_RESTAURANTS_LIST_FAILURE
  };
}

export function sortedRankingsWithYear(data) {
  return {
    type: UPDATED_TOP_RESTAURANTS_LIST_SORTED_BY_YEAR,
    data : datawithYearRankingSorted(data)
  }
}

const intialState = [];

export function fetchTopRestaurantsList(state = intialState, action) {
  switch (action.type) {
    case FETCH_TOP_RESTAURANTS_LIST_SUCCESS:
      return [...state, ...action.data];
    case FETCH_TOP_RESTAURANTS_LIST:
    case FETCH_TOP_RESTAURANTS_LIST_FAILURE:
      return state;
    default:
      return state;
  }
}
export function sortedData (state=intialState,action) {
  switch(action.type) {
    case UPDATED_TOP_RESTAURANTS_LIST_SORTED_BY_YEAR:
      return [...state,...action.data]
      default:
        return state;
  }

}
export function fetchTopRestaurantsListThunk() {
  return (dispatch) => {
    dispatch(fetchingList());
    fetchRestaurantsData()
      .then(res => {
        dispatch(fetchingListSuccess(res.data));
      })
      .catch((err) => {
        dispatch(fetchingListFail());
        return err
      });
  };
}

// export default {
//   RestaurantsList: fetchTopRestaurantsList,
//   SortedData: sortedData
// };