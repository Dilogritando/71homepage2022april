import React from 'react';
import Link from "next/link";
import Image from "next/image";
import styles from "./HomeServicesModule.module.scss";
import LearnMore from '../LearnMoreBtn/LearnMore';
import MainServiceImage from "../../public/assets/componentIcons/MainServiceImage.png";
import SecondServiceImage from "../../public/assets/componentIcons/SecondServiceImage.png";
import ThirdServiceImage from "../../public/assets/componentIcons/ThirdServiceImage.png";

/*
import DividerLineHorizontal from "../../public/assets/componentIcons/DividerLineHorizontal.png"; */

const HomeServicesModule = () => {
  return (
    <div className={styles.HomeServicesModule__container}>
        <h2>How We Help Thousands Of Companies</h2>
        <div className={styles.HomeServicesModule__mainService}>
            <div className={styles.HomeServicesModule__mainService__container}>
                <div className={styles.HomeServicesModule__mainService__image}>
                    <Image
                    src={MainServiceImage}
                    alt="71lbs Logo, white"
                    className={styles.HomeServicesModule__mainService__image__proper}
                    />
                </div>
                <div className={styles.HomeServicesModule__mainService__contents}>
                    <div className={styles.HomeServicesModule__content}>
                        <h2>Late delivery refunds</h2>
                        <p>
                            If your FedEx or UPS overnight, ground(currently suspended due to Covid), or international shipment is delivered late - you are entitled to a full refund.
                        </p>
                        <LearnMore
                            redirectLink="/"
                        />
                    </div>
                    <div className={styles.HomeServicesModule__content}>
                        <h2>Lost &amp; Damage Refunds</h2>
                        <p>
                        How do you know if you have the best agreement for your shipping spend? Working with 71lbs ensures that you know the answer to this question &amp; more.
                        </p>
                        <LearnMore
                            redirectLink="/"
                        />
                    </div>
                </div>
            </div>
            <div className={styles.HomeServicesModule__content__divider}>
                {/* <Image
                    src={DividerLineHorizontal}
                    alt="Divider line between services"
                    layout='fill'
                    className={styles.HomeServicesModule__content__divider__proper}
                /> */}
            </div>
        </div>
        <div className={styles.HomeServicesModule__secondService}>
            <div className={styles.HomeServicesModule__secondService__container}>
                <div className={styles.HomeServicesModule__content}>
                    <h2>Contract Negotiations</h2>
                    <p>
                    How do you know if you have the best agreement for your shipping spend? Working with 71lbs ensures that you now the answer to this question &amp; more.
                    </p>
                    <LearnMore
                        redirectLink="/"
                    />
                </div>
                <div className={styles.HomeServicesModule__secondService__image}>
                    <Image
                    src={SecondServiceImage}
                    alt="71lbs Logo, white"
                    className={styles.HomeServicesModule__secondService__image__proper}
                    />
                </div>
            </div>
            <div className={styles.HomeServicesModule__content__divider}>
                {/* <Image
                    src={DividerLineHorizontal}
                    layout='fill'
                    alt="Divider line between services"
                    className={styles.HomeServicesModule__content__divider__proper}
                /> */}
            </div>
        </div>
        <div className={styles.HomeServicesModule__thirdService}>
            <div className={styles.HomeServicesModule__thirdService__container}>
                <div className={styles.HomeServicesModule__thirdService__image}>
                    <Image
                        src={ThirdServiceImage}
                        alt="71lbs Logo, white"
                        className={styles.HomeServicesModule__thirdService__image__proper}
                    />
                </div>
                <div className={styles.HomeServicesModule__content}>
                    <h2>Shipping Labels Program</h2>
                    <p>
                    How do you know if you have the best agreement for your shipping spend? Working with 71lbs ensures that you know the answer to this question &amp; more.
                    </p>
                    <LearnMore
                        redirectLink="/"
                    />
                </div>
            </div>
            <div className={styles.HomeServicesModule__content__divider}>
                {/* <Image
                    src={DividerLineHorizontal}
                    layout='fill'
                    alt="Divider line between services"
                    className={styles.HomeServicesModule__content__divider__proper}
                /> */}
            </div>
        </div>
    </div>
  )
}

export default HomeServicesModule
