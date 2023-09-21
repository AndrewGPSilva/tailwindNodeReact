function Navbar() {
    return (
        <header>
            <nav className="bg-black text-white py-6 flex justify-between">
                <span className="ml-10">GPSflix</span>
                <div className="mr-10">
                    <a href="#" className="px-2.5">INICIO</a>
                    <a href="#" className="px-2.5">ASSISTIR</a>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;