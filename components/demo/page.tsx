"use client";

import { Divider } from "@nextui-org/divider";

import DemoForm from "./form/DemoForm";

import { title, subtitle } from "@/components/primitives";

export default function DemoPage() {
  return (
    <section
      className="flex items-center justify-center gap-6 py-8 my-8 sm:py-0 sm:min-h-screen px-6 sm:px-0"
      id="demo"
    >
      <div className="grid sm:grid-cols-2 gap-6 py-8 my-8 md:py-10">
      <div className="flex flex-col max-w-xl text-center justify-center sm:col-span-1">
        <h1 className={title({ color: "green", fontWeight: "extrabold" })}>Demo&nbsp;</h1>
        <h1 className="text-4xl font-bold mt-4">A Quick Walkthrough of Our Solution</h1>
        <br />
        <h2 className={subtitle({ class: "mt-4" })}>
          We offer a complimentary demo to give customers a clear insight into
          our product.
        </h2>
        <Divider className="my-4 bg-gray-300" />
      </div>
      {/* <DemoForm /> */}
      <iframe src="/about-bottom-video.mp4"  className="h-full w-full" />
      </div>
    </section>
  );
}
