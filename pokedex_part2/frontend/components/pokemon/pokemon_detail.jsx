import React from "react";

class PokemonDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    debugger;
    const poke = this.props.pokemon;
    return (
      <ul>
        <li>{poke.name}</li>
        <li>{poke.attack}</li>
        <li>{poke.defense}</li>
        <li>{poke.type}</li>
        <li>{poke.moves[0]}</li>
        <li>{poke.items[0]}</li>
      </ul>
    );
  }
}

export default PokemonDetail;
