import React, { useState } from "react";
import styles from "../../styles/Home.module.scss";

import Head from "next/head";
import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer";

const LostDamaged = () => {
  return (
    <div className={styles.LostDamaged__container}>
      <p>LOST AND DAMAGED PAGE</p>
    </div>
  );
};

export default LostDamaged;
