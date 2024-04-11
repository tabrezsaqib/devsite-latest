/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "../styles/resources.module.css"
import Footer from "../components/layouts/Footer";
import Navbar from "../components/layouts/Navbar";



const resources = () => {
  return (
    <>
    <Navbar />
    <div>
      <div className={styles.resourcesPageContainer}>
        <iframe 
        className={styles.resourcesPageContent}
        src="https://api-v2.newbrunswickplants.ca/resources/">
        </iframe>
      </div>
    </div>
    <Footer />
  </>
  )
}

export default resources;


