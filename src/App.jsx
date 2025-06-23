import React, { useState } from 'react';
import Header from './components/Header';
import Tabs from './components/Tabs';
import PokemonGrid from './components/PokemonGrid';
import './styles/index.css'


function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGen, setSelectedGen] = useState(1);

  return (
    <div className="app">
      <Header onSearch={setSearchTerm} />
      <Tabs selectedGen={selectedGen} onSelectGen={setSelectedGen} />
      <PokemonGrid selectedGen={selectedGen} searchTerm={searchTerm} />
    </div>
  );
}

export default App;
