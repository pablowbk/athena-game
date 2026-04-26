import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import type { Language } from '../../i18n/translations';
import styles from './LanguageSelector.module.css';

const LANGUAGES: { code: Language; label: string; flag: string }[] = [
  { code: 'en', label: 'English', flag: '\u{1F1EC}\u{1F1E7}' },
  { code: 'es', label: 'Español', flag: '\u{1F1E6}\u{1F1F7}' },
];

const LanguageSelector: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      className={styles.group}
      role="group"
      aria-label="Language"
    >
      {LANGUAGES.map(({ code, label, flag }) => {
        const selected = code === language;
        return (
          <button
            key={code}
            type="button"
            className={styles.button}
            data-active={selected}
            aria-pressed={selected}
            aria-label={selected ? `${label}, selected` : label}
            onClick={() => setLanguage(code)}
          >
            {flag}
          </button>
        );
      })}
    </div>
  );
};

export default LanguageSelector;
