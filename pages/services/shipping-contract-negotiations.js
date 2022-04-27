import React, { useState } from "react";
import styles from "../../components/ProductPageTemplate/productPages.module.scss";

import ProductPageHero from "../../components/ProductPageTemplate/productPageHero";
import ProductPageFactsBox from "../../components/ProductPageTemplate/productPageFactsBox";
import ProductPageCTAs from "../../components/ProductPageTemplate/productPageCTAs";
import ProductPageTestimonial from "../../components/ProductPageTemplate/productPageTestimonial";
import ProductPageImageQuote from "../../components/ProductPageTemplate/productPageImageQuote";

const ContractNegotiations = () => {
  return (
    <div className={styles.ProductPages__container}>
      <ProductPageHero
        title="Contract Negotiations"
        subtitle="Do You Know What Discounts You Should Ask For? Unfortunately, most companies sign carrier agreements that do not reflect their shipping spend. "
        imageHero="/assets/productPagesAssets/Contract_Negotiations_Savings.png"
        imageHeroAlt="Woman receiving a package from a delivery person and money being exchanged by them"
        mainBtnText="Start Saving"
        mainBtnLink="/"
      />
      <ProductPageFactsBox
        factsColor="#0496FF"
        factsHeader={
          <>
            71lbs applies the information and experience you need to navigate
            your carrier agreement to new heights. We’ll{" "}
            <span>optimize your new contract</span>, keep regular monitoring,
            and ensure you are getting the fairest price for your shipping
            needs.
          </>
        }
        factOne={
          <>
            <strong>
              3 out of 5 companies ask their reps for better discounts:{" "}
            </strong>{" "}
            <br />
            and usually get 2-4% in savings at most. Many don’t have access to
            in-depth analytics and benchmarked data to know what discounts to
            ask for.
          </>
        }
        factTwo={
          <>
            <strong>Personalized Support</strong> <br />
            Whether you spend $200K or $5MM a year in shipping spend, Get
            coaching for your renegotiated carrier contract to get the best
            carrier agreement - reducing your total shipping costs.
          </>
        }
        factThree={
          <>
            <strong>Free Analysis - How Do Your Discounts Compare?</strong>{" "}
            <br />
            Work with your shipping advocate to build a contract that’s right
            for your shipping spend.
          </>
        }
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
            71lbs helped us negotiate our FedEx rates{" "}
            <span> way lower than what I had been able to do</span> after years
            of negotiating.
          </>
        }
      />
      <ProductPageImageQuote
        lastTitle="11% or more (up to 35%!) "
        lastLead="Our customers are saving 11% or more (up to 35%!) on their shipping costs using our contract negotiations services and premium analytics dashboard."
        lastImgSource="/assets/productPagesAssets/Shipping_Refunds_Made_Easy.png"
        lastImgAlt="The 71Lbs app dashboard in a mobile phone with graphics that represent the savings"
      />
    </div>
  );
};

export default ContractNegotiations;
