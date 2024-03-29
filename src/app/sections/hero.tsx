"use client"
import Button from "@/components/button"
import Image from "next/image"
import { Parallax } from "react-scroll-parallax"
import React from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import { useModalStore } from "@/store/modal"

export const Hero: React.FC = ({ }) => {
  React.useEffect(() => {
    AOS.init({
      duration: 500,
      once: true,
      offset: 100,
    })
  }, []);
  
  const openModal = useModalStore(state => state.openModal);
  return (
    <section id="hero" className="pt-24 sm:pt-0 h-screen min-h-[18.75rem] max-h-[60rem] flex flex-col items-center sm:items-stretch sm:justify-center relative px-2 sm:px-3 md:px-4">
      <div className="relative w-full isolate">
        <Parallax speed={10} className="relative z-10">
          <div className="hidden sm:block absolute top-full translate-x-14 translate-y-64 right-full w-96 aspect-[0.7] pointer-events-none">
            <Image fetchPriority="low" src="/Brush.png" alt="" fill sizes="24rem" />
          </div>
        </Parallax>
        <div data-aos="fade-up" data-aos-delay className="max-sm:w-11/12 w-full max-w-lg flex items-center justify-center sm:block mb-8 sm:mb-14 gap-5 max-sm:mx-auto">
          <div className="sm:hidden relative aspect-square w-[20%]">
            <Image src="/Lammi.png" fill alt='Lammi' sizes="20%" />
          </div>
          <div className="w-full aspect-[6.5] relative">
            <Image src="/Lammi-text.png" alt="Lammi Me" fill sizes="100%" className='object-contain' />
          </div>
        </div>
        <h2 data-aos="fade-up" data-aos-delay="100" className="text-center font-extrabold text-lg sm:text-start sm:font-black sm:text-3xl mb-12 sm:mb-14">
          <span className="hidden sm:inline">- </span>
          Сеть салонов экспертного класса <br /> по ламинации ресниц и бровей 
        </h2>
        <Button className="hidden sm:block" onClick={() => openModal("appointment")}>
          Записаться на прием
        </Button>
        <div className="mx-auto sm:absolute sm:-right-24 xl:-right-40 sm:top-1/2 max-w-lg sm:max-w-3xl w-full sm:w-3/5 sm:-translate-y-1/2 sm:-z-[1] mb-10 sm:mb-0">
          <div className="flex flex-col items-center justify-end relative w-full aspect-[1.2]">
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-4/6 blur-3xl aspect-square rounded-full bg-primary"></div>
            <Image src="/Hero-right.png" priority sizes="100%" fill alt="" />
            <Button className="sm:hidden block" onClick={() => openModal("appointment")}>
              Записаться на прием
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

