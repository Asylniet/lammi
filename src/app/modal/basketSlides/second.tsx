import React from "react";
import { TotalSum } from "./totalSum";
import Button from "@/components/button";
import { useSwiper } from "swiper/react";
import { makeOrder } from "@/api/appointment";
import { useMutation } from "@tanstack/react-query";
import { useProductStore } from "@/store/products";
import { ArrowSvg } from "@/app/svg/arrow.svg";
import { formatPhone } from "@/lib/formatPhone";

export const Second = () => {
  const swiper = useSwiper();
  const [name, setName] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [number, setNumber] = React.useState("");
  const products = useProductStore((state) => state.products);

  const mutation = useMutation({
    mutationKey: ["createOrder"],
    mutationFn: makeOrder,
    onSuccess: (data) => {
      window.location.href = data;
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutation.mutate({
      client: {
        full_name: name,
        delivery_address: address,
        phone_number: formatPhone(number),
      },
      products: products.map((product) => ({
        id: product.product.id,
        quantity: product.quantity,
      })),
    });
  };
  return (
    <>
      <h1 className="mb-4 px-2 text-center text-xl font-bold uppercase">
        Корзина
      </h1>
      <div className="bg-accent mb-6 h-px w-full"></div>
      <div className="mx-auto flex h-full max-w-[600px] flex-col px-6">
        <TotalSum />
        <button
          onClick={() => swiper.slidePrev()}
          className="bg-accent/20 my-4 flex w-fit items-center gap-2 rounded-md px-4 py-2"
        >
          <div className="flex max-w-[15px] rotate-180 items-center">
            <ArrowSvg />
          </div>
          Изменить корзину
        </button>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="name">Полное имя</label>
            <input
              type="text"
              placeholder="Имя Фамилия"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="address">Номер телефона</label>
            <input
              type="tel"
              placeholder="+7 777 777 77 77"
              id="phone"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="address">Адрес доставки</label>
            <input
              type="text"
              placeholder="Адрес"
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="text-foreground mx-auto mt-12 w-fit">
            <Button status={mutation.status} disabled={!name || !address}>
              Оформить заказ
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};
