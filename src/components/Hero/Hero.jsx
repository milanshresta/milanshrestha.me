import React from "react";
import styles from "./Hero.module.css";
import heroImage from "../../assets/heroimage.png"; // Adjust the path as necessary

export default function Hero() {
  return (
    <div>
      <div className={styles.hero}>
        <img src={heroImage} alt="milan shrestha profile image" />
        <div className={styles.herotext}>
          <h2 className={styles.herocopy}>
            Offering design solutions to the table
          </h2>
          <p className={styles.portfolio}>→ Request Portfolio</p>
        </div>
      </div>

      <div className={styles.tempfooter}>
        <p className={styles.name}>10% Complete</p>
        {/* <hr className={styles.hr} /> */}
        <span className={styles.line}>
          <hr className={styles.hr} />
        </span>
        <p className={styles.familyname}>WO RK ING   O  N</p>
      </div>
    </div>
  );
}
