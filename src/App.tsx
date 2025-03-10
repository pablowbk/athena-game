import React from 'react';
import Game from './components/Game';
import { LanguageProvider } from './contexts/LanguageContext';
import LanguageSelector from './components/LanguageSelector/LanguageSelector';
import './styles/base.css';

const App: React.FC = () => {
	return (
		<LanguageProvider>
			<LanguageSelector />
			<div className="app">
				<Game />
			</div>
		</LanguageProvider>
	);
};

export default App; 