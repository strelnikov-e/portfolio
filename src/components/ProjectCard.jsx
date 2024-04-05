export default function ProjectCard({ title, text, image, href, hrefName }) {
  return (
    <a
      href={href}
      className=" hover:text-accent-3 opacity-80 hover:opacity-100"
    >
      <div className="relative rounded flex-none w-[350px] snap-always snap-center py-6 px-4 hover:shadow-lg">
        <div className="flex flex-col gap-3 justify-between">
          <img src={image} alt="" />

          <div className="text-start text-2xl uppercase">{title}</div>
          <p className="text-justify text-content-mate">{text}</p>
        </div>
      </div>
    </a>
  );
}
