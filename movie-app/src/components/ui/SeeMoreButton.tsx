import { ArrowRight } from "lucide-react";
import React from "react";

export const SeeMoreButton = () => {
  return (
    <button className="w-fit h-[36px] flex gap-[8px] py-[8px] px-[16px] items-center">
      See More
      <ArrowRight size={16} />
    </button>
  );
};
