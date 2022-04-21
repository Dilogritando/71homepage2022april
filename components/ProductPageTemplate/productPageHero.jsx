import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./productPages.module.scss";
import MainButton from "../MainButton/MainButton";
import LearnMore from "../LearnMoreBtn/LearnMore";

const ProductPageHero = ({
    title,
    subtitle,
    imageHero,
    imageHeroAlt,
    mainBtnText,
    mainBtnLink,
}) => {
  return (
    <div className={styles.ProductPages__hero}>
        <h1>{title}</h1>
        <div className={styles.ProductPages__hero__imageContainer}>
            <Image
                src={imageHero}
                alt={imageHeroAlt}
                layout="fill"
                /* height="100%"
                width="100%" */
            />
        </div>
        <h3>{subtitle}</h3>
        <MainButton
            buttonText={mainBtnText}
            buttonRedirectLink={mainBtnLink}
        />
    </div>
  )
}

export default ProductPageHero
