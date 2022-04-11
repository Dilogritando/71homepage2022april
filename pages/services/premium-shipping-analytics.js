import React, { useState } from "react";
import styles from "../../styles/Home.module.scss";

import Head from "next/head";
import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer";

const Analytics = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className={styles.Analytics__container}>
      <p>PREMIUM SHIPPING ANALYTICS PAGE</p>
    </div>
  );
};

export default Analytics;
