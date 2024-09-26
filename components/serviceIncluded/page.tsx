import { Divider } from "@nextui-org/divider";
import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Chip } from "@nextui-org/chip";

import { services, ServiceType } from "./service";

import { title } from "@/components/primitives";

export default function ServiceIncludedPage() {
  return (
    <section
      className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 sm:mt-40 sm:min-h-screen px-6 sm:px-0"
      id="service"
    >
      <div className="inline-block max-w-7xl text-center justify-center">
        <h1 className={title({ color: "green", fontWeight: "extrabold" })}>
          Features&nbsp;
        </h1>
        <h1 className={title({ size: "sm" })}>of Prism Gate&nbsp;</h1>
        <Divider className="my-4 bg-gray-300" />
        <br />
        <div className="w-full h-full gap-6 hidden sm:grid">
          {services.map((item: ServiceType, index: number) => (
            <div key={item.id} className="grid sm:grid-cols-2 gap-12 my-16">
              {index % 2 === 0 ? (
                <>
                  {/* Mockup on the left, Card on the right */}
                  <div className="sm:col-span-1">
                    <div className="mockup-phone shadow-lg shadow-gray-400">
                      <div className="camera"></div>
                      <div className="display">
                        <div className="artboard phone-1">
                          <img
                            alt="features"
                            className="w-full h-full object-fit"
                            src={item.imageSrc}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="sm:col-span-1 flex justify-center items-center">
                    <Card className="py-4 cursor-default border-none shadow-none">
                      <CardHeader className="pb-0 pt-2 flex-col items-start gap-3 relative">
                        <Chip
                          className="font-bold text-start text-large bg-black text-white px-4 py-6"
                        >
                          {item.title}
                        </Chip>
                      </CardHeader>
                      <CardBody className="overflow-visible py-2">
                        <small className="text-large">{item.description}</small>
                      </CardBody>
                    </Card>
                  </div>
                </>
              ) : (
                <>
                  {/* Card on the left, Mockup on the right */}
                  <div className="sm:col-span-1 flex justify-center items-center">
                    <Card className="py-4 cursor-default border-none shadow-none">
                      <CardHeader className="pb-0 pt-2 flex-col items-start gap-3 relative">
                        <Chip
                          className="font-bold text-start text-large bg-black text-white px-4 py-6"
                        >
                          {item.title}
                        </Chip>
                      </CardHeader>
                      <CardBody className="overflow-visible py-2">
                        <small className="text-large">{item.description}</small>
                      </CardBody>
                    </Card>
                  </div>
                  <div className="sm:col-span-1">
                    <div className="mockup-phone shadow-lg shadow-gray-400">
                      <div className="camera"></div>
                      <div className="display">
                        <div className="artboard phone-1">
                          <img
                            alt="features"
                            className="w-full h-full object-fit"
                            src={item.imageSrc}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
        <div className="w-full h-full gap-6 grid sm:hidden">
          {services.map((item: ServiceType, index: number) => (
            <div key={item.id} className="grid sm:grid-cols-2 gap-12 my-16">
                <>
                  {/* Card on the left, Mockup on the right */}
                  <div className="sm:col-span-1 flex justify-center items-center">
                    <Card className="py-4 cursor-default border-none shadow-none">
                      <CardHeader className="py-2 flex-col items-start gap-3 relative">
                        <Chip
                          className="font-bold text-start text-large bg-black text-white px-4 py-6"
                        >
                          {item.title}
                        </Chip>
                      </CardHeader>
                      <CardBody className="overflow-visible py-2">
                        <small className="text-large">{item.description}</small>
                      </CardBody>
                    </Card>
                  </div>
                  <div className="sm:col-span-1">
                    <div className="mockup-phone shadow-lg shadow-gray-400">
                      <div className="camera"></div>
                      <div className="display">
                        <div className="artboard phone-1">
                          <img
                            alt="features"
                            className="w-full h-full object-fit"
                            src={item.imageSrc}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
