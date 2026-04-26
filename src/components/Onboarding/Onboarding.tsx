import React, { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import styles from './Onboarding.module.css';

const STEP_COUNT = 3;

interface OnboardingProps {
  onComplete: () => void;
}

const Onboarding: React.FC<OnboardingProps> = ({ onComplete }) => {
  const { t } = useLanguage();
  const [step, setStep] = useState(0);

  const goNext = () => {
    if (step < STEP_COUNT - 1) {
      setStep((s) => s + 1);
    } else {
      onComplete();
    }
  };

  const goBack = () => setStep((s) => Math.max(0, s - 1));

  const titles = [
    t('onboarding.step1Title'),
    t('onboarding.step2Title'),
    t('onboarding.step3Title'),
  ];

  return (
    <section className={styles.Onboarding} aria-labelledby="onboarding-title">
      <div className={styles.panel}>
        <h2 id="onboarding-title" className={styles.title}>
          {titles[step]}
        </h2>
        <div className={styles.progress} role="status" aria-label={t('onboarding.progressLabel')}>
          {Array.from({ length: STEP_COUNT }, (_, i) => (
            <span
              key={i}
              className={`${styles.dot} ${i === step ? styles.dotActive : ''}`}
              aria-hidden
            />
          ))}
        </div>
        <div className={styles.body}>
          {step === 0 && (
            <>
              <p>{t('onboarding.step1a')}</p>
              <p>{t('onboarding.step1b')}</p>
            </>
          )}
          {step === 1 && (
            <>
              <p>{t('onboarding.step2a')}</p>
              <p>
                <span className={styles.highlight}>{t('onboarding.step2b')}</span>
              </p>
              <p>{t('onboarding.step2c')}</p>
            </>
          )}
          {step === 2 && (
            <>
              <p>{t('onboarding.step3a')}</p>
              <p>{t('onboarding.step3b')}</p>
              <p>{t('onboarding.step3c')}</p>
            </>
          )}
        </div>
        <div className={styles.actions}>
          {step > 0 && (
            <button
              type="button"
              className={`${styles.button} ${styles.buttonSecondary}`}
              onClick={goBack}
            >
              {t('onboarding.back')}
            </button>
          )}
          <button type="button" className={styles.button} onClick={goNext}>
            {step < STEP_COUNT - 1 ? t('onboarding.next') : t('onboarding.begin')}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Onboarding;
