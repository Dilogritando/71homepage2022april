import React, { useState } from "react";
import styles from "../../components/ProductPageTemplate/productPages.module.scss";

import ProductPageHero from "../../components/ProductPageTemplate/productPageHero";
import ProductPageFactsBox from "../../components/ProductPageTemplate/productPageFactsBox";
import ProductPageCTAs from "../../components/ProductPageTemplate/productPageCTAs";
import ProductPageTestimonial from "../../components/ProductPageTemplate/productPageTestimonial";
import ProductPageImageQuote from "../../components/ProductPageTemplate/productPageImageQuote";

const FedexXray = () => {
  return (
    <div className={styles.ProductPages__container}>
      <ProductPageHero
        title="FedEx EX-Ray"
        subtitle="Real time status of your orders, displayed in a color-coded stoplight dashboard"
        imageHero="/assets/productPagesAssets/Fedex_Shipping_Save_More.png"
        imageHeroAlt="Woman receiving a package from a delivery person and money being exchanged by them"
        mainBtnText="Get started now!"
        mainBtnLink="/"
      />
      <ProductPageFactsBox
        factsColor="#0496FF"
        factsHeader={
          <>
            Have you ever had a customer give you a bad review because their
            package arrived late? What if you could inform them of any carrier
            issues <span> before</span> they happened? All while tracking your
            FedEx orders in <span>real time?</span>
          </>
        }
        factOne={
          <>
            <strong>
              Proactively let your customers know about order/shipment issues,
              before they occur
            </strong>{" "}
            <br />
            Instead of tracking every individual order one-by-one, you’ll be
            able to conveniently see all your outbound and return shipments for
            the past 7 days on your dashboard.
          </>
        }
        factTwo={
          <>
            <strong>
              Automate communication workflows into your CRM for proactive
              communications
            </strong>{" "}
            <br />
            Contingency based service. We don’t get paid until you get your
            shipping refunds.
          </>
        }
        factThree={
          <>
            <strong>
              Custom views and reporting for your Customer Service team
            </strong>{" "}
            <br />
            Build a more communicative and transparent approach with customers,
            which will lead to happier customers overall.
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

export default FedexXray;
