import React, { useState } from "react";
import styles from "../../styles/Home.module.scss";

import Head from "next/head";
import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer";

const Shipping = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className={styles.ShippingRefunds__container}>
      <p>Shipping refunds page contract negotiations</p>
    </div>
  );
};

export default Shipping;
