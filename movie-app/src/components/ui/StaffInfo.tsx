import React from "react";

interface StaffInfoprops {
  role: string;
  who: string;
}
export const StaffInfo: React.FC<StaffInfoprops> = ({ role, who }) => {
  return (
    <div className="flex flex-col w-full justify-start items-center h-fit gap-1">
      <div className="w-full h-fit flex gap-[53px]">
        <p className="w-[70px] h-fit text-[16px] font-[700] inter text-[#09090B]">
          {role}
        </p>
        <p className="text-[16px] font-[400] inter text-[#09090B]">{who}</p>
      </div>
      <div className="w-full h-[14px] flex justify-center items-center">
        <div className="w-full bg-[#E4E4E7] h-[1px]"></div>
      </div>
    </div>
  );
};
