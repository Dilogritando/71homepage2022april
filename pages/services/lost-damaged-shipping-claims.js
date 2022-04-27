import React, { useState } from "react";
import styles from "../../components/ProductPageTemplate/productPages.module.scss";

import ProductPageHero from "../../components/ProductPageTemplate/productPageHero";
import ProductPageFactsBox from "../../components/ProductPageTemplate/productPageFactsBox";
import ProductPageCTAs from "../../components/ProductPageTemplate/productPageCTAs";
import ProductPageTestimonial from "../../components/ProductPageTemplate/productPageTestimonial";
import ProductPageImageQuote from "../../components/ProductPageTemplate/productPageImageQuote";

const LostDamaged = () => {
  return (
    <div className={styles.ProductPages__container}>
      <ProductPageHero
        title="Lost &amp; Damaged Claims"
        subtitle="71lbs manages the claims process from start to finish for all packages lost or damaged by the carrier(s)."
        imageHero="/assets/productPagesAssets/Lost_Damaged_Shipping_Refunds.png"
        imageHeroAlt="Woman receiving a package from a delivery person and money being exchanged by them"
        mainBtnText="Get started now!"
        mainBtnLink="/"
      />
      <ProductPageFactsBox
        factsColor="#0496FF"
        factsHeader={
          <>
            If your package is lost or damaged,{" "}
            <span>you are entitled to a refund </span>for your package and
            shipping. The process can be frustrating and time-consuming. We
            offer a service that does the heavy lifting for you.
          </>
        }
        factOne={
          <>
            <strong>Initiate Your Claim</strong> <br />
            We submit all necessary information for the carriers to use in
            filing internal tracers for lost shipments and opening
            investigations for damaged, discarded, or missing merchandize.
          </>
        }
        factTwo={
          <>
            <strong>Expedited processing Time</strong> <br />
            The Lost &amp; damaged Claims specialist at 71lbs will gather and
            submit the proper documentation, including merchandize description
            and value, to ensure shorter resolution time.
          </>
        }
        factThree={
          <>
            <strong>Secure Reimbursement</strong> <br />
            We monitor the status of each claim until confirmationof payment.
            Each paid claim includes the shipping charge plus the insured value
            of the merchandise.
          </>
        }
        iconFactOne="/assets/productPagesAssets/SecondIconShippingRefunds.png"
        iconFactTwo="/assets/productPagesAssets/Shipping_Insurance-CTA2.png"
        iconFactThree="/assets/productPagesAssets/Shipping_Insurance-CTA3.png"
      />
      <ProductPageCTAs
        leadThirdSection="Sign up and provide your Fedex/UPS credentials"
        iconOneThirdSection="/assets/productPagesAssets/Company_Savings_Book.png"
        iconTwoThirdSection="/assets/productPagesAssets/Demo_Savings_Company.png"
        copyOneThirdSection="Analyze and compare shipping data to 5,000+ customers"
        copyTwoThirdSection="Schedule demo to review discount amount"
      />
      <ProductPageTestimonial
        featuredTestimonial={
          <>
            We have been <span>saving thousands of dollars</span> a month. It’s
            frictionless, just as promised.
          </>
        }
      />
      <ProductPageImageQuote
        lastTitle="62% of companies"
        lastLead="accept their FDX/UPS carrier agreements because they don’t know the difference between Okay and Great discounts to ask for."
        lastImgSource="/assets/productPagesAssets/Entrepreneur_digital.png"
        lastImgAlt="Image of people building a website or commerce as if they were remodeling a house"
      />
    </div>
  );
};

export default LostDamaged;
