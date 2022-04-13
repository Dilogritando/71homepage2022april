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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
          mollitia unde deleniti natus
        </p>
        <span>Insert your fedEx.com credentials</span>
      </div>
      <div className={styles.LoginHome__Form}>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginHome;
