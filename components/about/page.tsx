import { title, subtitle } from "@/components/primitives";
import Image from "next/image";
import { Divider } from "@nextui-org/divider";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";

export default function AboutPage() {
  return (
    <section
      className="flex flex-col items-start justify-center gap-4 relative w-full sm:h-screen shadow-none border-none px-6 sm:px-60 my-20 sm:py-0"
      id="about"
    >

      <Card className="py-4 grid sm:grid-cols-3 rounded-none shadow-none border-none" >
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start sm:col-span-2">
          <h1 className={title({ color: "green", fontWeight: "extrabold" })}>About us&nbsp;</h1>
          <Divider className="mt-2 mb-4 bg-gray-300" />
          <h4 className="font-normal text-large">
          Prism Gate is a comprehensive security and community management solution designed for gated premises. Equipped with innovative features, the app streamlines operations and enhances the experience for residents, management, and other stakeholders. By making society management more efficient, secure, and user-friendly, Prism Gate ensures a better living environment for everyone involved.
          </h4>
        </CardHeader>
        <CardBody className="overflow-visible py-2 sm:col-span-1">
          <Image
            alt="Card background"
            className="object-cover rounded-xl w-full h-full"
            src="/about.jpg"
            height={270}
            width={270}
            sizes="100vw"
          />
        </CardBody>
      </Card>
    </section>
  );
}
