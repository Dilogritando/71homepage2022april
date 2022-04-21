import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./productPages.module.scss";
import MainButton from "../MainButton/MainButton";
import LearnMore from "../LearnMoreBtn/LearnMore";

const ProductPageCTAs = ({
    leadThirdSection,
    iconOneThirdSection,
    iconTwoThirdSection,
    copyOneThirdSection,
    copyTwoThirdSection,
}) => {
  return (
    <div className={styles.ProductPages__CTA}>
        <MainButton
            buttonText="Start Saving"
            buttonRedirectLink="/"
        />
        <p>{leadThirdSection}</p>
        <div className={styles.ProductPages__CTA__icons}>
            <div className={styles.ProductPages__CTA__icons__One}>
                <Image
                    src={iconOneThirdSection}
                    alt="Complementary icon"
                    className="ProductPages__CTA__icons__One__image"
                    layout="fill"
                />
                <p>{copyOneThirdSection}</p>
                <LearnMore redirectLink="/" />
            </div>
            <div className={styles.ProductPages__CTA__icons__Two}>
                <Image
                    src={iconTwoThirdSection}
                    alt="Complementary icon"
                    className="ProductPages__CTA__icons__One__image"
                    layout="fill"
                />
                <p>{copyTwoThirdSection}</p>
                <LearnMore redirectLink="/" />
            </div>
        </div>
      </div>
  )
}

export default ProductPageCTAs
