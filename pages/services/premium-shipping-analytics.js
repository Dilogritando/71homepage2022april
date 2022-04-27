import React, { useState } from "react";
import styles from "../../components/ProductPageTemplate/productPages.module.scss";

import ProductPageHero from "../../components/ProductPageTemplate/productPageHero";
import ProductPageFactsBox from "../../components/ProductPageTemplate/productPageFactsBox";
import ProductPageCTAs from "../../components/ProductPageTemplate/productPageCTAs";
import ProductPageTestimonial from "../../components/ProductPageTemplate/productPageTestimonial";
import ProductPageImageQuote from "../../components/ProductPageTemplate/productPageImageQuote";

const Analytics = () => {
  return (
    <div className={styles.ProductPages__container}>
      <ProductPageHero
        title="Premium Analytics"
        subtitle="All your shipping analytics under one system, the 71lbs user-friendly dashboard."
        imageHero="/assets/productPagesAssets/Shipping_Analytics_Save_Money.png"
        imageHeroAlt="Woman receiving a package from a delivery person and money being exchanged by them"
        mainBtnText="Get started now!"
        mainBtnLink="/"
      />
      <ProductPageFactsBox
        factsColor="#0496FF"
        factsHeader={
          <>
            71lbs offers an easy-to-understand display of your shipping data
            through our user-friendly dashboard, helping businesses make better
            decisions about their shipping.
          </>
        }
        factOne={
          <>
            <strong>Fast, reliable reporting</strong> <br />
            Our system connects to your shipping accounts, and pulls the data to
            our easy-to-understand dashboard. All your shipping data under one
            umbrella.
          </>
        }
        factTwo={
          <>
            <strong>Transparency for better business decisions</strong> <br />
            At 71lbs, our analysis of your data focuses on the things you need
            to know to truly understand what’s driving your shipping costs and
            delivery efficiencies.
          </>
        }
        factThree={
          <>
            <strong>The right tools for the best results</strong> <br />
            Our Dashboard includes Custom Alerts, Exception Reporting, Carrier
            Performance and more to help you make better business decisions
            about your shipping.
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
            There is <span>no obligation</span>. You just get the money. It’s
            pretty much a no-brainer decision.
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

export default Analytics;
