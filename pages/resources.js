/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "../styles/about.module.css"
import Footer from "../components/layouts/Footer";
import Navbar from "../components/layouts/Navbar";



const resources = () => {
  return (
    <>
    <Navbar />
    <div>
        <div className={styles.aboutPageContainer}>
          <iframe
            className={styles.aboutPageContent}
            src="https://devsite-nbplants.api-v2.newbrunswickplants.ca/resources/">
          </iframe>
        </div>
      </div>
      <Footer isFixed={true} />
  </>
  )
}

export default resources;


