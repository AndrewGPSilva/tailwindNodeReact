import Banner from "../components/ComponentsHome/Banner";
import Navbar from "../components/Navbar";
import Rodape from "../components/Rodape";

export default function Home() {
    return (
        <>
        <header>
            <Navbar />
        </header>
        <main>
            <Banner 
            image="bannerNovo"
            extensao="png"
            />
        </main>
        <footer>
            <Rodape />
        </footer>
        </>
    )
}