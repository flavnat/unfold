import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function MainLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen max-w-6xl mx-auto">
      {/* <Navbar /> */}
      {/* <Navbar /> */}
      <main className="">{children}</main>
      {/* <Footer /> */}
    </div>
  );
}

export default MainLayout;