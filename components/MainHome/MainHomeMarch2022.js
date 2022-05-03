import React from "react";
import dynamic from "next/dynamic";
import styles from "./MainHomeMarch2022.module.scss";

import LearnMore from "../LearnMoreBtn/LearnMore";
import MainButton from "../MainButton/MainButton";
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

const MainHomeMarch2022 = () => {
  return (
    <div className={styles.Hero__container}>
      <div className={styles.Hero__main}>
        <div className={styles.Hero__copy}>
          <h1 className={styles.Hero__copy__title}>
            Save Money <span>on Shipping</span>
            {/* <br /> */}
          </h1>
          <h2 className={styles.Hero__copy__subtitle}>
            A Service You Can Count On.
          </h2>
        </div>
        <div className={styles.Hero__video}>
          <div className={styles.Hero__video__proper}>
            <ReactPlayer
              className={styles.Hero__video__proper__player}
              width="100%"
              height="100%"
              min-height="230px"
              url="https://fdbef0a76c08b982db11-0672d8539c129f26551dec2c76292811.ssl.cf5.rackcdn.com/FreeShippingAssessment%20video.mp4"
              controls={true}
              fallback="/assets/71assets/PlaceholderHomeVideo.png"
              light="/assets/71assets/PlaceholderHomeVideo.png"
            />
          </div>
          {/* <div className={styles.Hero__video__controller}>
            <button className={styles.Hero__video__controller__btn}>
              WATCH VIDEO
            </button>
          </div> */}
        </div>
        <p className={styles.Hero__copy__text}>
          With 71lbs, you have a fully automated, human-backed system that
          proactively monitors your FedEx/UPS accounts, making reducing your
          shipping costs simple &amp; consistent.
        </p>
      </div>
      <div className={styles.Hero__secondary}>
        <MainButton
          buttonText="Sign up for a Free Demo"
          buttonRedirectLink="/"
        />
        <LearnMore redirectLink="/" />
      </div>
    </div>
  );
};

export default MainHomeMarch2022;
