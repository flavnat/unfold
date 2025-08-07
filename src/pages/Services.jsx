import Footer from "../components/Footer";
import Sr from "../components/Sr";
import MainLayout from "../layouts/MainLayout";

function Services() {
  return (
    <MainLayout>
      <section className="">
        <div className="lg:w-[80%] mx-auto flex justify-center flex-col items-center md:py-24 py-10 text-center space-y-3 md:space-y-4">
          <h1 className="lg:text-6xl md:text-5xl text-4xl">
            Unleash Success with Our Comprehensive Services
          </h1>
          <p className="md:text-lg text-zinc-600 md:w-8/12">
            We offer a wide range of comprehensive services designed to address
            your business needs and propel your organization towards success.
          </p>
        </div>
        <div className="">
          <img
            src="src\assets\hero1.png"
            className="object-cover md:h-[500px] h-[300px] w-full rounded-3xl"
            alt=""
            srcset=""
          />
        </div>
      </section>


      <section className="px-10">
        <Sr />
      </section>
      
      {/* how its work */}
    </MainLayout>
  );
}

export default Services;
