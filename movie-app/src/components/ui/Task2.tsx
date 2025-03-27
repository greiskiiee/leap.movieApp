import React, { useRef, useState } from "react";

export const Task2 = () => {
  const [inp, setInput] = useState("");

  return (
    <div className="flex bg-amber-50 w-[400px] h-[70px] justify-center items-center gap-2">
      <input
        className="border border-black p-2 mr-2"
        onChange={(e) => setInput(e.target.value)}
      />

      <p>Input: {inp}</p>
    </div>
  );
};
