import SearchResults from "../components/search/SearchResults"
import Footer from "../components/layouts/Footer";
import Navbar from "../components/layouts/Navbar";
import Head from "next/head";

const search = () => {
  return (
    <>
      <Head>
        <title>Search | New Brunswick</title>
      </Head>
      <Navbar />
      <div className="pt-4">
        <SearchResults itemsPerPage={20} />
      </div>
      <Footer />
    </>
  )
}

export default search
