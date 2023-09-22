import Movies from "../components/ComponentsWatch/Movies";
import Navbar from "../components/Navbar";
import Rodape from "../components/Rodape";

export default function Watch() {
    return (
        <>
        <header>
            <Navbar />
        </header>
        <main>
            <Movies />
        </main>
        <footer>
            <Rodape />
        </footer>
        </>
    )
}