/* eslint-disable @next/next/no-html-link-for-pages */
import React, { useState } from 'react';
import styles from "./LoginForm.module.scss";
import MainButton from "../MainButton/MainButton";

const LoginForm = () => {
  const [isNew, setIsNew] = useState(true)
  return (
    <div className={styles.LoginForm__container}>
      { isNew === true ?
        (
          <div className={styles.LoginForm__content}>
            <h3>Register with</h3>
            <div  className={styles.LoginForm__content__image}>
              <img
                src="/assets/BrandsLogos/btn_google_signin_light_normal_web.png"
                alt="Register to the 71Lbs dashboard using your Google credentials"
              />
            </div>
            <h3>Or using your credentials</h3>
            <form action="">
              <input
                type="text"
                id="name"
                name="name"
                placeholder='Name'
                required
              />
              <input
                type="email"
                id="mail"
                name="mail"
                placeholder='Mail'
                required
              />
              <input
                type="password"
                id="psw"
                name="psw"
                placeholder="Password"
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                required
              />
              <input
                type="checkbox"
                id="privacy"
                name="privacy"
                required
              />
              <label htmlFor="privacy">
                I agree with the{"  "}
                <a href="/privacy-policy">
                  Privacy Policy
                </a>
              </label>
            </form>
            <MainButton
              buttonText="JOIN"
              buttonRedirectLink="/"
            />
            <p>Already have an account?</p>
            <div className={styles.LoginForm__content__other}>
              <p onClick={()=>{setIsNew(false)}}>Login</p>
              <a href='/'>Forgot password?</a>
            </div>
          </div>
        )
        :
        (
          <div className={styles.LoginForm__content}>
            <h3>Login with</h3>
            <div  className={styles.LoginForm__content__image}>
              <img
                src="/assets/BrandsLogos/btn_google_signin_light_normal_web.png"
                alt="Register to the 71Lbs dashboard using your Google credentials"
              />
            </div>
            <h3>Or using your credentials</h3>
            <MainButton
              buttonText="JOIN"
              buttonRedirectLink="/"
            />
            <p>New to 71Lbs?</p>
            <div className={styles.LoginForm__content__other}>
              <p onClick={()=>{setIsNew(true)}}>Register</p>
              <a href='/'>Forgot password?</a>
            </div>
          </div>
        )
      }

    </div>
  )
}

export default LoginForm
