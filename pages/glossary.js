/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "../styles/about.module.css"
import Footer from "../components/layouts/Footer";
import Navbar from "../components/layouts/Navbar";
import Head from "next/head";

const Glossary = () => {
  return (
    <>
      <Head>
        <title>Glossary | New Brunswick</title>
      </Head>
      <Navbar />
      <div>
        <div className={styles.aboutPageContainer}>
          <iframe
            className={styles.aboutPageContent}
            src="https://api-v3.newbrunswickplants.ca/glossary/">
          </iframe>
        </div>
      </div>
      <Footer isFixed={true} />
    </>
  )
}

export default Glossary;


