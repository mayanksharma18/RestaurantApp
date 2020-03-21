import axios from "axios";

export default function fetchRestaurantsData() {
  return axios({
    method: "get",
    url: 'http://starlord.hackerearth.com/TopRamen',
    headers: {"Access-Control-Allow-Origin": "*"}
  });
}
