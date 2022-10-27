import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBox, faTruckFast, faWarehouse, faCartFlatbed } from "@fortawesome/free-solid-svg-icons";

function ServiceCard({ icon, title }) {
  return (
    <div className="flex justify-between items-center my-6 mx-20">
      <div className=" mt-28 flex flex-col items-center justify-center bg-white bg-opacity-20 w-60 h-36 p-3">
        <div className="">
          <FontAwesomeIcon icon={faBox} size="3x" color="#e44650" />
        </div>
        <text className="text-lg text-white mt-3 font-medium text-center">
          Sen Currior
        </text>
      </div>
      <div className=" mt-28 flex flex-col items-center justify-center bg-white bg-opacity-20 w-60 h-36 p-3">
        <div className="">
          <FontAwesomeIcon icon={faTruckFast} size="3x" color="#e44650" />
        </div>
        <text className="text-lg text-white mt-3 font-medium text-center">
          Sen Sydney Local Distribution
        </text>
      </div>
      <div className=" mt-28 flex flex-col items-center justify-center bg-white bg-opacity-20 w-60 h-36 p-3 ">
        <div className="">
          <FontAwesomeIcon icon={faWarehouse} size="3x" color="#e44650" />
        </div>
        <text className="text-lg text-white mt-3 font-medium text-center">
          Sydney Linehaul Operation
        </text>
      </div>
      <div className=" mt-28 flex flex-col items-center justify-center bg-white bg-opacity-20 w-60 h-36 p-3">
        <div className="">
          <FontAwesomeIcon icon={faCartFlatbed} size="3x" color="#e44650" />
        </div>
        <text className="text-lg text-white mt-3 font-medium text-center">
          Sen Consolidated Hub
        </text>
      </div>
    </div>
  );
}

export default ServiceCard;
