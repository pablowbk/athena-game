import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { useEscapeKey } from '../../hooks/useEscapeKey';
import styles from './HelpMenu.module.css';

interface HelpMenuProps {
  show: boolean;
  onClose: () => void;
}

export const HelpMenu: React.FC<HelpMenuProps> = ({ show, onClose }) => {
  const { t } = useLanguage();

  useEscapeKey(onClose, show);

  if (!show) return null;

  return (
    <div className={styles.helpBox}>
      <h3>{t('commandList.title')}</h3>
      <ul>
        <li>{t('availableCommands.examine')}</li>
        <li>{t('availableCommands.take')}</li>
        <li>{t('availableCommands.use')}</li>
        <li>{t('availableCommands.attack')}</li>
        <li>{t('availableCommands.prepare')}</li>
      </ul>
    </div>
  );
};
