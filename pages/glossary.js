/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "../styles/glossary.module.css"
import Footer from "../components/layouts/Footer";
import Navbar from "../components/layouts/Navbar";


function Glossary() {

  return (
    <>
      <Navbar />
      <div>
        <div className={styles.glossaryPageContainer}>

          <iframe
            className={styles.glossaryPageContent}
            src="https://api-v2.newbrunswickplants.ca/glossary/"
            frameBorder="0"
          >
          </iframe>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Glossary;