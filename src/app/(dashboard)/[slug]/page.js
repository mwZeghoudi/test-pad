import Image from "next/image";
import { Button } from "@/components/ui/button";
export default function page({ slug }) {
  return (
    <section className="space-y-5">
      <h1>Bonjour! {slug}</h1>
      <div className="flex gap-5 bg-gray-100 p-5 rounded-[20px]">
        <Image
          className="w-100 h-auto"
          alt="barman"
          src={"/bar.png"}
          height={1000}
          width={1000}
        />
        <div className="grow-1 flex flex-col justify-between">
          <h1>You don’t have any deal campaign created</h1>
          <p>
            Creating local deal campaigns with POKEADEAL helps businesses
            attract new customers by offering time-limited discounts and
            promotions that drive foot traffic and increase visibility.
          </p>
          <p>
            By showcasing exclusive deals to nearby shoppers, businesses can
            stand out in a competitive market and encourage first-time visits.
          </p>
          <p>
            <span>Example:</span> A local coffee shop launches a "Buy One, Get
            One Free Latte" deal through POKEADEAL. The promotion appears to
            users nearby, bringing in new customers who might not have
            discovered the shop otherwise. Many return for future visits,
            boosting long-term sales.
          </p>
          <Button className="rounded-full font-normal capitalize text-white w-fit px-8 bg-linear-to-bl from-[#9025FC] to-[#1308FE] hover:opacity-90">
            create your first deal
          </Button>
        </div>
      </div>
    </section>
  );
}
