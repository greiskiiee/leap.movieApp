import React, { useRef, useState } from "react";

export const Task1 = () => {
  const count = useRef(0);
  const [prev, setPrev] = useState(0);

  const onClick = () => {
    setPrev(count.current++);
  };

  return (
    <div className="flex bg-amber-50 w-[400px] h-[70px] justify-center items-center">
      <button onClick={onClick} className="border border-black p-2 mr-2">
        Increase count
      </button>
      <p>Count: {count.current}</p>
    </div>
  );
};
