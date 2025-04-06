import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { useEscapeKey } from '../../hooks/useEscapeKey';
import styles from './InventoryDisplay.module.css';

interface InventoryDisplayProps {
  show: boolean;
  inventory: string[];
  onClose: () => void;
}

export const InventoryDisplay: React.FC<InventoryDisplayProps> = ({ show, inventory, onClose }) => {
  const { t } = useLanguage();
  useEscapeKey(onClose, show);

  if (!show) return null;

  return (
    <div className={styles.inventoryDisplay}>
      <button className={styles.closeButton} onClick={onClose}>
        ×
      </button>
      {/* <div className={styles.header}>
        <h3>{t('inventoryMessages.title')}</h3>
      </div> */}
      {inventory.length === 0 ? (
        <p className={styles.emptyMessage}>{t('inventoryMessages.empty')}</p>
      ) : (
        <>
          <ul className={styles.itemList}>
            {inventory.map((item, index) => (
              <li
                key={index}
                className={styles.item}
                title={t(`itemDescriptions.${item}.description`)}
              >
                {t(`items.${item}`)}
              </li>
            ))}
          </ul>
          <p className={styles.hint}>{t('inventoryMessages.usage_hint')}</p>
        </>
      )}
    </div>
  );
};
