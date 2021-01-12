import React from "react";
import { Provider } from "react-redux";
import PokemonIndexContainer from "./../components/pokemon/pokemon_index_container";
import { HashRouter, Route } from "react-router-dom";
import PokemonDetailContainer from "./pokemon/pokemon_detail_container";

const Root = ({ store }) => (
  <HashRouter>
    <Provider store={store}>
      <PokemonIndexContainer />
      <Route path="pokemon/:id" component={PokemonDetailContainer} />
    </Provider>
  </HashRouter>
);

export default Root;
