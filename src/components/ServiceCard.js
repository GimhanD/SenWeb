import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBox,
  faTruckFast,
  faWarehouse,
  faCartFlatbed,
} from "@fortawesome/free-solid-svg-icons";

function ServiceCard({ icon, title }) {
  return (
    <div className="flex justify-between items-center mx-20">
      <div className="flex justify-center items-center group/item hover:bg-opacity-20 hover:bg-lotus-red transition duration-100 mt-20  bg-white bg-opacity-20 w-60 h-36 ">
        <div className="group-hover/item:visible transition delay-100 group/edit invisible absolute w-60 h-36 p-8 text-center flex items-center ">
          <text class=" text-white ">
            Delivering urgent items on demand with zero hassle.
          </text>
        </div>
        <div className="flex flex-col items-center justify-center p-3 ">
          <div className="group-hover/item:invisible transition duration-200 ">
            <FontAwesomeIcon icon={faBox} size="3x" color="#e44650" />
          </div>
          <text className="text-lg text-white mt-3 font-medium text-center group-hover/item:invisible transition duration-200">
            Sen Currior
          </text>
        </div>
      </div>
      <div className="flex justify-center items-center group/item hover:bg-opacity-20 hover:bg-lotus-red transition duration-100 mt-20  bg-white bg-opacity-20 w-60 h-36 ">
        <div className="group-hover/item:visible transition delay-100 group/edit invisible absolute w-60 h-36 p-8 text-center flex items-center ">
          <text class=" text-white ">
            Covering all suburbs in Sydney for your short distance delivery
            purposes.
          </text>
        </div>
        <div className="flex flex-col items-center justify-center p-3 ">
          <div className="group-hover/item:invisible transition duration-200 ">
            <FontAwesomeIcon icon={faTruckFast} size="3x" color="#e44650" />
          </div>
          <text className="text-lg text-white mt-3 font-medium text-center group-hover/item:invisible transition duration-200">
            Sen Sydney Local Distribution
          </text>
        </div>
      </div>
      <div className="flex justify-center items-center group/item hover:bg-opacity-20 hover:bg-lotus-red transition duration-100 mt-20  bg-white bg-opacity-20 w-60 h-36 ">
        <div className="group-hover/item:visible transition delay-100 group/edit invisible absolute w-60 h-36 p-8 text-center flex items-center ">
          <text class=" text-white ">Pre-planned interstate deliveries.</text>
        </div>
        <div className="flex flex-col items-center justify-center p-3 ">
          <div className="group-hover/item:invisible transition duration-200 ">
            <FontAwesomeIcon icon={faWarehouse} size="3x" color="#e44650" />
          </div>
          <text className="text-lg text-white mt-3 font-medium text-center group-hover/item:invisible transition duration-200">
            Sydney Linehaul Operation
          </text>
        </div>
      </div>
      <div className="flex justify-center items-center group/item hover:bg-opacity-20 hover:bg-lotus-red transition duration-100 mt-20  bg-white bg-opacity-20 w-60 h-36 ">
        <div className="group-hover/item:visible transition delay-100 group/edit invisible absolute w-60 h-36 p-8 text-center flex items-center ">
          <text class=" text-white ">
            Pre-planned deliveries via our hub at Sydney.
          </text>
        </div>
        <div className="flex flex-col items-center justify-center p-3 ">
          <div className="group-hover/item:invisible transition duration-200 ">
            <FontAwesomeIcon icon={faCartFlatbed} size="3x" color="#e44650" />
          </div>
          <text className="text-lg text-white mt-3 font-medium text-center group-hover/item:invisible transition duration-200">
            Sen Consolidated Hub
          </text>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;
