import React, { useState } from "react";

export const Task6 = () => {
  const [bgColor, setBgColor] = useState("white");

  const colors = ["red", "black", "purple", "yellow", "green"];

  return (
    <div
      className="flex flex-col items-center justify-center  h-[400px] w-[200px]"
      style={{ background: bgColor }}
    >
      <select
        onChange={(e) => setBgColor(e.target.value)}
        className="border p-2 border-black text-[#000] bg-white"
      >
        {colors.map((color) => (
          <option key={color} value={color}>
            {color.charAt(0).toUpperCase() + color.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
};
