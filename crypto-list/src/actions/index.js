// Dependencies
import axios from "axios";

// Objects

import { FETCH_START, FETCH_SUCCESS, FETCH_ERROR } from "./types";

export const fetchApi = () => dispatch => {
  dispatch({ type: FETCH_START });
  axios
    .get(`https://api.coingecko.com/api/v3/coins/list`)
    .then(response => {
      console.log("GET response", response);
      dispatch({ type: FETCH_SUCCESS, payload: response.data });
    })
    .catch(error => {
      console.log("GET error", error);
      dispatch({ type: FETCH_ERROR });
    });
};
