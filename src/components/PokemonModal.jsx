import React, { useEffect, useState } from 'react';
import '../styles/pokemonModal.css';

const typeColors = {
  normal: '#A8A77A',
  fire: '#EE8130',
  water: '#6390F0',
  electric: '#F7D02C',
  grass: '#7AC74C',
  ice: '#96D9D6',
  fighting: '#C22E28',
  poison: '#A33EA1',
  ground: '#E2BF65',
  flying: '#A98FF3',
  psychic: '#F95587',
  bug: '#A6B91A',
  rock: '#B6A136',
  ghost: '#735797',
  dragon: '#6F35FC',
  dark: '#705746',
  steel: '#B7B7CE',
  fairy: '#D685AD',
};

function PokemonModal({ pokemonId, onClose }) {
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    async function fetchDetails() {
      try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
        const data = await res.json();

        const speciesRes = await fetch(data.species.url);
        const speciesData = await speciesRes.json();

        const flavorText = speciesData.flavor_text_entries.find(
          (entry) => entry.language.name === 'en'
        );

        const evoRes = await fetch(speciesData.evolution_chain.url);
        const evoData = await evoRes.json();

        const evolutionLine = [];
        let evo = evoData.chain;
        while (evo) {
          evolutionLine.push(evo.species.name);
          evo = evo.evolves_to[0];
        }

        const weaknesses = [];
        for (const type of data.types) {
          const typeRes = await fetch(type.type.url);
          const typeData = await typeRes.json();
          typeData.damage_relations.double_damage_from.forEach((weak) => {
            if (!weaknesses.includes(weak.name)) weaknesses.push(weak.name);
          });
        }

        setPokemonData({
          name: data.name,
          sprite: data.sprites.front_default,
          types: data.types.map((t) => t.type.name),
          description: flavorText?.flavor_text || 'No description available.',
          evolutionLine,
          weaknesses,
        });
      } catch (error) {
        console.error('Error fetching Pokémon details:', error);
      }
    }

    fetchDetails();
  }, [pokemonId]);

  if (!pokemonData) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>X</button>
        <img src={pokemonData.sprite} alt={pokemonData.name} />
        <h2>{pokemonData.name.toUpperCase()}</h2>

        <p><strong>Types:</strong></p>
        <div className="type-container">
          {pokemonData.types.map((type) => (
            <span
              key={type}
              className="type-badge"
              style={{ backgroundColor: typeColors[type] || '#ccc' }}
            >
              {type.toUpperCase()}
            </span>
          ))}
        </div>

        <p><strong>Weaknesses:</strong></p>
        <div className="type-container">
          {pokemonData.weaknesses.map((type) => (
            <span
              key={type}
              className="type-badge"
              style={{ backgroundColor: typeColors[type] || '#ccc' }}
            >
              {type.toUpperCase()}
            </span>
          ))}
        </div>

        <p><strong>Evolution Line:</strong> {pokemonData.evolutionLine.join(' → ')}</p>
        <p className="description">{pokemonData.description}</p>
      </div>
    </div>
  );
}

export default PokemonModal;
