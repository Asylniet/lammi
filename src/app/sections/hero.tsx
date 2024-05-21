"use client";
import Button from "@/components/button";
import Image from "next/image";
import { Parallax } from "react-scroll-parallax";
import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useModalStore } from "@/store/modal";

export const Hero: React.FC = ({}) => {
  React.useEffect(() => {
    AOS.init({
      duration: 500,
      once: true,
      offset: 100,
    });
  }, []);

  const openModal = useModalStore((state) => state.openModal);
  return (
    <section
      id="hero"
      className="relative flex flex-col sm:justify-center items-center sm:items-stretch px-2 sm:px-3 md:px-4 pt-24 sm:pt-0 h-screen min-h-[18.75rem] max-h-[60rem]"
    >
      <div className="relative w-full isolate">
        <Parallax speed={10} className="relative z-10">
          <div className="sm:block top-full right-full absolute hidden w-96 translate-x-14 translate-y-64 pointer-events-none aspect-[0.7]">
            <Image
              fetchPriority="low"
              src="/Brush.png"
              alt=""
              fill
              sizes="24rem"
            />
          </div>
        </Parallax>
        <div
          data-aos="fade-up"
          data-aos-delay
          className="sm:block flex justify-center items-center gap-5 max-sm:mx-auto mb-8 sm:mb-14 w-full max-sm:w-11/12 max-w-lg"
        >
          <div className="relative sm:hidden w-[20%] aspect-square">
            <Image src="/Lammi.png" fill alt="Lammi" sizes="20%" />
          </div>
          <div className="relative w-full aspect-[6.5]">
            <Image
              src="/Lammi-text.png"
              alt="Lammi Me"
              fill
              sizes="100%"
              className="object-contain"
            />
          </div>
        </div>
        <h2
          data-aos="fade-up"
          data-aos-delay="100"
          className="mb-12 sm:mb-14 font-extrabold sm:font-black text-center text-lg sm:text-start sm:text-3xl"
        >
          <span className="sm:inline hidden">- </span>
          Сеть салонов экспертного класса <br /> по ламинации ресниц и бровей
        </h2>
        <Button
          className="sm:block hidden"
          onClick={() => openModal("appointment")}
        >
          Записаться на прием
        </Button>
        <div className="sm:top-1/2 sm:right-2 xl:-right-32 sm:-z-[1] sm:absolute mx-auto mb-10 sm:mb-0 w-full sm:w-2/5 max-w-md sm:max-w-xl sm:-translate-y-1/2">
          <div className="relative flex flex-col justify-end items-center w-full aspect-square">
            {/* <div className="bottom-2 left-1/2 absolute bg-primary blur-3xl rounded-full w-3/6 -translate-x-1/2 aspect-square"></div> */}
            <Image src="/Lammi-large.png" priority fill alt="" />
            <Button
              className="block sm:hidden"
              onClick={() => openModal("appointment")}
            >
              Записаться на прием
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
