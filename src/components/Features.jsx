export default function FeatureHeadline() {
  return (
    <section className="bg-blue-600 text-white p-12">
      <div className="relative max-w-4xl">
        {/* Vertical line on the left */}
        <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-white/40"></div>

        <h1 className="text-5xl font-bold leading-tight">
          <span className="relative inline-block">
            Build better
            {/* Small horizontal line after "better" */}
            <span className="absolute top-1/2 right-[-80px] w-20 h-[1px] bg-white/40 translate-y-[-50%]"></span>
          </span>
          <br />
          features with rapid
          <br />
          customer feedback
        </h1>
      </div>
    </section>
  );
}
