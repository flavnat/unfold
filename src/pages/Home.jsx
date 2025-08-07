import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Service from "../components/Service";
import Testimonial from "../components/Testimonial";
import WhyChooseUs from "../components/WhyChooseUs";
import MainLayout from "../layouts/MainLayout";

function Home() {
  return (
    <>
      <MainLayout>
        <Hero />
        <Service />
        <Testimonial />
        <WhyChooseUs />
      </MainLayout>
    </>
  );
}

export default Home;
