import Footer from "../components/layouts/Footer";
import Navbar from "../components/layouts/Navbar";
import Families from "../components/families/families";
import Head from "next/head";

const PlantFamilies = () => {
    return (
        <>
            <Head>
                <title>Families | New Brunswick</title>
            </Head>
            <Navbar />
            <Families />
            <Footer />
        </>
    )
}

export default PlantFamilies
