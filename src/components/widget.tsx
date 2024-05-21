"use client";
import Image from "next/image";
import { FC } from "react";

type WidgetProps = {};

const Widget: FC<WidgetProps> = ({}) => {
  return (
    <div id="widget">
      <a href="https://wa.me/+77073453183">
        <Image src="/whatsapp.svg" alt="Whatsapp" width={20} height={20} />
      </a>
      <a href="tel:+77073453183">
        <Image src="/phone.svg" alt="+77073334386" width={20} height={20} />
      </a>
    </div>
  );
};

export default Widget;
