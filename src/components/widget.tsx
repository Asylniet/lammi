"use client";
import { useModalStore } from "@/store/modal";
import Image from "next/image";
import { FC } from "react";

type WidgetProps = {};

const Widget: FC<WidgetProps> = ({}) => {
  const { openModal } = useModalStore();
  return (
    <div id="widget">
      <div onClick={() => openModal("whatsapp")}>
        <Image src="/whatsapp.svg" alt="Whatsapp" width={20} height={20} />
      </div>
      <div onClick={() => openModal("contacts")}>
        <Image src="/phone.svg" alt="+77073334386" width={20} height={20} />
      </div>
    </div>
  );
};

export default Widget;
