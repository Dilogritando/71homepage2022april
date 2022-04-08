import React, { useState } from "react";
import Head from "next/head";
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'

export default function Layout({ children }) {
  return (
    <div className='layout'>
        <Head>
            <title>71lbs | Shipping refunds &amp; savings |</title>
            <meta
            name="71lbs"
            content="Save money and time in FedEx/UPS contract negotiations, late delivery refunds, lost/damaged claims, shipping insurance, and more."
            />
            <link rel="icon" href="/favicon.ico" />
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
      <Navbar />

        <main>{children}</main>

      <Footer />
    </div>
  )
}
