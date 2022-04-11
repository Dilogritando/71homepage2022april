import React, { useState } from "react";
import styles from "../../styles/Home.module.scss";

import Head from "next/head";
import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer";

const ContractNegotiations = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className={styles.ContractNegotiations__container}>
      <p>SERVICES - CONTRACT NEGOTIATIONS PAGE</p>
    </div>
  );
};

export default ContractNegotiations;
