import React from 'react'
import styles from "./KeepInTouch.module.scss";

const KeepInTouch = () => {
  return (
    <div className={styles.KeepInTouch__container}>
        <h6>Keep in Touch: </h6>
        <div className={styles.KeepInTouch__info}>
            <p><span>Email:</span> savings@71lbs.com</p>
            <p><span>Phone:</span> (954) 400-7194</p>
            <p><span>Chat with us in our business hours! <br/></span>
                M-F 8:30 am EST - 5:00pm EST
            </p>
        </div>
    </div>
  )
}

export default KeepInTouch
