import { ChevronsRightIcon } from "lucide-react";

function Hero() {
  return (
    <section className="md:min-h-dvh px-4 py-10 md:py-0 md:px-6 lg:px-12 flex flex-col lg:grid lg:grid-cols-3 lg:gap-x-6 lg:items-center">
      {/* Text Content */}
      <div className="md:col-span-2 space-y-6">
        <h1 className="text-5xl lg:text-6xl xl:text-7xl leading-tight">
          <span className="text-secondary font-medium">Unfolding </span>
          Potentials, Nurturing Growth
        </h1>

        <p className="text-zinc-400 text-base sm:text-lg lg:text-xl max-w-3xl">
          Empowering organizations to achieve excellence through innovative
          learning, strategic consulting, and agile project management.
        </p>

        <button className="border px-6 py-3 rounded-full bg-secondary text-white flex items-center space-x-3 mt-4 uppercase text-sm  hover:bg-opacity-90 transition">
          <span>Work Together</span>
          <span className="size-8 bg-white text-secondary rounded-full flex justify-center items-center">
            <ChevronsRightIcon strokeWidth={2} size={16} />
          </span>
        </button>

        <div className="mt-8 flex items-center space-x-6">
          <div className="">
            <h1 className="text-3xl sm:text-4xl text-secondary">
              75%
            </h1>
            <p className="text-zinc-500 text-sm">Active daily activity</p>
          </div>
          <div className="">
            <h1 className="text-3xl sm:text-4xl text-secondary">
              ~20k
            </h1>
            <p className="text-zinc-500 text-sm">Active daily users</p>
          </div>
        </div>
      </div>

      {/* Image */}
      <div className="my-10 md:flex hidden">
        <img
          src="/assets/hero1.png"
          alt="Hero illustration"
          className="max-w-full h-auto rounded-2xl shadow-lg"
        />
      </div>
    </section>
  );
}

export default Hero;
