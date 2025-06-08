import React, { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import LanguageSelector from '../LanguageSelector/LanguageSelector';
import styles from './Settings.module.css';
import OpenSettingsButton from './OpenSettingsButton';
import CloseSettingsButton from './CloseSettingsButton';

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

  const handleOpenSettings = () => {
    setShowSettings(true);
  };

  return (
    <>
      {/* Open modal button */}
      <OpenSettingsButton openSettings={handleOpenSettings} />

      {/* Settings Modal */}
      {showSettings && (
        <div className={styles.SettingsModal}>
          <div className={styles.backdrop} onClick={handleClose} />
          <div className={styles.modal} role="dialog" aria-modal="true">
            {/* Close Button */}
            <CloseSettingsButton handleClose={handleClose} />

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
