import { FC } from 'react';
import styles from './GameScene.module.css';
import useTypingEffect from '../../hooks/useTypingEffect';

interface SceneTextProps {
  sceneText: string;
}

const SceneText: FC<SceneTextProps> = ({ sceneText }) => {
  const textWithEffect = useTypingEffect(sceneText, 10);
  return (
    <div className={styles.sceneTextContainer}>
      <div className={styles.hiddenText}>{sceneText}</div>
      <div className={styles.sceneText}>{textWithEffect}</div>
    </div>
  );
};

export default SceneText;
