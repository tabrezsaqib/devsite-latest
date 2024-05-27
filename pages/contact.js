/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "../styles/contact.module.css"
import Footer from "../components/layouts/Footer";
import Navbar from "../components/layouts/Navbar";
import Head from "next/head";


const contact = () => {
  return (
    <>
      <Head>
        <title>Contact | New Brunswick</title>
      </Head>
      <Navbar />
      <div>
        <div className={styles.contactPageContainer}>
          <iframe
            className={styles.contactPageContent}
            src="https://api-v2.newbrunswickplants.ca/contact-us/">
          </iframe>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default contact;