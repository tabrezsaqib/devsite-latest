/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "../styles/families.module.css"
import Footer from "../components/layouts/Footer";
import Navbar from "../components/layouts/Navbar";

const families = () => {
  return (
    <>
    <Navbar />
    <div>
      <div className={styles.familiesPageContainer}>
        <iframe 
        className={styles.familiesPageContent}
        src="https://api-v2.newbrunswickplants.ca/plant-families/">
        </iframe>
      </div>
      <style jsx>
      {`
        
      `}
    </style>
    </div>
    <Footer />
    </>
  )
}

export default families;