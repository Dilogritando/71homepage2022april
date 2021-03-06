import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.scss";
import TransparentWhiteLogo from "../../public/assets/71assets/71lbs_Logo_WHITE1.png";

const Footer = () => {
  return (
    <footer className={styles.Footer__container}>
      <div className={styles.Footer__container__content}>
        <div className={styles.Footer__left}>
          <div className={styles.Footer__left__logo}>
            <Link href="/" passHref>
              <a>
                <Image
                  src={TransparentWhiteLogo}
                  alt="71lbs Logo, white"
                  className={styles.Footer__left__logo__image}
                />
              </a>
            </Link>
          </div>
          <div className={styles.Footer__left__social}>
            <h4 className={styles.Footer__title}>Follow us: </h4>
            <div className={styles.socialIcons}>
              <Link href="https://www.facebook.com/71lbs" passHref>
                <a>
                  <Image
                    src="/assets/socialLogos/Facebook_LOGO.svg"
                    alt="Link to 71lbs Facebook page"
                    className={styles.socialIcons__logos}
                    width="68"
                    height="70"
                  />
                </a>
              </Link>
              <Link href="https://www.instagram.com/71lbs_/" passHref>
                <a>
                  <Image
                    src="/assets/socialLogos/Instagram_LOGO.svg"
                    alt="Link to 71lbs Instagram page"
                    className={styles.socialIcons__logos}
                    width="68"
                    height="70"
                  />
                </a>
              </Link>
              <Link href="https://www.linkedin.com/company/71lbs" passHref>
                <a>
                  <Image
                    src="/assets/socialLogos/LinkedIn_LOGO.svg"
                    alt="Link to 71lbs LinkedIn page"
                    className={styles.socialIcons__logos}
                    width="68"
                    height="70"
                  />
                </a>
              </Link>
              <Link href="https://twitter.com/71lbs" passHref>
                <a>
                  <Image
                    src="/assets/socialLogos/Twitter_LOGO.svg"
                    alt="Link to 71lbs Twitter page"
                    className={styles.socialIcons__logos}
                    width="68"
                    height="70"
                  />
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.Footer__right}>
          <div className={styles.Footer__right__Service}>
            <h4 className={styles.Footer__title}>Service Directory</h4>
            <ul className={styles.Footer__list}>
              <li className={styles.Footer__list__options}>
                <Link href="/services/shipping-contract-negotiations">
                  <a className={styles.Footer__links}>Contract Negotiations</a>
                </Link>
              </li>
              <li className={styles.Footer__list__options}>
                <Link href="/services/shipping-refunds">
                  <a className={styles.Footer__links}>Shipping Refunds</a>
                </Link>
              </li>
              <li className={styles.Footer__list__options}>
                <Link href="/services/lost-damaged-shipping-claims">
                  <a className={styles.Footer__links}>
                    Lost &amp; Damaged Claims
                  </a>
                </Link>
              </li>
              <li className={styles.Footer__list__options}>
                <Link href="/services/amazon-shipping-fba">
                  <a className={styles.Footer__links}>Amazon FBA</a>
                </Link>
              </li>
              <li className={styles.Footer__list__options}>
                <Link href="/services/shipping-insurance">
                  <a className={styles.Footer__links}>Shipping Insurance</a>
                </Link>
              </li>
              <li className={styles.Footer__list__options}>
                <Link href="/services/fedex-ex-ray-shipping">
                  <a className={styles.Footer__links}>FedEx Ex-Ray</a>
                </Link>
              </li>
              <li className={styles.Footer__list__options}>
                <Link href="/services/premium-shipping-analytics">
                  <a className={styles.Footer__links}>
                    Premium Shipping Analytics
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.Footer__right__Company}>
            <h4 className={styles.Footer__title}>Company</h4>
            <ul className={styles.Footer__list}>
              <li className={styles.Footer__list__options}>
                <Link href="/about-us">
                  <a className={styles.Footer__links}>About Us</a>
                </Link>
              </li>
              <li className={styles.Footer__list__options}>
                <Link href="/shipping-refunds-claims-experts">
                  <a className={styles.Footer__links}>Meet the Team</a>
                </Link>
              </li>
              <li className={styles.Footer__list__options}>
                <Link href="/shipping-refunds-claims-success-testimonials">
                  <a className={styles.Footer__links}>Testimonials</a>
                </Link>
              </li>
              <li className={styles.Footer__list__options}>
                <Link href="https://blog.71lbs.com/">
                  <a className={styles.Footer__links}>Blogs</a>
                </Link>
              </li>
              <li className={styles.Footer__list__options}>
                <Link href="/privacy-policy">
                  <a className={styles.Footer__links}>Privacy Policy</a>
                </Link>
              </li>
              <li className={styles.Footer__list__options}>
                <Link href="/terms-of-service">
                  <a className={styles.Footer__links}>Terms of Service</a>
                </Link>
              </li>
              <li className={styles.Footer__list__options}>
                <Link href="/contact-us">
                  <a className={styles.Footer__links}>Contact Us</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <p className={styles.Footer__legal}>
        2022 ?? 71lbs, Inc. <br /> All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
