import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo-no-background.svg";
import { FaUserCircle } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";
import { useState } from "react";
import { navigation } from "../navigation";

export default function Header() {
  const [searchInput, setSearchInput] = useState<string>();

  function handelSubmit(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
  }

  return (
    <header className="fixed top-0 z-10 w-full h-16 bg-opacity-75 bg-neutral-400">
      <div className="container flex items-center w-full h-full px-3 ">
        <Link to={"/"}>
          {" "}
          <img src={logo} alt="logo" className="h-8 " />
        </Link>
        <nav className="hidden ml-2 lg:block">
          {navigation?.map((nav, i) => {
            return (
              <NavLink
                className={({ isActive }) =>
                  `p-2  hover:text-neutral-100 ${
                    isActive && "text-neutral-100"
                  }`
                }
                key={i}
                to={nav.ref}
              >
                {nav.title}
              </NavLink>
            );
          })}
        </nav>
        <div className="flex items-center gap-3 ml-auto">
          <div className="">
            <form className="flex items-center gap-2 " onSubmit={handelSubmit}>
              <input
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                type="text"
                placeholder="Search for watch"
                className="hidden p-1 text-white bg-transparent border-gray-400 rounded outline-none focus:border lg:block"
              />
              <button type="submit">
                <BiSearch size={20} />
              </button>
            </form>
          </div>
          <div className="transition-all cursor-pointer active:scale-50">
            <FaUserCircle size={22} />
          </div>
        </div>
      </div>
    </header>
  );
}
