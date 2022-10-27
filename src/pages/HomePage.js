import React from "react";
import bgVideo from "../assets/bgvideo.mp4";
import NavBar from "../components/NavBar";
import Typewriter from "typewriter-effect";
import PrimaryButton from "../components/PrimaryButton";
import ServiceCard from "../components/ServiceCard";

function HomePage() {
  return (
    <div className=" w-full h-screen">
      <div className="absolute h-full w-full bg-black opacity-70"></div>
      <div className="absolute w-full h-full">
        <NavBar />
        <div className="flex items-start flex-col font-FamiljenGbi text-5xl mt-36 ml-20">
          <text className=" text-white my-2">We Provide Best</text>
          <div className="text-lotus-red my-2">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Dispatch")
                  .callFunction(() => {
                    console.log("String typed out!");
                  })
                  .pauseFor(2500)
                  .deleteAll()
                  .callFunction(() => {
                    console.log("All strings were deleted");
                  })
                  .start();
              }}
            />
          </div>
          <text className=" text-white my-2">and Parcel Service</text>
        </div>
        <div className="mt-6 ml-20">
          <PrimaryButton title={"Get Quotes"} />
        </div>
        <ServiceCard />
      </div>
      <video
        className=" object-cover w-full h-full  "
        src={bgVideo}
        autoPlay
        loop
        muted
      />
      <div className="w-full h-full flex items-center justify-center ">
        <h1 className="text-red-500 font-bold underline">Next Items</h1>
      </div>
    </div>
  );
}

export default HomePage;
