/* eslint-disable array-callback-return */
import '../CSS/Pokemon.css'
import { useState } from 'react'
import axios from 'axios'

export function Pokemon() {
  const [pokemonName, setPokemonName] = useState('')
  const [pokemon, setPokemon] = useState([])

  function handleFetch() {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((response) => {
        setPokemon(response.data)
        console.log(response.data)
      })
  }

  function handleInput(event) {
    setPokemonName(event.target.value)
  }

  return (
    <div className="poke-body">
      <input
        onChange={handleInput}
        type="text"
        name="search-poke"
        id="search"
        placeholder="search your pokemon"
      />
      <button className="poke-button" onClick={handleFetch}>
        Search Pokemon
      </button>
      <div className="poke-card">
        <h3 className="poke-name">{pokemon?.name}</h3>
        <h4 className="poke-order">Numero: {pokemon?.order}</h4>
        <h4 className="poke-order">
          HP: {pokemon.stats && pokemon.stats[0].base_stat}
          <br />
          ATK: {pokemon.stats && pokemon.stats[1].base_stat}
          <br />
          DEF: {pokemon.stats && pokemon.stats[2].base_stat}
        </h4>
        {pokemon.sprites && (
          <img
            className="poke-img"
            src={pokemon.sprites?.front_default}
            alt="img del pokemon"
          />
        )}
      </div>
    </div>
  )
}
