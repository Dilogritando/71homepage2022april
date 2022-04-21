import React from 'react';
import Link from "next/link";
import styles from "./MainButton.module.scss";

const MainButton = ({buttonText, buttonRedirectLink}) => {
  return (
    <Link
        href={buttonRedirectLink}
    >
        <a
            className={styles.MainBtn}
        >
            {buttonText}
        </a>
    </Link>
  )
}

export default MainButton
