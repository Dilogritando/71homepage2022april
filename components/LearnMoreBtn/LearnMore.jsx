import React from 'react';
import styles from "./LearnMore.module.scss";

const LearnMore = ({redirectLink}) => {
  return (
    <div className={styles.LearnMore__container}>
        <a href={redirectLink}>
            Learn More
        </a>
    </div>
  )
}

export default LearnMore
