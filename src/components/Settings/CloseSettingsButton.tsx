import { FC } from 'react';
import styles from './Settings.module.css';

interface CloseSettingsButtonProps {
  handleClose: () => void;
}

const CloseSettingsButton: FC<CloseSettingsButtonProps> = ({ handleClose }) => {
  return (
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
  );
};

export default CloseSettingsButton;
