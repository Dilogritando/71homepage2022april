import React, { useState } from "react";
import styles from "../styles/Home.module.scss";
import MainHomeMarch2022 from "../components/MainHome/MainHomeMarch2022.js";
import HomeServicesModule from "../components/HomeServicesModule/HomeServicesModule.jsx";
import BrandsGallery from "../components/BrandsGallery/BrandsGallery";
import TestimonialSlider from "../components/TestimonialSlider/TestimonialSlider";
import StartSaving from "../components/StartSaving/StartSaving";
import KeepInTouch from "../components/KeepInTouch/KeepInTouch";
import LoginHome from "../components/LoginHome/LoginHome";

export default function Home() {
  return (
    <div className={styles.Home__container}>
      <MainHomeMarch2022 />
      <HomeServicesModule />
      <BrandsGallery />
      <TestimonialSlider />
      {/*<StartSaving />
      <LoginHome />
      <KeepInTouch /> */}
    </div>
  );
}
