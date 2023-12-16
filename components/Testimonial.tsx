import React from "react";
import Image from "next/image";
const Testimonial = () => {
  return (
    <div className="flow-root my-[128px] w-[90%] max-w-[1024px] mx-auto">
      <h4 className="text-orange-800 mb-2 text-base text-center font-medium leading-normal">
        TESTIMONIALS
      </h4>
      <h2 className="text-red-950 text-[45px] text-center mb-4 font-normal  leading-[52px]">
        Beautiful Words From Our Clients
      </h2>
      <p className="w-[508px] text-center text-red-950 text-sm font-normal mx-auto leading-tight">
        We want our customer to be happy and satisfied by our hospitality and
        service. We often take feedback from our customers and make improvement
        accordingly.
      </p>
      <div className="flex mt-8 gap-8">
        <div className="flex-1 rounded-[30px] border-2 border-orange-800  px-4 pt-12 pb-4">
          <h4 className="w-72 text-center text-red-950 text-base font-medium  leading-normal">
            Our experience with this jewelry ecommerce website has been nothing
            short of amazing.{" "}
          </h4>
          <Image
            src="/images/photo_testimonial_1.webp"
            height={90}
            width={90}
            alt="profile"
            className="mt-12 rounded-full block mx-auto"
          />
          <p className="text-center mt-4 text-red-950 text-base font-medium leading-normal">
            Sushma Das
          </p>
        </div>
        <div className="flex-1 rounded-[30px] px-4 pt-12 pb-4 shadow-primaryShadow">
          <h4 className="w-72 text-center text-red-950 text-base font-medium  leading-normal">
            Our experience with this jewelry ecommerce website has been nothing
            short of amazing.{" "}
          </h4>
          <Image
            src="/images/photo_testimonial_2.webp"
            height={90}
            width={90}
            alt="profile"
            className="mt-12 rounded-full block mx-auto"
          />
          <p className="text-center mt-4 text-red-950 text-base font-medium leading-normal">
            Jaimon D&apos;cunha
          </p>
        </div>
        <div className="flex-1 rounded-[30px] border-2 border-orange-800  px-4 pt-12 pb-4">
          <h4 className="w-72 text-center text-red-950 text-base font-medium  leading-normal">
            Our experience with this jewelry ecommerce website has been nothing
            short of amazing.{" "}
          </h4>
          <Image
            src="/images/photo_testimonial_3.webp"
            height={90}
            width={90}
            alt="profile"
            className="mt-12 rounded-full block mx-auto"
          />
          <p className="text-center mt-4 text-red-950 text-base font-medium leading-normal">
            Avril D&apos;souza
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
