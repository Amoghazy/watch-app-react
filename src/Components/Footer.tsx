import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="flex items-center h-16 mt-4 shadow bg-neutral-800">
      <div className="w-full p-4 px-6 mx-auto md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-400 sm:text-center">
          © 2024{" "}
          <Link to="/" className="hover:underline">
            AMoghzy
          </Link>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <Link to="/" className="hover:underline me-4 md:me-6">
              About
            </Link>
          </li>
          <li>
            <Link to="/" className="hover:underline me-4 md:me-6">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link to="/" className="hover:underline me-4 md:me-6">
              Licensing
            </Link>
          </li>
          <li>
            <Link to="/" className="hover:underline">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
