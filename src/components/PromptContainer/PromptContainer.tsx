import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { TextInputScene } from '../../types/game';
import styles from './PromptContainer.module.css';

interface PromptContainerProps {
  scene: TextInputScene;
  userInput: string;
  cursorOffset: number;
  hiddenTextRef: React.RefObject<HTMLDivElement>;
  errorMessage: string;
  handleTextInput: (e: React.FormEvent) => void;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const PromptContainer: React.FC<PromptContainerProps> = ({
  scene,
  userInput,
  cursorOffset,
  hiddenTextRef,
  errorMessage,
  handleTextInput,
  handleInputChange,
  handleKeyPress,
}) => {
  const { t } = useLanguage();

  return (
    <form onSubmit={handleTextInput} className={styles.textInput}>
      <p className={styles.promptInfo}>{t(scene.prompt)}</p>
      <div className={styles.textInputWrapper}>
        <div ref={hiddenTextRef} className={styles.hiddenText} aria-hidden="true">
          {userInput}
        </div>

        {/* Caret */}
        <div
          className={styles.cursor}
          style={{
            transform: `translateX(${cursorOffset}px)`,
          }}
        />

        {/* Prompt Input */}
        <input
          type="text"
          name="scenePrompt"
          value={userInput}
          onChange={handleInputChange}
          onKeyDown={handleKeyPress}
          placeholder={t('whatToDo_placeholder')}
          autoFocus
        />
      </div>
      {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
    </form>
  );
};

export default PromptContainer;
