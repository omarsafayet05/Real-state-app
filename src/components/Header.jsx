import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header className="bg-slate-500 shadow-sm">
      <div className="flex justify-between items-center w-max-6xl m-auto p-3">
        <Link to={"/"}>
          <h1 className=" font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-slate-600 ">Omar</span>
            <span className="text-slate-800 ">State</span>
          </h1>
        </Link>

        <form className="bg-slate-100 p-3 rounded-lg flex items-center">
          <input
            type="text"
            name=""
            placeholder="search..."
            className=" bg-transparent focus:outline-none w-24 sm:w-64"
          />
          <FaSearch className="text-slate-600" />
        </form>
        <ul className="flex gap-4">
          <Link to={"/"}>
            <li className="text-slate-700 hidden sm:inline hover:underline">
              Home
            </li>
          </Link>
          <Link to={"/about"}>
            <li className="text-slate-700 hidden sm:inline hover:underline">
              About
            </li>
          </Link>
          <Link to={"/signin"}>
            <li className="text-slate-700 inline hover:underline">Sign in</li>
          </Link>
        </ul>
      </div>
    </header>
  );
}
