import { Outlet } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import MobileNavigation from "./Components/MobileNavigation";

export default function Layout() {
  return (
    <>
      <Header />
      <div className="min-h-[90vh]">
        <Outlet />
      </div>
      <Footer />
      <MobileNavigation />
    </>
  );
}
