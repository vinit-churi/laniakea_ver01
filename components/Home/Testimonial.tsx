import React from "react";
import Image from "next/image";
const Testimonial = () => {
  return (
    <div className="mx-auto my-[128px] flow-root w-[90%] max-w-[1024px] max-[1120px]:my-16">
      <h4 className="mb-2 text-center text-base font-medium leading-normal text-orange-800">
        TESTIMONIALS
      </h4>
      <h2 className="mb-4 text-center text-[45px] font-normal leading-[52px]  text-red-950">
        Beautiful Words From Our Clients
      </h2>
      <p className="mx-auto w-[508px] text-center text-sm font-normal leading-tight text-red-950 max-[1120px]:w-full max-[1120px]:max-w-[508px]">
        We want our customer to be happy and satisfied by our hospitality and
        service. We often take feedback from our customers and make improvement
        accordingly.
      </p>
      <div className="mt-8 flex gap-8 max-[1120px]:flex-col">
        <div className="aspect-square  flex-1 rounded-[30px] border-2 border-orange-800 px-4 pb-4 pt-12 max-[1120px]:mx-auto max-[1120px]:min-h-max max-[1120px]:w-full max-[1120px]:max-w-[320px] max-[400px]:aspect-auto">
          <h4 className="mx-auto w-[90%] text-center text-base font-medium leading-normal  text-red-950">
            Our experience with this jewelry ecommerce website has been nothing
            short of amazing.{" "}
          </h4>
          <Image
            src="/images/photo_testimonial_1.webp"
            height={90}
            width={90}
            alt="profile"
            className="mx-auto mt-12 block rounded-full"
          />
          <p className="mt-4 text-center text-base font-medium leading-normal text-red-950">
            Sushma Das
          </p>
        </div>
        <div className="aspect-square flex-1 rounded-[30px] px-4 pb-4 pt-12 shadow-primaryShadow max-[1120px]:mx-auto max-[1120px]:min-h-max max-[1120px]:w-full max-[1120px]:max-w-[320px] max-[400px]:aspect-auto">
          <h4 className="mx-auto w-[90%] text-center text-base font-medium leading-normal  text-red-950">
            The quality of their products and the level of customer service they
            provide is outstanding.{" "}
          </h4>
          <Image
            src="/images/photo_testimonial_2.webp"
            height={90}
            width={90}
            alt="profile"
            className="mx-auto mt-12 block rounded-full"
          />
          <p className="mt-4 text-center text-base font-medium leading-normal text-red-950">
            Jaimon D&apos;cunha
          </p>
        </div>
        <div className="aspect-square flex-1 rounded-[30px] border-2 border-orange-800 px-4 pb-4 pt-12 max-[1120px]:mx-auto max-[1120px]:min-h-max max-[1120px]:w-full max-[1120px]:max-w-[320px] max-[400px]:aspect-auto">
          <h4 className="mx-auto w-[90%] text-center text-base font-medium leading-normal  text-red-950">
            The selection of rings was incredible, and the prices were very
            reasonable. I was also impressed with the customer service.{" "}
          </h4>
          <Image
            src="/images/photo_testimonial_3.webp"
            height={90}
            width={90}
            alt="profile"
            className="mx-auto mt-6 block rounded-full"
          />
          <p className="mt-4 text-center text-base font-medium leading-normal text-red-950">
            Avril D&apos;souza
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
