import React from "react";
import bgVideo from "../assets/bgvideo.mp4";
import NavBar from "../components/NavBar";
import Typewriter from "typewriter-effect";
import PrimaryButton from "../components/PrimaryButton";
import ServiceCard from "../components/ServiceCard";
import Lottie from "lottie-react";
import logistic from "../constants/animations/105619-logistic.json";

function HomePage() {
  return (
    <div className=" w-full h-screen">
      <div className=" w-full h-screen">
        <video
          className=" object-cover w-full h-full absolute "
          src={bgVideo}
          autoPlay
          loop
          muted
        />
        <div className="absolute h-full w-full bg-black opacity-70"></div>
        <div className="absolute w-full h-full">
          <NavBar />
          <div className="flex items-start flex-col  mt-32 ml-20">
            <text className=" text-white my-2 text-5xl font-FamiljenGbi">
              We are on the move ensuring,
            </text>
            <div className="text-lotus-red my-2 text-5xl font-FamiljenGbi">
              <Typewriter
                options={{
                  strings: [
                    "Quick",
                    "Safe",
                    "Reliable",
                    "Affordable",
                    "Hassle-free",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
            <text className=" text-white my-2 text-5xl font-FamiljenGbi">
              Deliveries.
            </text>
            <text className="text-2xl text-white my-2 w-2/5 mt-1 font-thin">
              Dedicated to provide high quality customer service together with
              trust, pride and warmth.
            </text>
          </div>
          <div className="mt-6 ml-20">
            <PrimaryButton title={"Get Quotes"} />
          </div>
          <ServiceCard />
        </div>
      </div>
      <div className="border-b-2">
        <div className="flex flex-col ml-20 mt-20 mb-10">
          <text className="font-ExpletusSans-BoldItalic text-2xl text-lotus-red">
            Who we are...
          </text>
          <div className=" m-6 flex justify-center ">
            <text className="font-EncodeSansSemiCondensed-ExtraLight text-6xl mr-3 mb3 ">
              "
            </text>
            <text className="font-EncodeSansSemiCondensed-ExtraLight  text-4xl text-center w-3/4">
              We, Sen Transport is the third party that links both ends of
              pick-up and delivery.
            </text>
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col mx-20 mt-20 mb-20">
          <text className="font-ExpletusSans-BoldItalic text-2xl text-lotus-red">
            Who we are...
          </text>
          <div className="flex flex-row items-center  justify-between mx-20">
            <div className="font-EncodeSansSemiCondensed-ExtraLight text-3xl text w-1/2">
              <text className="leading-10">Since your choice is </text>
              <text className="text-lotus-red leading-10">our priority</text>
              <text className="leading-10">, Sen operations are simplified for easy access .We provide
              </text><text className="text-lotus-red leading-10"> safe</text>
              <text> and </text>
              <text className="text-lotus-red leading-10">efficient </text>
              <text className="leading-10">deliveries leaving nothing behind to worry about.
              </text>
            </div>

            <div className="w-1/4 h-auto">
              <Lottie animationData={logistic} />
            </div>
          </div>
        </div>
      </div>
      <h1>next</h1>
    </div>
  );
}

export default HomePage;
