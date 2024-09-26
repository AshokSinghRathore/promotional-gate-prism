import Image from "next/image";
import { Divider } from "@nextui-org/divider";
import { Card, CardHeader } from "@nextui-org/card";

import { title, subtitle } from "@/components/primitives";

export default function HomePage() {
  return (
    <section
      className="flex flex-col items-center justify-center gap-4 sm:min-h-screen relative font px-6 sm:px-0"
      id="home"
    >
      <Image
        alt="prism-gate"
        className="w-full h-full object-cover absolute top-0 left-0 sm:h-screen block"
        src="/home-background.jpg"
        width={0}
        height={0}
        sizes="100vw"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-lg"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent rounded-lg"></div>
      <Card className="py-4 px-12 text-center grid bg-inherit shadow-none">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-center text-white">
          <h1 className={title({ size: "sm" })}>
            Effortless Society Management&nbsp;
          </h1>
          <br />
          <h1 className={title({ size: "sm" })}>with</h1>
          <br />
          <h1 className={title({ color: "green", fontWeight: "extrabold", size: "lg" })}>Prism Gate&nbsp;</h1>
          <Divider className="mt-2 bg-gray-300" />
          <h2 className={subtitle({ class: "mt-4 text-gray-200" })}>
          Advanced technology designed to offer convenience and security at home, while keeping you connected with your community.
          </h2>
        </CardHeader>
      </Card>

      <div className="py-4 grid sm:hidden text-center">
        <div className="pb-0 pt-2 px-4 flex-col items-center">
          <h1 className={title({ size: "sm" })}>
            Effortless Salon Management&nbsp;
          </h1>
          <br />
          <h1 className={title({ size: "sm" })}>with</h1>
          <br />
          <h1 className={title({ color: "violet" })}>Smart Salon Bot&nbsp;</h1>
          <Divider className="mt-2 bg-gray-300" />
          <h2 className={subtitle({ class: "mt-4 text-gray-400" })}>
            Revolutionize Your Salon with Smart Automation.
          </h2>
        </div>
      </div>
    </section>
  );
}
