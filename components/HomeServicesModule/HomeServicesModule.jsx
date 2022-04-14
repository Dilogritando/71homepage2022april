import React from 'react';
import Link from "next/link";
import Image from "next/image";
import styles from "./HomeServicesModule.module.scss";
import LearnMore from '../LearnMoreBtn/LearnMore';
import MainServiceImage from "../../public/assets/componentIcons/PlaceholderServiceSlider.png";

const HomeServicesModule = () => {
  return (
    <div className={styles.HomeServicesModule__container}>
        <h2>We help thousands of companies</h2>
        <div className={styles.HomeServicesModule__mainService}>
            <div className={styles.HomeServicesModule__mainService__image}>
                <Image
                  src={MainServiceImage}
                  alt="71lbs Logo, white"
                  className={styles.HomeServicesModule__mainService__image__proper}
                />
            </div>
            <div className={styles.HomeServicesModule__content}>
                <h2>Late delivery refunds</h2>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore aliquam dolor nihil omnis blanditiis, amet placeat eligendi dolore praesentium, in dolorum repellendus! Unde voluptates consequatur magnam corporis sint nesciunt natus.
                </p>
                <button>
                    Learn More
                </button>
            </div>
            <div className={styles.HomeServicesModule__content}>
                <h2>Late delivery refunds</h2>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore aliquam dolor nihil omnis blanditiis, amet placeat eligendi dolore praesentium, in dolorum repellendus! Unde voluptates consequatur magnam corporis sint nesciunt natus.
                </p>
                <button>
                    Learn More
                </button>
            </div>
        </div>
        <div className={styles.HomeServicesModule__secondService}>
            <div className={styles.HomeServicesModule__content}>
                <h2>Late delivery refunds</h2>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore aliquam dolor nihil omnis blanditiis, amet placeat eligendi dolore praesentium, in dolorum repellendus! Unde voluptates consequatur magnam corporis sint nesciunt natus.
                </p>
                <button>
                    Learn More
                </button>
            </div>
            <div className={styles.HomeServicesModule__secondService__image}>
                <Image
                  src={MainServiceImage}
                  alt="71lbs Logo, white"
                  className={styles.HomeServicesModule__secondService__image__proper}
                />
            </div>
        </div>
        <div className={styles.HomeServicesModule__thirdService}>
            <div className={styles.HomeServicesModule__thirdService__image}>
                <Image
                    src={MainServiceImage}
                    alt="71lbs Logo, white"
                    className={styles.HomeServicesModule__thirdService__image__proper}
                />
            </div>
            <div className={styles.HomeServicesModule__content}>
                <h2>Late delivery refunds</h2>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore aliquam dolor nihil omnis blanditiis, amet placeat eligendi dolore praesentium, in dolorum repellendus! Unde voluptates consequatur magnam corporis sint nesciunt natus.
                </p>
                <LearnMore
                    redirectLink="/"
                />
            </div>
        </div>
    </div>
  )
}

export default HomeServicesModule
