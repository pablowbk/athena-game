import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageSelector: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <select
      className="language-selector"
      value={language}
      onChange={(e) => setLanguage(e.target.value as 'en' | 'es')}
      aria-label="Select language"
    >
      <option value="en">en</option>
      <option value="es">es</option>
    </select>
  );
};

export default LanguageSelector; 