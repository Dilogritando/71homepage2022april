import ReactDOM from "react-dom";
import styles from "./TestimonialSlider.module.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";
/* import TestimonialsDivider from "../../public/assets/componentIcons/TestimonialsDivider.png"; */
import Budsies_Logo from "../../public/assets/BrandsLogos/Budsies_Logo.png";
import Shipmonk_Logo from "../../public/assets/BrandsLogos/Shipmonk_Logo.png";
import UnderwearStation_Logo from "../../public/assets/BrandsLogos/UnderwearStation_Logo.png";
import SkatePro_Logo from "../../public/assets/BrandsLogos/SkatePro_Logo.png";
import { Carousel } from "react-responsive-carousel";
import DividerLine from "../DividerLine/DividerLine";

const TestimonialSlider = () => {
  const testimonials = [
    {
      logoUrl: UnderwearStation_Logo,
      logoAlt: "Logo of UnderwearStation company",
      sourceName: "Joel G.",
      sourceRole: "President",
      sourceQuote: (
        <p>
          71lbs helped us <span>negotiate our FedEx rates way lower</span> than
          what I had been able to do after years of negotiating.
        </p>
      ),
    },
    {
      logoUrl: Shipmonk_Logo,
      logoAlt: "Logo of Shipmonk company",
      sourceName: "Jan B.",
      sourceRole: "CEO",
      sourceQuote: (
        <p>
          There is no obligation. <span>It doesn’t cost anything.</span> You
          just get the money. It’s pretty much a no-brainer decision.
        </p>
      ),
    },
    {
      logoUrl: Budsies_Logo,
      logoAlt: "Logo of Budsies company",
      sourceName: "Melissa H.",
      sourceRole: "VP of Ops.",
      sourceQuote: (
        <p>
          Signing up with 71lbs was effortless! we essentially didn’t have to do
          anything and <span>we started receiving money.</span>
        </p>
      ),
    },
    {
      logoUrl: SkatePro_Logo,
      logoAlt: "Logo of SkatePro company",
      sourceName: "Daron H.",
      sourceRole: "President",
      sourceQuote: (
        <p>
          We have been <span>saving thousands of dollars</span> a month. It’s
          frictionless, just as promised.
        </p>
      ),
    },
  ];

  const testimonialSlideStructure = (testimonial, index) => {
    return (
      <div className={styles.TestimonialSlider__container__slide} key={index}>
        <div className={styles.TestimonialSlider__container__slide__source}>
          <div
            className={
              styles.TestimonialSlider__container__slide__source__image
            }
          >
            <Image
              src={testimonial.logoUrl}
              alt={testimonial.logoAlt}
              layout="fill"
              objectFit="contain"
            />
          </div>
          <p
            className={styles.TestimonialSlider__container__slide__source__name}
          >
            {testimonial.sourceName}
          </p>
          <p
            className={styles.TestimonialSlider__container__slide__source__role}
          >
            {testimonial.sourceRole}
          </p>
        </div>
        <div className={styles.TestimonialSlider__testimonial}>
          <blockquote className={styles.TestimonialSlider__testimonial__text}>
            {testimonial.sourceQuote}
          </blockquote>
        </div>
      </div>
    );
  };
  return (
    <div className={styles.TestimonialSlider__container}>
      <Carousel
        showThumbs={false}
        className={styles.TestimonialSlider__container__carousel}
      >
        {testimonials.map((service, index) => {
          return testimonialSlideStructure(service, index);
        })}
      </Carousel>
      <DividerLine />
    </div>
  );
};

export default TestimonialSlider;
