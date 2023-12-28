import React from "react";
import { Advantages } from "./sections/advantages";
import { Feedback } from "./sections/feedback";
import { Header } from "./layout/header";
import { Hero } from "./sections/hero";
import { Modal } from "./modal/modal";
import { Products } from "./sections/products";
import { Salons } from "./sections/salons";
import { Staff } from "./sections/staff";
import { Statistics } from "./sections/statistics";
import { Technology } from "./sections/technology";
import { getTrainings } from "@/api/training";
import { getBranches } from "@/api/branch";
import { getClientCount } from "@/api/clients";

export default async function Home() {
  const trainingsPromise = getTrainings();
  const branchPromise = getBranches();
  const clientsPromise = getClientCount();
  const [trainings, branches, clients] = await Promise.all([trainingsPromise, branchPromise, clientsPromise]);
  return (
    <main className={`wrapper`}>
      <Header />
      <Hero />
      <Statistics clients={clients} />
      <div className="py-20"></div>
      <Staff />
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
      <Modal trainings={trainings} branches={branches} />
    </main>
  )
}
