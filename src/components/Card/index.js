import React from "react";

const Card = (pokemon) => {
  return (
    <div id={pokemon.id}>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <span>{pokemon.name}</span>
      <span>
        {pokemon.types.map((typeItem) => typeItem.type.name).join(", ")}
      </span>
    </div>
  );
};

export default Card;
