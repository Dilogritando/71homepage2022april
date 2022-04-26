import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./productPages.module.scss";
import MainButton from "../MainButton/MainButton";
import LearnMore from "../LearnMoreBtn/LearnMore";

const ProductPageImageQuote = ({
    lastTitle,
    lastLead,
    lastImgSource,
    lastImgAlt
}) => {
  return (
    <div className={styles.ProductPages__ImageQuote}>
        <img
            src={lastImgSource}
            alt={lastImgAlt}
            className="ProductPages__ImageProper"
        />
        <div className={styles.ProductPages__ImageQuote__copy}>
            <h6>{lastTitle}</h6>
            <p>{lastLead}</p>
        </div>
    </div>
  )
}

export default ProductPageImageQuote
