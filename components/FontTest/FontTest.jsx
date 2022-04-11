import React from 'react'
import styles from "./FontTest.module.scss"

const FontTest = () => {
  return (
    <div className={styles.FontTest__container}>
        <h1>This is an h1 in 1rem</h1>
        <h2>This is an h2 in 1rem</h2>
        <h3>This is an h3 in 1rem</h3>
        <h4>This is an h4 in 1rem</h4>
        <h5>This is an h5 in 1rem</h5>
        <h6>This is an h6 in 1rem</h6>
        <p>This is a p in 1rem</p>
        <p className={styles.PNThin}>This is a p in 1rem with Proxima NovaT Thin</p>
        <p className={styles.PNCThin}>This is a p in 1rem with Proxima NovaC Thin</p>
        <p className={styles.PNThinIt}>This is a p in 1rem with Proxima Nova Thin Italics</p>
        <p className={styles.PNRegular}>This is a p in 1rem with Proxima Nova Regular</p>
        <p className={styles.PNSemi}>This is a p in 1rem with Proxima Nova Semibold Italics</p>
        <p className={styles.PNRegBold}>This is a p in 1rem with Proxima Nova bold</p>
        <p className={styles.PNRegBoldIt}>This is a p in 1rem with Proxima Nova bold italic</p>
        <p className={styles.PNBlackIt}>This is a p in 1rem with Proxima Nova black italic</p>
        <p className={styles.PNCondLt}>This is a p in 1rem with Proxima Nova Condensed Light</p>
        <p className={styles.PNCondBld}>This is a p in 1rem with Proxima Nova Condensed Bold</p>
        <p className={styles.PNABOI}>This is a p in 1rem with Proxima Nova Alt Bold italic</p>
        <p className={styles.PNABLI}>This is a p in 1rem with Proxima Nova Alt Black italic</p>
    </div>
  )
}

export default FontTest
