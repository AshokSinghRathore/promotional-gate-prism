import { title, subtitle } from "@/components/primitives";

export default function AboutBottomPage() {
  return (
    <section className="flex flex-col items-center relative justify-center gap-4 py-8 md:py-10 px-6 sm:px-0 bg-black text-white sm:min-h-screen mb-20 sm:mb-0">
      <video src="/about-bottom-video.mp4" muted loop autoPlay className="h-full w-full object-cover opacity-35"/>
      <div className="inline-block max-w-full text-center justify-center absolute">
        <h1 className={title()}>Transform your Society to&nbsp;</h1>
        <h1 className={title({ color: "green" })}>Smart Society&nbsp;</h1>
        <br />
        <h1 className={title()}>
          and take it to The Future.
        </h1>
        <h2 className={subtitle({ class: "mt-4" })}>
          Let Prism Gate Handle the Hard Part, While You Shine.
        </h2>
      </div>
    </section>
  );
}
