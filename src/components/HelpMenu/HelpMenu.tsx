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
        <li>
          <span className={styles.command}>{t('availableCommands.examine')}</span>{' '}
          <span>{t('availableCommands.examine_description')}</span>
        </li>
        <li>
          <span className={styles.command}>{t('availableCommands.take')}</span>{' '}
          <span>{t('availableCommands.take_description')}</span>
        </li>
        <li>
          <span className={styles.command}>{t('availableCommands.use')}</span>{' '}
          <span>{t('availableCommands.use_description')}</span>
        </li>
        <li>
          <span className={styles.command}>{t('availableCommands.attack')}</span>{' '}
          <span>{t('availableCommands.attack_description')}</span>
        </li>
        <li>
          <span className={styles.command}>{t('availableCommands.prepare')}</span>{' '}
          <span>{t('availableCommands.prepare_description')}</span>
        </li>
        <li>
          <span className={styles.command}>{t('availableCommands.help')}</span>{' '}
          <span>{t('availableCommands.help_description')}</span>
        </li>
        <li>
          <span className={styles.command}>{t('availableCommands.inventory')}</span>{' '}
          <span>{t('availableCommands.inventory_description')}</span>
        </li>
      </ul>
    </div>
  );
};
