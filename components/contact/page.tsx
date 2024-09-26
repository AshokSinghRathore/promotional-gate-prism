import { Card, CardBody, CardHeader } from "@nextui-org/card";

import { title } from "@/components/primitives";
import DemoForm from "../demo/form/DemoForm";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function ContactPage() {
  interface IItem {
    href: string;
    label: string;
  }

  return (
    <section
      className="grid sm:grid-cols-2 w-full gap-4 py-8 md:py-10 bg-black sm:px-40 px-6"
      id="contact"
    >
      <div className="sm:grid-cols-1 inline-block max-w-full text-start ">
        <h1 className={title()}>Have some querries ? &nbsp;</h1>
        <br />
        <h1 className={title({ color: "green", fontWeight: "extrabold" })}>
          Contact us&nbsp;
        </h1>
        <Card className="mt-12 w-full bg-black text-gray-200">
          <CardHeader className="text-gray-200 text-start">
            <h2>
              Prism Gate is a comprehensive security and community management
              solution designed for gated premises. Equipped with innovative
              features, the app streamlines operations and enhances the
              experience for residents, management, and other stakeholders.
            </h2>
          </CardHeader>
          <CardBody className="grid sm:grid-cols-2 gap-4">
            <CardBody className="text-start text-gray-200 gap-3 sm:grid-cols-1 text-md">
              {siteConfig.navItems
                .slice(0,3)
                .map((item: IItem, index: number) => (
                  <Link href={item.href} key={index}>
                    {item.label}
                  </Link>
                ))}
            </CardBody>
            <CardBody className="text-start text-gray-200 gap-3 sm:grid-cols-1 text-md">
              {siteConfig.navItems
                .slice(3, 7)
                .map((item: IItem, index: number) => (
                  <Link href={item.href} key={index}>
                    {item.label}
                  </Link>
                ))}
            </CardBody>
          </CardBody>
        </Card>

        <Card className="mt-12 w-full bg-black">
          <CardBody className="text-start text-white text-md">
            {/* <p>Make beautiful websites regardless of your design experience.</p> */}
            <h2 className="">📞 +91-9794514324</h2>
            <h2 className="">📧 hr@code-aspire.com</h2>
            <h2 className="">🌐 www.codeaspire.com</h2>
          </CardBody>
        </Card>
      </div>

      <div className="sm:grid-cols-1 inline-block text-center my-auto">
        <DemoForm />
      </div>
    </section>
  );
}
