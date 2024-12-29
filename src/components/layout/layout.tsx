import { Outlet } from "react-router";
import Header from "../header/header";
import Footer from "../footer/footer";

const Layout = () => {
  return (
    <div className="flex flex-col bg-muted/40 min-h-screen">
      <Header />
      <main className="flex-grow px-80 mt-6">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
