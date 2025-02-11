import Hotels from "@/components/Hotels";
import Questions from "@/components/Questions";
import Image from "next/image";
import Link from "next/link";

const Home = async () => {
  return (
    <main className="bg-greyLightest min-h-screen">
      <section className="relative w-full">
        <Image
          src="/hero.jpg"
          alt=""
          layout="responsive"
          width={100}
          height={100}
        />
      </section>
      <div></div>
      <section className="bg-brown text-greyLightest flex flex-col items-center justify-center px-12 py-36 space-y-3">
        <h2 className="text-2xl">THE WEDDING</h2>
        <div className="flex flex-col items-center justify-center ">
          <p>6th September 2025</p>
          <p>Three O&apos;Clock in the Afternoon</p>
          <p>The Oaks Barn</p>
          <p>Dilhorne ST10 2PL</p>
        </div>
      </section>
      <section className="text-brown flex flex-col items-center justify-center px-12 py-36 space-y-3">
        <h2>RECEPTION TO FOLLOW</h2>
        <p>Dinner, Drinks, and Dancing</p>
      </section>
      <hr />
      <section className="flex justify-center px-12 py-36">
        <p className="text-brown">IMAGE PLACEHOLDER</p>
      </section>
      <hr />
      <Hotels />
      <hr />
      <section className="text-brown flex flex-col items-center justify-center px-12 py-36 space-y-3">
        <h2>THANK YOU FROM THE BOTTOM OF OUR HEARTS!</h2>
      </section>
      <hr />
      <section className="bg-brown text-greyLightest flex flex-col items-center justify-center px-12 py-36 space-y-3">
        <h2>YOU&apos;VE GOT QUESTIONS</h2>
      </section>
      <Questions />
      <hr />

      <section className="bg-brown text-greyLightest flex flex-col items-center justify-center px-12 py-36 space-y-3">
        <Link href="/rsvp">
          <button className="text-greyLightest border p-2">RSVP</button>
        </Link>
      </section>
    </main>
  );
};

export default Home;
