import Footer from "../components/layouts/Footer";
import Navbar from "../components/layouts/Navbar";
import FamilyDetails from "../components/families/familyDetails";
import Head from "next/head";

const PlantFamilyDetails = () => {
  return (
    <>
      <Head>
        <title>Family Details | New Brunswick</title>
      </Head>
      <Navbar />
      <FamilyDetails />
      <Footer />
    </>
  )
}
export default PlantFamilyDetails
