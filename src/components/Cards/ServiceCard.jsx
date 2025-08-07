
function ServiceCard({ icon, headline, description, hideBorder = false }) {
  return (
    <article
      className={`space-y-4 mt-6 py-4 overflow-hidden ${
        !hideBorder ? "border-r-2 border-white" : ""
      }`}
    >
      <div className="size-12 flex items-center justify-center overflow-hidden">
        <img src={icon} alt="" />
      </div>
      <h4 className="text-2xl mt-6">{headline}</h4>
      <p className="text-sm leading-5 text-zinc-300">{description}</p>
    </article>
  );
}

export default ServiceCard;
