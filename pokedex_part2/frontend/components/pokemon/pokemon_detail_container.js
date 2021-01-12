import { connect } from "react-redux";
import { receiveSinglePokemon } from "../../actions/pokemon_actions";
import PokemonDetail from "./pokemon_detail";

const mapStateToProps = (state, ownProps) => {
  const pokeId = ownProps.match.params.id;
  debugger;
  return {
    pokemon: state.entities.pokemon[pokeId],
    items: Object.values(state.entities.items),
    moves: Object.values(state.entities.move),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestSinglePokemon: (poke_id) => dispatch(receiveSinglePokemon(poke_id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetail);
