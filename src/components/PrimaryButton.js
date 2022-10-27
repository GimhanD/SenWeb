import React from "react";

function PrimaryButton({ title }) {
  return (
    <div>
      <button className="bg-lotus-red hover:bg-slate-700 text-white py-3 px-10 rounded-3xl ">
        {title}
      </button>
    </div>
  );
}

export default PrimaryButton;
