import Footer from "../components/layouts/Footer";
import Navbar from "../components/layouts/Navbar";
import ConservationRankDetails from "../components/conservation-rank/conservationRankDetails";
import Head from "next/head";
import { useRouter } from "next/router"

const ConservationRankDetailsPage = () => {
  const router = useRouter()
  return (
    <>
      <Head>
        <title>{router.query.keyword === 'Invasive'? 'Invasive Plants': router.query.keyword} | New Brunswick</title>
      </Head>
      <Navbar />
      <ConservationRankDetails />
      <Footer />
    </>
  )
}
export default ConservationRankDetailsPage
