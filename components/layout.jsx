import React, { useState } from "react";
import Head from "next/head";
import Header from "../components/Header/Header.jsx";
import Footer from './Footer/Footer'
import styles from "../styles/Home.module.scss";

export default function Layout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className={styles.layout__container}>
        <Head>
            <title>71lbs | Shipping refunds &amp; savings |</title>
            <meta
            name="71lbs"
            content="Save money and time in FedEx/UPS contract negotiations, late delivery refunds, lost/damaged claims, shipping insurance, and more."
            />
            <link rel="icon" href="../public/favicon.ico" />
          {/* <link
            rel="preload"
            href="/assets/fonts/ProximaNovaFontFamily/ProximaNovaT-Thin.ttf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/assets/fonts/ProximaNovaFontFamily/ProximaNovaCond-Thin.ttf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/assets/fonts/ProximaNovaFontFamily/ProximaNova-ThinIt.ttf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/assets/fonts/ProximaNovaFontFamily/ProximaNova-Regular.ttf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/assets/fonts/ProximaNovaFontFamily/ProximaNova-SemiboldIt.ttf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/assets/fonts/ProximaNovaFontFamily/ProximaNova-Bold.ttf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/assets/fonts/ProximaNovaFontFamily/ProximaNova-BoldIt.ttf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/assets/fonts/ProximaNovaFontFamily/ProximaNova-BlackIt.ttf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/assets/fonts/ProximaNovaFontFamily/ProximaNovaCond-Light.ttf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/assets/fonts/ProximaNovaFontFamily/ProximaNovaCond-Bold.ttf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/assets/fonts/ProximaNovaFontFamily/ProximaNovaA-BoldIt.ttf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/assets/fonts/ProximaNovaFontFamily/ProximaNovaA-BlackIt.ttf"
            as="font"
            crossOrigin=""
          /> */}

        </Head>

        <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

        <main className={styles.layout__main
          /* isMenuOpen === false
            ? `${styles.layout__main}`
            : `${styles.layout__main__menuOpen}` */
        }>
          {children}
        </main>

      <Footer />
    </div>
  )
}
