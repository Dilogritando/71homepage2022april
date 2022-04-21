import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./productPages.module.scss";
import MainButton from "../MainButton/MainButton";
import LearnMore from "../LearnMoreBtn/LearnMore";

const productPageTemplate = (
    title,
    subtitle,
    imageHero,
    imageHeroAlt,
    mainBtnText,
    mainBtnLink,
    factsColor,
    factsHeader,
    factOne,
    factTwo,
    factThree,
    iconFactOne,
    iconFactTwo,
    iconFactThree,
    leadThirdSection,
    iconOneThirdSection,
    iconTwoThirdSection,
    copyOneThirdSection,
    copyTwoThirdSection,
    featuredTestimonial,
    lastTitle,
    lastLead,
    lastImgSource,
    lastImgAlt
) => {
  return (
    <div className={styles.ProductPages__container}>
      <div className={styles.ProductPages__hero}>
          <div className={styles.ProductPages__hero__copy}>
                <h1>{title}</h1>
                <h3>{subtitle}</h3>
                <MainButton
                    buttonText={mainBtnText}
                    buttonRedirectLink={mainBtnLink}
                />
          </div>
        <Image
            src={imageHero}
            alt={imageHeroAlt}
            className="ProductPages__hero__image"
            layout="fill"
        />
      </div>
      <div className={styles.ProductPages__factsBox}
        style={{backgroundColor: {factsColor}}}
        >
            <h2>{factsHeader}</h2>
            <div
                className={styles.ProductPages__factsBox__first}
            >
                <Image
                    src={iconFactOne}
                    alt="First fact icon"
                    className="ProductPages__hero__image"
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
                />
                <p>
                    {factThree}
                </p>
            </div>
      </div>
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
                />
                <p>{copyOneThirdSection}</p>
                <LearnMore redirectLink="/" />
            </div>
            <div className={styles.ProductPages__CTA__icons__Two}>
                <Image
                    src={iconTwoThirdSection}
                    alt="Complementary icon"
                    className="ProductPages__CTA__icons__One__image"
                />
                <p>{copyTwoThirdSection}</p>
                <LearnMore redirectLink="/" />
            </div>
        </div>
      </div>
      <div className={styles.ProductPages__testimonial}>
          <blockquote>
             {featuredTestimonial}
          </blockquote>
      </div>
      <div className={styles.ProductPages__ImageQuote}>
        <Image
            src={lastImgSource}
            alt={lastImgAlt}
            className="ProductPages__ImageProper"
        />
        <div className={styles.ProductPages__ImageQuote__copy}>
            <h6>{lastTitle}</h6>
            <p>{lastLead}</p>
        </div>
      </div>
    </div>
  )
}

export default productPageTemplate
