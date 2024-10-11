import React from 'react';
import Image from 'next/image';
// import BurberryLogo from "@/assets/img/logoCompany/burberryLogo.png";
// import NikeLogo from "@/assets/img/logoCompany/NikeLogo.png";
// import AsosLogo from "@/assets/img/logoCompany/ASOSLogo.png";
// import PullAndBearLogo from "@/assets/img/logoCompany/Pull-Bear-Logo.png";
// import GildanLogo from "@/assets/img/logoCompany/GildanLogo.png";

export default function BrandLogos() {
  return (
    <>
        <div>

        <div className=" flex justify-center items-center flex-wrap my-16 ">

            <div  className="flex max-w-[190px] px-7 text-center border rounded-l-lg">
              <div className=" w-[120px] h-[90px] mx-auto overflow-hidden flex justify-center items-center">
              <Image src="https://res.cloudinary.com/df2qckxtp/image/upload/v1728619299/SsenseLogo_ebtaie.png" alt="SSENSE" width={150} height={100} />
              </div>
            </div>
            <div  className="flex max-w-[190px] px-7 text-center border ">
              <div className=" w-[120px] h-[90px] mx-auto overflow-hidden flex justify-center items-center">
              <Image src="https://res.cloudinary.com/df2qckxtp/image/upload/v1728619298/BurberryLogo_uvhqda.png" alt="BURBERRY" width={150} height={100} />
              </div>
            </div>
            <div  className="flex max-w-[190px] px-7 text-center border">
              <div className=" w-[120px] h-[90px] mx-auto overflow-hidden flex justify-center items-center">
              <Image src="https://res.cloudinary.com/df2qckxtp/image/upload/v1728619298/NikeLogo_cryllg.png" alt="NIKE" width={150} height={100} />
              </div>
            </div>
            <div  className="flex max-w-[190px] px-7 text-center border">
              <div className=" w-[120px] h-[90px] mx-auto overflow-hidden flex justify-center items-center">
              <Image src="https://res.cloudinary.com/df2qckxtp/image/upload/v1728619297/ASOSLogo_qmhcmx.png" alt="ASOS" width={150} height={100} />
              </div>
            </div>
            <div  className="flex max-w-[190px] px-7 text-center border">
              <div className=" w-[120px] h-[90px] mx-auto  overflow-hidden flex justify-center items-center ">
              <Image src="https://res.cloudinary.com/df2qckxtp/image/upload/v1728619298/Pull-Bear-Logo_ahfxno.png" alt="PULL&BEAR" width={150} height={100} />
              </div>
            </div>
            <div  className="flex max-w-[190px] px-7 text-center border rounded-r-lg">
              <div className=" w-[120px] h-[90px] mx-auto overflow-hidden flex justify-center items-center">
              <Image src="https://res.cloudinary.com/df2qckxtp/image/upload/v1728619298/GildanLogo_a2ubmg.png" alt="GILDAN" width={150} height={100} />
              </div>
            </div>

        </div>
        </div>
    </>
  
  );
}