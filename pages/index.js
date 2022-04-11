import React, { useState } from "react";
import styles from "../styles/Home.module.scss";
import MainHomeMarch2022 from "../components/MainHome/MainHomeMarch2022.js";

export default function Home() {
  return (
    <div className={styles.Home__container}>
      <MainHomeMarch2022 />
    </div>
  );
}
