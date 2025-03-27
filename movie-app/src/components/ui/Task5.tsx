import React, { useRef, useState } from "react";

export const Task5 = () => {
  //   const inputRef = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState("");
  const [list, setList] = useState<String[]>([]);

  const onClick = () => {
    setList([...list, value]);
  };

  const onDelete = (index: number) => {
    setList(list.filter((_, i) => i !== index));
  };

  return (
    <div className="flex flex-col bg-red-50 w-[400px] h-[500px] justify-start items-center p-4 gap-2">
      <div>
        <input
          className="border border-black p-2 mr-2 bg-white"
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={onClick} className="border border-black p-2">
          Submit
        </button>
      </div>

      {list.map((item, index) => {
        return (
          <div
            className="flex w-full h-fit py-2 px-4 bg-gray-200 justify-between items-center"
            key={index}
          >
            <p className="text-black">{item}</p>
            <button
              className="rounded-sm border-1 border-black p-1"
              onClick={() => {
                onDelete(index);
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};
