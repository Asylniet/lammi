import { Advantages } from "./advantages";
import { Header } from "./header";
import { Hero } from "./hero";
import { Products } from "./products";
import { Staff } from "./staff";
import { Statistics } from "./statistics";

export default function Home() {
  return (
    <main className="wrapper max-2xl:overflow-hidden">
      <Header />
      <Hero />
      <Statistics />
      <div className="py-20"></div>
      <Staff />
      <div className="py-20"></div>
      <Products />
      <div className="py-20"></div>
      <Advantages />
    </main>
  )
}
