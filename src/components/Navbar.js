function Navbar() {
    return (
        <header>
            <nav className="bg-black text-white py-6 flex justify-between">
                <span className="ml-6 text-orange-500 text-xl underline">GPSflix</span>
                <div className="mr-3">
                    <a href="#" className="px-2.5">INICIO</a>
                    <a href="#" className="px-2.5">ASSISTIR</a>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;