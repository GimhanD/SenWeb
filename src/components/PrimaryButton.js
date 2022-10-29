import React from "react";

function PrimaryButton({ title }) {
  return (
    <div>
      <button class=" bg-lotus-red hover:bg-opacity-80 text-white py-3 px-10 rounded-3xl ">
        {title}
      </button>
    </div>
  );
}

export default PrimaryButton;
