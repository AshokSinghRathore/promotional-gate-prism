import Image from "next/image";
import { Divider } from "@nextui-org/divider";
import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { Chip } from "@nextui-org/chip";
import { User } from "@nextui-org/user";

import { testimonials, TestimonialType } from "./testimonials";

import { title } from "@/components/primitives";

export default function TestimonialsPage() {
  return (
    <section
      className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 sm:min-h-screen sm:mb-20 px-6 sm:px-0"
      id="testimonials"
    >
      <div className="inline-block max-w-7xl text-center justify-center">
        {/* <h1 className={title()}>Make&nbsp;</h1> */}
        <h1 className={title({ color: "green", fontWeight: "extrabold" })}>
          Testimonials&nbsp;
        </h1>
        <Divider className="my-4 bg-gray-300" />
        <br />
        <div className="w-full h-full grid sm:grid-cols-3 grid-cols-1 gap-6">
          {testimonials.map((item: TestimonialType) => (
            <Card className="py-4 gap-3" key={item.id}>
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <User
                  name={item.name}
                  description={item.role}
                  avatarProps={{
                    src: item.imageSrc,
                  }}
                />
              </CardHeader>
              <CardBody className="overflow-visible py-2 flex flex-col gap-4">
                <p className="text-default-500 text-lg">" {item.quote} "</p>
                {/* <h4 className="font-bold text-large">{item.name}</h4>
                <p className="text-tiny font-normal">{item.role}</p> */}
                <Chip
                  color="primary"
                  className="font-bold text-start text-large"
                >
                  ★ {item.rating}/5
                </Chip>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
