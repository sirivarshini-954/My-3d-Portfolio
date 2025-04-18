"use client";
import RenderModel from "@/components/RenderModel";
import WizardModel from "@/components/models/BlueFairy";
import Navigation from "@/components/navigation";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: 0.65,
          zIndex: -50,
        }}
      >
        <source src="/background/Background-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Transparent Overlay to Darken Video */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
           // Above video, below content
        }}
      />
      <div className="w-full h-screen">
        <Navigation />
        <RenderModel>
          <WizardModel />
        </RenderModel>
      </div>
    </main>
  );
}