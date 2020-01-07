import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function PokeCard(props) {
    return (
        <a href={`/${props.ndex}`}>
            <div class={`${props.type} pokemon-pcard`}>
                <br/>
                <img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${props.ndex}.png`} alt={props.ndex} />
                <p class="text-left px-3 pb-3" key={props.ndex}>
                    <center>{props.nom}</center>
                    <br />
                    <strong>
                        <span>#{props.ndex}</span>
                    </strong>
                    <br />
                    {props.type}

                </p>
            </div>
        </a>

    )
}

export default PokeCard;
