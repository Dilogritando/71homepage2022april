import React, { useState } from "react";
import styles from "../../styles/Home.module.scss";

import Head from "next/head";
import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer";

const ShippingInsurance = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className={styles.ShippingInsurance__container}>
      <p>SHIPPING INSURANCE PAGE</p>
    </div>
  );
};

export default ShippingInsurance;
