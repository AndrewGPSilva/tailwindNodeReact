import LivrosTest from "../components/ComponentsRead/LivrosTest";
import Navbar from "../components/Navbar";
import Rodape from "../components/Rodape";

export default function Read() {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <main>
                <LivrosTest />
            </main>
            <footer>
                <Rodape />
            </footer> 
        </>
    )
}