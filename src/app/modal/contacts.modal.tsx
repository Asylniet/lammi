import { FC } from "react";
import { PlaceSvg } from "../svg/place.svg";

type ContactsModalProps = {};

const ContactsModal: FC<ContactsModalProps> = ({}) => {
  return (
    <div className="flex flex-col flex-wrap items-start gap-10 md:gap-6 px-6 text-lg sm:text-base">
      <div className="font-bold text-4xl">Выберите филиал</div>
      <div className="flex-1 min-w-[50px] max-w-sm">
        <a href="tel:+77078635399" target="_blank" rel="noopener noreferrer">
          <div className="flex items-center gap-3 font-bold text-3xl">
            <p>Таугуль</p>
            <PlaceSvg size="24" />
          </div>
          <p className="mt-2 w-full">​Микрорайон Таугуль, 19</p>
        </a>
      </div>
      <div className="flex-1 min-w-[50px] max-w-sm">
        <a href="tel:+77073453183" target="_blank" rel="noopener noreferrer">
          <div className="flex items-center gap-3 font-bold text-3xl">
            <p>Назарбаева</p>
            <PlaceSvg size="24" />
          </div>
          <p className="mt-2 w-full">
            Проспект Назарбаева, 223, 1 этаж, А36 бутик
          </p>
        </a>
      </div>
      <div className="flex-1 min-w-[50px] max-w-sm">
        <a href="tel:+77070702603" target="_blank" rel="noopener noreferrer">
          <div className="flex items-center gap-3 font-bold text-3xl">
            <p>Астана</p>
            <PlaceSvg size="24" />
          </div>
          <p className="mt-2 w-full">Проспект Туран, 55/10, 1 этаж</p>
        </a>
      </div>
    </div>
  );
};

export default ContactsModal;
