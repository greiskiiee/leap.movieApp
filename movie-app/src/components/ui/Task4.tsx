import React, { useState } from "react";

export const Task4 = () => {
  const [input, setInput] = useState("");

  return (
    <div className="flex bg-amber-50 w-[400px] h-[70px] justify-center items-center gap-2">
      <input
        type="text"
        onChange={(e) => setInput(e.target.value)}
        className="border border-black p-2 mr-2 bg-white"
      />

      <p>length: {input.length}</p>
    </div>
  );
};
