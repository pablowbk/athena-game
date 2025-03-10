import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import styles from './LanguageSelector.module.css';

const LanguageSelector: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <select
      className={styles.selector}
      value={language}
      onChange={(e) => setLanguage(e.target.value as 'en' | 'es')}
      aria-label="Select language"
    >
      <option value="en">&#x1F1EC;&#x1F1E7;</option>
      <option value="es">&#x1F1E6;&#x1F1F7;</option>
    </select>
  );
};

export default LanguageSelector; 