import SearchResults from "../components/search/SearchResults"
import Footer from "../components/layouts/Footer";
import Navbar from "../components/layouts/Navbar";
import Head from "next/head";
import PlantSpeciesDetails from "../components/main/PlantSpeciesDetails";
import { connect } from "react-redux"

const search = ({ search_results }) => {
  console.log(search_results)
  return (
    <>
      <Head>
        <title>Search | New Brunswick</title>
      </Head>
      <Navbar />
      <div className="pt-4">
        {search_results.length === 1 ?
          <PlantSpeciesDetails plant_details={search_results[0]} /> :
          <SearchResults itemsPerPage={20} />}
      </div>
      <Footer />
    </>
  )
}


const mapStateToProps = (state) => {
  return {
    search_results: state.post.search_results,
    searchError: state.post.searchError,
  }
}
export default connect(mapStateToProps)(search)