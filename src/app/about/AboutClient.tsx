"use client";
import Image from "next/image";
import bg from "../../../public/background/About-bg.jpg";
import RenderModel from "@/components/RenderModel";
import AboutDetails from "@/components/about";
import dynamic from "next/dynamic";

const FairyModel = dynamic(() => import("@/components/models/Fairy"), {
  ssr: false,
});

export default function AboutClient() {
  return (
    <>
      <Image
        src={bg}
        priority
        sizes="100vw"
        alt="Next.js Portfolio website's about page background image"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50"
      />
      
      <div className="w-full h-[500px] xs:h-[600px] sm:h-screen absolute top-1/2 -translate-y-1/2 left-0 z-10"> {/* Fixed height */}
        <RenderModel>
          <FairyModel />
        </RenderModel>
      </div>

      <div className="relative w-full h-screen flex flex-col items-center justify-center">
        <div className="absolute flex flex-col items-center text-center top-[65%] sm:top-[75%] left-1/2 -translate-y-1/2 -translate-x-1/2"> {/* Moved downward */}
          <h1 className="font-bold text-4xl xs:text-5xl sm:text-6xl lg:text-6xl text-accent"> {/* Changed to purple */}
            Siri Varshini
          </h1>
          <p className="font-light text-foreground text-lg">
            Scroll down to know more about me
          </p>
        </div>
      </div>

      <AboutDetails />
    </>
  );
}