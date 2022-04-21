import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./productPages.module.scss";
import MainButton from "../MainButton/MainButton";
import LearnMore from "../LearnMoreBtn/LearnMore";

const ProductPageFactsBox = (
    {factsColor,
    factsHeader,
    factOne,
    factTwo,
    factThree,
    iconFactOne,
    iconFactTwo,
    iconFactThree,}
) => {
  return (
    <div className={styles.ProductPages__factsBox}
        style={{backgroundColor: factsColor}}
        >
            <h2>{factsHeader}</h2>
            <div
                className={styles.ProductPages__factsBox__first}
            >
                <Image
                    src={iconFactOne}
                    alt="First fact icon"
                    className="ProductPages__hero__image"
                    layout="fill"
                />
                <p>
                    {factOne}
                </p>
            </div>
            <div
                className={styles.ProductPages__factsBox__second}
            >
                <Image
                    src={iconFactTwo}
                    alt="Second fact icon"
                    className="ProductPages__hero__image"
                    layout="fill"
                />
                <p>
                    {factTwo}
                </p>
            </div>
            <div
                className={styles.ProductPages__factsBox__third}
            >
                <Image
                    src={iconFactThree}
                    alt="Third fact icon"
                    className="ProductPages__hero__image"
                    layout="fill"
                />
                <p>
                    {factThree}
                </p>
            </div>
      </div>
  )
}

export default ProductPageFactsBox
