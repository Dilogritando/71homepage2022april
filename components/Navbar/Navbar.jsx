import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Navbar.module.scss";
import Burger from "../../public/assets/navbarIcons/burgerIcon.png"

const Navbar = ({isMenuOpen, setIsMenuOpen}) => {
    const [menuOpen, setMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [aboutOpen, setAboutOpen] = useState(false)
  const handleMenu = () => {
    setMenuOpen(!menuOpen)
    setIsMenuOpen(!isMenuOpen)
  }
  const handleNavServices = () => {
    setServicesOpen(!servicesOpen)
  }
  const handleNavAbout = () => {
    setAboutOpen(!aboutOpen)
  }
  return (
    <div className={styles.Navbar__container}>
        <button
            className={styles.Navbar__container__burger}
            onClick={handleMenu}
        >
        <Image
            src={Burger}
            alt="Burger menu icon"
            width="100%"
            height="100%"
            className={styles.Navbar__container__burger__icon}
        />
        </button>
        <nav className={styles.Navbar__proper}>
            <ul className={styles.Navbar__proper__list}>
                <li className={styles.Navbar__proper__list__options}>
                <ul
                    className={`
                    ${styles["Navbar__proper__list__options__a"]}
                    ${styles["Navbar__proper__list__options__serviceContainer"]}
                    `}
                    onClick={handleNavServices}
                >
                    <p
                    className={`
                    ${styles["Navbar__proper__list__options__services"]}
                    `}
                    >
                    Services
                    </p>
                    { servicesOpen === true &&
                        <div className={styles.Navbar__proper__list__options__services__list}>
                            <li
                            className={`
                                ${styles["Navbar__services"]}
                            `}
                            >
                            <Link href="/services/shipping-contract-negotiations">
                                <a>
                                Contract Negotiations
                                </a>
                            </Link>
                            </li>
                            <li
                            className={`
                                ${styles["Navbar__services"]}
                            `}
                            >
                            <Link href="/services/shipping-refunds">
                                <a>
                                Shipping Refunds
                                </a>
                            </Link>
                            </li>
                            <li
                            className={`
                                ${styles["Navbar__services"]}
                            `}
                            >
                            <Link href="/services/lost-damaged-shipping-claims">
                                <a>
                                Lost &amp; Damaged Claims
                                </a>
                            </Link>
                            </li>
                            <li
                            className={`
                                ${styles["Navbar__services"]}
                            `}
                            >
                            <Link href="/services/premium-shipping-analytics">
                                <a>
                                Premium analytics
                                </a>
                            </Link>
                            </li>
                            <li
                            className={`
                                ${styles["Navbar__services"]}
                            `}
                            >
                            <Link href="/services/fedex-ex-ray-shipping">
                                <a>
                                FedEx Ex-Ray
                                </a>
                            </Link>
                            </li>
                            <li
                            className={`
                                ${styles["Navbar__services"]}
                            `}
                            >
                            <Link href="/services/shipping-insurance">
                                <a>
                                Shipping Insurance
                                </a>
                            </Link>
                            </li>
                            <li
                            className={`
                                ${styles["Navbar__services"]}
                            `}
                            >
                            <Link href="/services/amazon-shipping-fba">
                                <a>
                                Amazon FBA Refunds
                                </a>
                            </Link>
                            </li>
                        </div >
                    }
                </ul>
                </li>
                <li className={styles.Navbar__proper__list__options}>
                    <ul className={`
                    ${styles["Navbar__proper__list__options__a"]}
                    ${styles["Navbar__proper__list__options__aboutContainer"]}
                    `}
                    onClick={handleNavAbout}
                    >
                        <p
                            className={`
                                ${styles["Navbar__proper__list__options__about"]}
                            `}
                        >
                            About us
                        </p>
                        { aboutOpen === true &&
                            <div className={styles.Navbar__proper__list__options__about__list}>
                                <li
                                className={`
                                    ${styles["Navbar__about"]}
                                `}
                                >
                                <Link href="https://blog.71lbs.com/">
                                    <a>
                                        Blog
                                    </a>
                                </Link>
                                </li>
                                <li
                                className={`
                                    ${styles["Navbar__about"]}
                                `}
                                >
                                <Link href="/terms-of-service">
                                    <a>
                                        Terms of Service
                                    </a>
                                </Link>
                                </li>
                                <li
                                className={`
                                    ${styles["Navbar__about"]}
                                `}
                                >
                                <Link href="/privacy-policy">
                                    <a>
                                        Privacy Policy
                                    </a>
                                </Link>
                                </li>
                                <li
                                className={`
                                    ${styles["Navbar__about"]}
                                `}
                                >
                                <Link href="/contact-us">
                                    <a>
                                        Contact Us
                                    </a>
                                </Link>
                                </li>
                            </div >
                        }
                    </ul>
                </li>
                <li className={styles.Navbar__proper__list__options}>
                <Link href="/contact">
                    <a
                    className={`
                        ${styles["Navbar__proper__list__options__a"]}
                        ${styles["Navbar__proper__list__options__contact"]}
                    `}
                    >
                    Contact Us
                    </a>
                </Link>
                </li>
                <li className={styles.Navbar__proper__list__options}>
                <Link href="/">
                    <a
                    className={`
                        ${styles["Navbar__proper__list__options__a"]}
                        ${styles["Navbar__proper__list__options__FAQ"]}
                    `}
                    >
                        FAQ
                    </a>
                </Link>
                </li>
            </ul>
        </nav>
    </div>
  );
};

export default Navbar;
