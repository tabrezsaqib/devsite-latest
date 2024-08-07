import Footer from "../components/layouts/Footer";
import Navbar from "../components/layouts/Navbar";
import FamilyDetails from "../components/families/familyDetails";
import Head from "next/head";
import { useRouter } from "next/router"

const PlantFamilyDetails = () => {
  const router = useRouter()
  return (
    <>
      <Head>
        <title>{router.query.keyword} | New Brunswick</title>
      </Head>
      <Navbar />
      <FamilyDetails />
      <Footer />
    </>
  )
}
export default PlantFamilyDetails
