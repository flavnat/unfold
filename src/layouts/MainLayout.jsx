import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function MainLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      {/* <Navbar /> */}
      <main className="flex-grow px-4 sm:px-6 lg:px-8 py-6">{children}</main>
      <Footer />
    </div>
  );
}

export default MainLayout;