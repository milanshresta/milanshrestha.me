import React from 'react'
import styles from './Nav.module.css'

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <p className={styles.name}>MILAN</p>
        {/* <hr className={styles.hr} /> */}
        <span className={styles.line}><hr className={styles.hr} /></span>
        <p className={styles.familyname}>Shrestha</p>
      </div>
      <div className={styles.contact}>
        <p>→ Connect</p>
      </div>
    </nav>
  )
}