// Dependencies
import React from "react";
import { connect } from "react-redux";

// Objects
import Coin from "./Coin";
import Loader from "react-loader-spinner";
import { fetchApi } from "../actions";

// Styles

const CoinList = props => {
  const fetchApi = event => {
    event.preventDefault();
    props.fetchApi();
  };

  if (props.isFetching) {
    return <Loader type="Puff" color="#00BFFF" height="100" width="100" />;
  }

  return (
    <div>
      <button onClick={fetchApi}>fetch API</button>
      {props.coinList.length > 0 ? (
        props.coinList.map(coin => {
          return <Coin coin={coin} key={coin.id} />;
        })
      ) : (
        <div> Hit fetch API to see coins </div>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  console.log("CoinList mapStateToProps state", state);
  return {
    error: state.error,
    isFetching: state.isFetching,
    coinList: state.coinList
  };
};
export default connect(
  mapStateToProps,
  { fetchApi }
)(CoinList);
