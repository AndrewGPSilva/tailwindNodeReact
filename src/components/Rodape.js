function Rodape() {
    const anoAtual = new Date().getFullYear();
    return (
        <footer className="text-start bg-black text-white py-4 position: fixed bottom-0 w-full">
            <h1 className="ml-1">&copy; { anoAtual } Andrew Silva, Dev Back-End.</h1>
        </footer>
    )
}

export default Rodape;