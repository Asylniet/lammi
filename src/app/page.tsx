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

export default async function Home() {
  const trainingsPromise = getTrainings();
  const branchPromise = getBranches();
  const [trainings, branches] = await Promise.all([trainingsPromise, branchPromise]);
  return (
    <main className={`wrapper`}>
      <Header />
      <Hero />
      <Statistics />
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
