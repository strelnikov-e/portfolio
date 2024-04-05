import SlideIn from "./utils/SlideIn";

export default function AboutCard({ number, header, text }) {
  return (
    <div className="">
      <div className="flex flex-col gap-3">
        <SlideIn delay="0.2">
          <div className="text-start text-4xl font-extralight">{number}</div>
        </SlideIn>
        <SlideIn delay="0.4">
          <div className="text-start text-2xl">{header}</div>
        </SlideIn>
        <SlideIn delay="0.6">
          <p className="text-justify">{text}</p>
        </SlideIn>
      </div>
    </div>
  );
}
