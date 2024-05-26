import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logo-no-background.svg";
import { FaUserCircle } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";
import { useEffect, useMemo, useState } from "react";
import { navigation } from "../navigation";
import { debounce } from "lodash";

export default function Header() {
  const { search } = useLocation();

  const [searchInput, setSearchInput] = useState<string>(
    search?.split("=")[1]?.replace(/%20/g, " ") || ""
  );

  const navigate = useNavigate();
  function handelSubmit(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
  }
  {
    /*
When the debounced function is called again before the previous delay has expired, 
the previous call is canceled, and the timer restarts.
 This ensures that only the latest call is executed after the specified delay.
*/
  }
  const debouncedNavigate = useMemo(() => {
    console.log("inside debounce");
    return debounce((input) => {
      console.log(input);
      if (input) {
        navigate(`/search?q=${input}`);
      }
    }, 500);
  }, [navigate]);

  useEffect(() => {
    //The previous debounce timer for previous input is canceled automatically by the debounce function
    // if a new input is provided before the timer expires and the new timer is started .
    //all that is done auto by the debounce function
    debouncedNavigate(searchInput);

    return () => {
      debouncedNavigate.cancel();
    };
  }, [searchInput, debouncedNavigate]);
  useEffect(() => {
    setSearchInput(search?.split("=")[1]?.replace(/%20/g, " ") || "");
  }, [search]);
  const handleKeyPress = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      e.currentTarget.blur();
    }
  };
  return (
    <header className="fixed top-0 z-50 w-full h-16 bg-black bg-opacity-50">
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
                  `p-2 text-xl text-neutral-500  hover:text-neutral-100 ${
                    isActive && "!text-white"
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
                onKeyDown={handleKeyPress}
                value={searchInput}
                onKeyUp={(e: React.KeyboardEvent<HTMLInputElement>) => {
                  setSearchInput(e.currentTarget.value);
                }}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setSearchInput(e.currentTarget.value);
                }}
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
