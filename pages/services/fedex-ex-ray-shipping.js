import React, { useState } from "react";
import styles from "../../styles/Home.module.scss";

import Head from "next/head";
import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer";

const FedexXray = () => {
  return (
    <div className={styles.FedexXray__container}>
      <p>FEDEX EX RAY PAGE</p>
      <Footer />
    </div>
  );
};

export default FedexXray;
