import { NavLink } from "react-router-dom";
import { mobileNavigation } from "../navigation";

export default function MobileNavigation() {
  return (
    <section className="fixed bottom-0 z-50 w-full h-16 bg-opacity-70 backdrop-blur-3xl lg:hidden bg-neutral-700">
      {" "}
      <div className="flex justify-around h-full text-neutral-400">
        {mobileNavigation.map((nav, i) => {
          return (
            <NavLink
              className={({ isActive }) =>
                `${
                  isActive && "text-white"
                } flex flex-col justify-center items-center px-3`
              }
              key={i}
              to={nav.ref}
            >
              <div className="text-2xl">{nav.icon}</div>
              <div>{nav.title}</div>
            </NavLink>
          );
        })}
      </div>
    </section>
  );
}
