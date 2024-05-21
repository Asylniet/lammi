import React from "react";
import Image from "next/image";
import { SalonSvg } from "../svg/salon.svg";
import { PlaceSvg } from "../svg/place.svg";

export const Salons = () => {
  return (
    <section id="contacts" className="px-2 md:px-4 wrapper">
      <div className="relative max-md:mx-auto mb-20 sm:mb-14 md:mb-32 max-w-fit pe-16">
        <h1 className="font-black text-4xl sm:text-5xl uppercase">
          фотографии
        </h1>
        <div className="-top-full left-0 absolute md:w-full max-md:max-w-full translate-y-1/2">
          <SalonSvg />
        </div>
      </div>
      <div className="flex md:flex-row flex-col flex-wrap justify-center md:justify-between items-start gap-10 md:gap-6 mb-12 text-lg sm:text-base">
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className="flex-1 max-md:mx-auto max-sm:w-full min-w-[270px] max-w-sm"
        >
          <a
            href="https://2gis.kz/almaty/geo/70000001048009372"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="relative mb-4 rounded-2xl w-full overflow-hidden aspect-square">
              <Image src="/location-1.jpg" alt="Таугуль" fill sizes="100%" />
            </div>
            <div className="flex items-center gap-3 font-bold text-3xl">
              <p>Таугуль</p>
              <PlaceSvg size="24" />
            </div>
            <p className="mt-2 w-full">​Микрорайон Таугуль, 19</p>
          </a>
          <div className="py-2"></div>
          <a href="tel:+77078635399" className="flex items-center gap-2">
            <Image src="/phone.svg" alt="Whatsapp" width={16} height={16} />
            <span>+7 707 863 53 99</span>
          </a>
          <div className="py-1"></div>
          <a
            href="https://wa.me/+77078635399"
            className="flex items-center gap-2"
          >
            <Image src="/whatsapp.svg" alt="Whatsapp" width={16} height={16} />
            <span>+7 707 863 53 99</span>
          </a>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="flex-1 max-md:mx-auto max-sm:w-full min-w-[270px] max-w-sm"
        >
          <a
            href="https://2gis.kz/almaty/geo/70000001067112853"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="relative mb-4 rounded-2xl w-full overflow-hidden aspect-square">
              <Image src="/location-2.jpg" alt="Назарбаева" fill sizes="100%" />
            </div>
            <div className="flex items-center gap-3 font-bold text-3xl">
              <p>Назарбаева</p>
              <PlaceSvg size="24" />
            </div>
            <p className="mt-2 w-full">
              Проспект Назарбаева, 223, 1 этаж, А36 бутик
            </p>
          </a>
          <div className="py-2"></div>
          <a href="tel:+77073453183" className="flex items-center gap-2">
            <Image src="/phone.svg" alt="Whatsapp" width={16} height={16} />
            <span>+7 707 345 31 83</span>
          </a>
          <div className="py-1"></div>
          <a
            href="https://wa.me/+77073453183"
            className="flex items-center gap-2"
          >
            <Image src="/whatsapp.svg" alt="Whatsapp" width={16} height={16} />
            <span>+7 707 345 31 83</span>
          </a>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="flex-1 max-md:mx-auto max-sm:w-full min-w-[270px] max-w-sm"
        >
          <a
            href="https://2gis.kz/astana/geo/70000001080663230"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="relative mb-4 rounded-2xl w-full overflow-hidden aspect-square">
              <Image src="/location-3.jpg" alt="Астана" fill sizes="100%" />
            </div>
            <div className="flex items-center gap-3 font-bold text-3xl">
              <p>Астана</p>
              <PlaceSvg size="24" />
            </div>
            <p className="mt-2 w-full">Проспект Туран, 55/10, 1 этаж</p>
          </a>
          <div className="py-2"></div>
          <a href="tel:+77070702603" className="flex items-center gap-2">
            <Image src="/phone.svg" alt="Whatsapp" width={16} height={16} />
            <span>+7 707 070 26 03</span>
          </a>
          <div className="py-1"></div>
          <a
            href="https://wa.me/+77070702603"
            className="flex items-center gap-2"
          >
            <Image src="/whatsapp.svg" alt="Whatsapp" width={16} height={16} />
            <span>+7 707 070 26 03</span>
          </a>
        </div>
      </div>
    </section>
  );
};
