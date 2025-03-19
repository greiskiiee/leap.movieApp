import { Film, Mail, Phone } from "lucide-react";
import React from "react";

export const Footer = () => {
  return (
    <div className="w-screen h-[280px] flex bg-[#4338CA] p-[40px] gap-[120px] justify-center items-center">
      <div className="w-[80%] flex">
        <div className="w-[247px] h-[200px] flex flex-col justify-start items-start gap-[12px]">
          <div className="w-[92px] h-[36px] flex gap-[8px] justify-center items-center">
            <Film size={20} color="#FAFAFA" strokeWidth={1} />
            <p className="inter italic font-[700] text-[#FAFAFA] text-[16px]">
              {" "}
              Movie Z
            </p>
          </div>
          <p className="inter font-[400] text-[#FAFAFA] text-[14px]">
            © 2024 Movie Z. All Rights Reserved.
          </p>
        </div>

        <div className="w-[913px] flex justify-end gap-[96px]">
          <div className="w-fit h-[200px] flex flex-col justify-start items-start gap-[12px]">
            <p className="inter font-[400] text-[#FAFAFA] text-[14px]">
              Contact Information
            </p>

            <div className="w-fit h-fit flex flex-col gap-[24px]">
              <div className="w-fit h-fit flex justify-center items-center gap-[12px]">
                <Mail size={16} color="#FAFAFA" strokeWidth={1} />
                <div className="flex flex-col ">
                  <p className="inter font-[500] text-[#FAFAFA] text-[14px]">
                    Email:
                  </p>
                  <p className="inter font-[400] text-[#FAFAFA] text-[14px]">
                    support@movieZ.com
                  </p>
                </div>
              </div>

              <div className="w-fit h-fit flex justify-center items-center gap-[12px]">
                <Phone size={16} color="#FAFAFA" strokeWidth={1} />
                <div className="flex flex-col ">
                  <p className="inter font-[500] text-[#FAFAFA] text-[14px]">
                    Phone:
                  </p>
                  <p className="inter font-[400] text-[#FAFAFA] text-[14px]">
                    +976 (11) 123-4567
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-start items-start gap-[12px]">
            <p className="inter font-[400] text-[#FAFAFA] text-[14px]">
              Follow us{" "}
            </p>

            <div className="flex gap-[12px]">
              <a
                href=""
                className="inter font-[500] text-[#FAFAFA] text-[14px]"
              >
                Facebook
              </a>
              <a
                href=""
                className="inter font-[500] text-[#FAFAFA] text-[14px]"
              >
                Instagram
              </a>
              <a
                href=""
                className="inter font-[500] text-[#FAFAFA] text-[14px]"
              >
                Twitter
              </a>
              <a
                href=""
                className="inter font-[500] text-[#FAFAFA] text-[14px]"
              >
                Youtube
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
