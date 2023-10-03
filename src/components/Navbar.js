import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <nav className="bg-black text-white py-6 flex justify-between">
        <Link to="/">
            <span className="ml-6 text-orange-500 text-xl underline cursor-pointer">
              GPSflix
            </span>
        </Link>
        <div className="mr-3">
          <Link
            to="/"
            className="px-2.5 underline hover:bg-orange-500 hover:font-bold hover:text-black-500 py-2 rounded-xl hover:text-black hover:underline"
          >
            HOME
          </Link>
          <Link
            to="/read"
            className="px-2.5 underline hover:bg-orange-500 hover:font-bold py-2 rounded-xl hover:text-black hover:underline"
          >
            READ
          </Link>
          <Link
            to="/watch"
            className="px-2.5 underline hover:bg-orange-500 hover:font-bold py-2 rounded-xl hover:text-black hover:underline"
          >
            TO WATCH
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
