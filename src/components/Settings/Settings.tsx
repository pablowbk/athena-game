import React, { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import LanguageSelector from '../LanguageSelector/LanguageSelector';
import styles from './Settings.module.css';

const Settings: React.FC = () => {
  const { t } = useLanguage();
  const [showSettings, setShowSettings] = useState(false);

  // Dispatch a custom event to trigger hard reset in Game
  const handleRestart = () => {
    const event = new CustomEvent('hardResetGame');
    window.dispatchEvent(event);
    setShowSettings(false);
  };

  const handleClose = () => {
    setShowSettings(false);
  };

  return (
    <>
      <button
        className={styles.settingsButton}
        onClick={() => setShowSettings(true)}
        aria-label="Settings"
        type="button"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="var(--text-color)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="3.5" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h.09a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51h.09a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v.09a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      </button>

      {showSettings && (
        <div className={styles.SettingsModal}>
          <div className={styles.backdrop} onClick={handleClose} />
          <div className={styles.modal} role="dialog" aria-modal="true">
            {/* Close Button */}
            <button className={styles.closeButton} onClick={handleClose} aria-label="Close">
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                stroke="var(--text-color)"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ display: 'block' }}
              >
                <line x1="6" y1="6" x2="16" y2="16" />
                <line x1="16" y1="6" x2="6" y2="16" />
              </svg>
            </button>

            <header>
              <h3>{t('settings')}</h3>
            </header>

            {/* Settings List */}
            {/* Language Select */}
            <div className={styles.section}>
              <span>{t('language')}:</span>
              <LanguageSelector />
            </div>

            {/* Reset game */}
            <footer className={styles.footer}>
              <button className={styles.restartButton} onClick={handleRestart} type="button">
                {t('resetGame')}
              </button>
            </footer>
          </div>
        </div>
      )}
    </>
  );
};

export default Settings;
