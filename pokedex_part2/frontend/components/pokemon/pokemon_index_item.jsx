import React from 'react';
import { Link } from "react-router-dom";

class PokemonIndexItem extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <li className="pokemon-index-item">
                <Link to={`/pokemon/${this.props.pokemon.id}`}>
                    <span>{this.props.pokemon.id}</span>
                    <span> </span>
                    <span>{this.props.pokemon.name}</span>
                    <img src={this.props.pokemon.imageUrl}/>
                </Link>
            </li>
        )
    }
}

export default PokemonIndexItem;