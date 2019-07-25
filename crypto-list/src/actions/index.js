import { FETCH_START, FETCH_SUCCESS, FETCH_FAILURE } from "./types";

export const fetchAPI = () => dispatch => {
  dispatch({ type: FETCH_START });
  axios
    .get(`https://api.coingecko.com/api/v3/coins/list`)
    .then(response => {
      console.log("GET response", response);
      dispatch({ type: FETCH_SUCCESS, payload: res.data });
    })
    .catch(error => console.log("GET error", error));
};
