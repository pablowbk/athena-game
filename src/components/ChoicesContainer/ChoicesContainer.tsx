import React from 'react';
import { Character, Choice, MultipleChoiceScene } from '../../types/game';
import { useLanguage } from '../../contexts/LanguageContext';
import styles from './ChoicesContainer.module.css';

interface ChoicesContainerProps {
  scene: MultipleChoiceScene;
  onChoice: (choice: Choice) => void;
  character: Character;
}

const ChoicesContainer: React.FC<ChoicesContainerProps> = ({ scene, onChoice, character }) => {
  const { t } = useLanguage();

  const availableChoices =
    'choices' in scene
      ? scene.choices.filter(
          (choice) => !choice.requiredCharacter || choice.requiredCharacter === character.type
        )
      : [];

  return (
    <div className={styles.choices} role="menu">
      {availableChoices?.map((choice, index) => (
        <button
          key={index}
          onClick={() => onChoice(choice)}
          className={styles.choiceButton}
          role="menuitem"
          tabIndex={0}
          type="button"
          autoFocus={availableChoices.length === 1}
        >
          {t(choice.text)}
        </button>
      ))}
    </div>
  );
};

export default ChoicesContainer;
