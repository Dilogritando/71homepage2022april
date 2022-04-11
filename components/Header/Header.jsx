import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.scss";
import TransparentLogo from "../../public/assets/71assets/71lbs_LogoTransparent.png"
import Navbar from "../Navbar/Navbar.jsx";

const Header = ( {isMenuOpen, setIsMenuOpen} ) => {
  const handleSign = () => {
    console.log("Click on sign")
  }
  const handleLogin = () => {
    console.log("Click on login")
  }

  return (
    <div className={styles.Header__container}>
      <div className={styles.Header__container__NavbarLogo}>
        <div className={styles.Header__container__logo}>
          <Link href="/">
            <a className={styles.Header__container__logo__Link}>
              <Image
                src={TransparentLogo}
                alt="71lbs Logo, a magnifying glass icon over an opened box"
                className={styles.Header__container__logo__proper}
              />
            </a>
          </Link>
        </div>
        <Navbar
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
        />
      </div>
      <div className={styles.Header__buttons}>
          <button
            className={styles.Header__buttons__SignUp}
            onClick={handleSign}
          >
            Sign Up
          </button>
          <button
            className={styles.Header__buttons__Login}
            onClick={handleLogin}
          >
            Log In
          </button>
      </div>
    </div>
  )
}

export default Header
