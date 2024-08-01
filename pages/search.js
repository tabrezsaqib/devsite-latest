import SearchResults from "../components/search/SearchResults"
import Footer from "../components/layouts/Footer";
import Navbar from "../components/layouts/Navbar";
import Head from "next/head";
import PlantSpeciesDetails from "../components/main/PlantSpeciesDetails";
import { connect } from "react-redux";
import styles from "../styles/about.module.css"

const search = ({ search_results }) => {
  return (
    <>
      <Head>
        <title>Search | New Brunswick</title>
      </Head>
      <Navbar />
      <div>
        <div className={styles.aboutPageContainer}>
          {search_results.length === 1 ?
            <PlantSpeciesDetails plant_details={search_results[0]} /> :
            <SearchResults itemsPerPage={20} />}
        </div>
      </div>
      <Footer isFixed={search_results.length > 6 ? false : true} />

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