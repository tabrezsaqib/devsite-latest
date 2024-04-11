import Headline from "../components/overview/Headline"
import SpeciesOption from "../components/overview/SpeciesOption"
import "bootstrap-icons/font/bootstrap-icons.css"
import styles from "../styles/home.module.css"
import Footer from "../components/layouts/Footer";
import Navbar from "../components/layouts/Navbar";

export default function home() {
  return (
    <div className={styles.flexContent}>
      <Navbar />
      <div className="col-md-12 col-lg-12 " >
        <div className="d-flex flex-column text-center">
          <Headline />
          <SpeciesOption />
        </div>
      </div>
      <Footer />
    </div>
  )
}
