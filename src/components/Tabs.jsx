import React from 'react';
import '../styles/Tabs.css';

function Tabs({ selectedGen, onSelectGen }) {
  const generations = [
    { label: 'Gen 1', id: 1 },
    { label: 'Gen 2', id: 2 },
    { label: 'Gen 3', id: 3 },
    { label: 'Gen 4', id: 4 },
    { label: 'Gen 5', id: 5 },
    { label: 'Gen 6', id: 6 },
    { label: 'Gen 7', id: 7 },
    { label: 'Gen 8', id: 8 },
    { label: 'Gen 9', id: 9 },
  ];

  return (
    <div className="tabs">
      {generations.map((gen) => (
        <button
          key={gen.id}
          className={`tab-button ${selectedGen === gen.id ? 'active' : ''}`}
          onClick={() => onSelectGen(gen.id)}
        >
          {gen.label}
        </button>
      ))}
    </div>
  );
}

export default Tabs;
