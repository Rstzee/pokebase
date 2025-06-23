import React, { useEffect, useState } from 'react';
import PokemonModal from './PokemonModal';
import '../styles/pokemonGrid.css';
function PokemonGrid({ selectedGen, searchTerm }) {
    const [pokemonList, setPokemonList] = useState([]);
  const [selectedPokemonId, setSelectedPokemonId] = useState(null);

  useEffect(() => {
    async function fetchGenerationData() {
      try {
        const res = await fetch(`https://pokeapi.co/api/v2/generation/${selectedGen}`);
        const data = await res.json();
        const species = data.pokemon_species;

        const sortedSpecies = species.sort((a, b) => {
          const idA = parseInt(a.url.split('/')[6]);
          const idB = parseInt(b.url.split('/')[6]);
          return idA - idB;
        });

        setPokemonList(sortedSpecies);
      } catch (error) {
        console.error('Error fetching generation data:', error);
      }
    }

    fetchGenerationData();
  }, [selectedGen]);

  const filteredList = pokemonList.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchTerm)
  );

  return (
    <>
      <div className="pokemon-grid">
        {filteredList.map((pokemon) => {
          const id = pokemon.url.split('/')[6];
          const spriteUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

          return (
            <div
              key={id}
              className="pokemon-card"
              onClick={() => setSelectedPokemonId(id)}
            >
              <img src={spriteUrl} alt={pokemon.name} />
              <p>#{id} {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</p>
            </div>
          );
        })}
      </div>

      {selectedPokemonId && (
        <PokemonModal
          pokemonId={selectedPokemonId}
          onClose={() => setSelectedPokemonId(null)}
        />
      )}
    </>
  );
}

export default PokemonGrid;
