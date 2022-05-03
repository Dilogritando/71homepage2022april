import React from 'react';
import styles from "./StartSaving.module.scss";
import DividerLine from '../DividerLine/DividerLine';

const StartSaving = () => {
  return (
    <div className={styles.StartSaving__outer}>
        <div className={styles.StartSaving__container}>
            <div className={styles.StartSaving__container__inner}>
                <div className={styles.StartSaving__content}>
                    <button>
                        Start saving now
                    </button>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem qui sed saepe, consequuntur consectetur.
                    </p>
                </div>
                <div className={styles.StartSaving__content}>
                    <button>
                        Free Demo
                    </button>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem qui sed saepe, consequuntur consectetur.
                    </p>
                </div>
            </div>
        </div>
        <div className={styles.StartSaving__divider}>
            <DividerLine />
        </div>
    </div>
  )
}

export default StartSaving
