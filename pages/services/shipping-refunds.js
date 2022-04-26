import React, { useState } from "react";
import styles from "../../components/ProductPageTemplate/productPages.module.scss";

import ProductPageHero from "../../components/ProductPageTemplate/productPageHero";
import ProductPageFactsBox from "../../components/ProductPageTemplate/productPageFactsBox";
import ProductPageCTAs from "../../components/ProductPageTemplate/productPageCTAs";
import ProductPageTestimonial from "../../components/ProductPageTemplate/productPageTestimonial";
import ProductPageImageQuote from "../../components/ProductPageTemplate/productPageImageQuote";

const Shipping = () => {
  return (
    <div className={styles.ProductPages__container}>
      <ProductPageHero
        title="Shipping Refunds "
        subtitle="With a the click of a few buttons, you’re half way to thousands in savings."
        imageHero="/assets/productPagesAssets/refund-shipping1.png"
        imageHeroAlt="Woman receiving a package from a delivery person and money being exchanged by them"
        mainBtnText="Start Saving"
        mainBtnLink="/"
      />
      <ProductPageFactsBox
        factsColor="#0496FF"
        factsHeader={
          <>
            Did you know that if your FedEx/UPS shipment is delivered late -even
            by <span>60 seconds</span> - your company is entitled to a full
            refund?
          </>
        }
        factOne="Our system identifies overnight, ground, and international late shipments, and automatically files claims for you"
        factTwo="Carrier credits/refunds post weekly on your FedEx/UPS account"
        factThree="No sign-up fees. No monthly fees. We only invoice you if we find you refunds!"
        iconFactOne="/assets/productPagesAssets/FirstIconShippingRefunds.png"
        iconFactTwo="/assets/productPagesAssets/SecondIconShippingRefunds.png"
        iconFactThree="/assets/productPagesAssets/ThirdIconShippingRefunds.png"
      />
      <ProductPageCTAs
        leadThirdSection="Sign up and provide your Fedex/UPS credentials"
        iconOneThirdSection="/assets/productPagesAssets/Shipping-CTA1.png"
        iconTwoThirdSection="/assets/productPagesAssets/Shipping-CTA2.png"
        copyOneThirdSection="We audit/monitor your shipments, file claims electronically on your behalf"
        copyTwoThirdSection="Refunds get posted on your Fedex/UPS account"
      />
      <ProductPageTestimonial
        featuredTestimonial={
          <>
            I encourage all of our members to get in touch with 71lbs because{" "}
            <span> they will make the process effortless </span> for tracking
            shipments and collecting refunds when deliverables are not on time.
          </>
        }
      />
      <ProductPageImageQuote
        lastTitle="$2 billion dollars "
        lastLead="are left unclaimed every year
        customer quote/testimonial"
        lastImgSource="/assets/productPagesAssets/Shipping_Refunds_Made_Easy.png"
        lastImgAlt="The 71Lbs app dashboard in a mobile phone with graphics that represent the savings"
      />
    </div>
  );
};

export default Shipping;
