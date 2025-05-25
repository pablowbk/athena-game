import React from 'react';
import Game from './components/Game';
import { LanguageProvider } from './contexts/LanguageContext';
import './styles/base.css';
import Settings from './components/Settings/Settings';

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <div className="app">
        <Settings />
        <Game />
      </div>
    </LanguageProvider>
  );
};

export default App;
