"use client"
import React from "react";
import { Advantages } from "./advantages";
import { Feedback } from "./feedback";
import { Header } from "./header";
import { Hero } from "./hero";
import { Modal, ModalTypes } from "./modal/modal";
import { Products } from "./products";
import { Salons } from "./salons";
import { Staff } from "./staff";
import { Statistics } from "./statistics";
import { Technology } from "./technology";

export default function Home() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [type, setType] = React.useState<ModalTypes>("appointment")

  const openModal = (type: ModalTypes) => {
    setType(type)
    setIsOpen(true)
  }
  return (
    <main className={`wrapper ${isOpen ? "overflow-y-hidden" : ""}`}>
      <Header />
      <Hero openModal={openModal} />
      <Statistics />
      <div className="py-20"></div>
      <Staff openModal={openModal} />
      <div className="py-20"></div>
      <Products />
      <div className="py-20"></div>
      <Advantages />
      <div className="py-20"></div>
      <Technology />
      <div className="py-20"></div>
      <Feedback />
      <div className="py-20"></div>
      <Salons />
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} type={type} />
    </main>
  )
}
