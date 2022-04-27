import React, { useState } from "react";
import styles from "../../components/ProductPageTemplate/productPages.module.scss";

import ProductPageHero from "../../components/ProductPageTemplate/productPageHero";
import ProductPageFactsBox from "../../components/ProductPageTemplate/productPageFactsBox";
import ProductPageCTAs from "../../components/ProductPageTemplate/productPageCTAs";
import ProductPageTestimonial from "../../components/ProductPageTemplate/productPageTestimonial";
import ProductPageImageQuote from "../../components/ProductPageTemplate/productPageImageQuote";

const AmazonFba = () => {
  return (
    <div className={styles.ProductPages__container}>
      <ProductPageHero
        title="FedEx, UPS, and Amazon Refunds"
        subtitle="Get refunds from late deliveries, lost &amp; damaged claims, incorrect charges, and more. "
        imageHero="/assets/productPagesAssets/refund-shipping1.png"
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
            <strong>$2 billion dollars are left unclaimed every year.</strong>{" "}
            <br />
            Did you know that FedEx &amp; UPS have late delivery guarantees? If
            your FedEx/UPS Air or International shipment is late, you are
            entitled to a refund The carriers do not make these easy to do nor
            is it as simple as submitting a claim.
          </>
        }
        factTwo={
          <>
            <strong>Lost &amp; Damaged and Amazon Refunds</strong> <br />
            We work on lost and/or damaged claims for UPS, FedEx, USPS and more!
            And if you sell via Amazon FBA, we get you those refunds as well!
          </>
        }
        factThree={
          <>
            <strong>
              Automatic Auditing and Refunds - Getting Started only takes
              Minutes:
            </strong>{" "}
            <br />
            Sign-up with your company information and shipping credentials is
            all you need to get started. Our system audits and automatically
            claims any late and lost/damaged shipments as well as incorrect
            charges.
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

export default AmazonFba;
