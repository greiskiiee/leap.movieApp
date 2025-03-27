import React, { useState } from "react";

export const Task3 = () => {
  const [inp, setInput] = useState(true);

  const onClick = () => {
    setInput(!inp);
  };

  return (
    <div className="flex bg-red-50 w-[400px] h-[70px] justify-center items-center gap-3">
      <button onClick={onClick} className="border border-black p-2">
        toggle me
      </button>
      {inp ? <p>hello</p> : null}
    </div>
  );
};
