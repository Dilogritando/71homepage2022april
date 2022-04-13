import React from 'react';
import styles from "./StartSaving.module.scss";

const StartSaving = () => {
  return (
    <div className={styles.StartSaving__container}>
        <div className={styles.StartSaving__container__inner}>
            <div className={styles.StartSaving__content}>
                <button>
                    Start saving now
                </button>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem qui sed saepe, consequuntur consectetur, rem non ab necessitatibus cupiditate autem exercitationem quibusdam eveniet, aperiam voluptates quia perspiciatis! Temporibus, earum voluptas.
                </p>
            </div>
            <div className={styles.StartSaving__content}>
                <button>
                    Free Demo
                </button>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem qui sed saepe, consequuntur consectetur, rem non ab necessitatibus cupiditate autem exercitationem quibusdam eveniet, aperiam voluptates quia perspiciatis! Temporibus, earum voluptas.
                </p>
            </div>
        </div>
    </div>
  )
}

export default StartSaving
