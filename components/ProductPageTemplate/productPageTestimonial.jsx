import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./productPages.module.scss";
import MainButton from "../MainButton/MainButton";
import LearnMore from "../LearnMoreBtn/LearnMore";

const ProductPageTestimonial = ({
    featuredTestimonial
}) => {
  return (
    <div className={styles.ProductPages__testimonial}>
        <blockquote>
            {featuredTestimonial}
        </blockquote>
    </div>
  )
}

export default ProductPageTestimonial
