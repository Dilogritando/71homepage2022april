import React from "react";
import styles from "./LoginHome.module.scss";
import LoginForm from "../LoginForm/LoginForm";
/* import LoginPlaceholder from "../../public/PlaceholdersHome/LoginHome.png";
import Image from "next/image"; */

const LoginHome = () => {
  return (
    <div className={styles.LoginHome__container}>
      <div className={styles.LoginHome__copy}>
        <p>
          Open your account in seconds with your company name, email address,
          and phone.
        </p>
      </div>
      <div className={styles.LoginHome__Form}>
        <LoginForm />
      </div>
      <span>
        Insert your fedex.com/
        <wbr />
        ups.com credentials
      </span>
    </div>
  );
};

export default LoginHome;
