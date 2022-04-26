import React from 'react';
import styles from "./LoginForm.module.scss";

const LoginForm = () => {
  return (
    <div className={styles.LoginForm__container}>
       <div className={styles.LoginForm__content}>
        <h3>Register with</h3>
        <div  className={styles.LoginForm__content__image}>
          <img
            src="/assets/71assets/404MissingContent.png"
            alt="404 in construction"
          />
        </div>
        <h3>Or sign in with your credentials</h3>
       </div>
    </div>
  )
}

export default LoginForm
