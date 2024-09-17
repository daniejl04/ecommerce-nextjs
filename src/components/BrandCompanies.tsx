import React from 'react';
import Image from 'next/image';
import SsenseLogo from "@/assets/img/logoCompany/SsenseLogo.png";
import BurberryLogo from "@/assets/img/logoCompany/burberryLogo.png";
import NikeLogo from "@/assets/img/logoCompany/NikeLogo.png";
import AsosLogo from "@/assets/img/logoCompany/ASOSLogo.png";
import PullAndBearLogo from "@/assets/img/logoCompany/Pull-Bear-Logo.png";
import GildanLogo from "@/assets/img/logoCompany/GildanLogo.png";

export default function BrandLogos() {
  return (
    <>
        <div>

        <div className=" flex justify-center items-center flex-wrap my-16 ">

            <div  className="flex max-w-[190px] px-7 text-center border rounded-l-lg">
              <div className=" w-[120px] h-[90px] mx-auto overflow-hidden flex justify-center items-center">
              <Image src={SsenseLogo} alt="SSENSE" width={150} height={100} />
              </div>
            </div>
            <div  className="flex max-w-[190px] px-7 text-center border ">
              <div className=" w-[120px] h-[90px] mx-auto overflow-hidden flex justify-center items-center">
              <Image src={BurberryLogo} alt="BURBERRY" width={150} height={100} />
              </div>
            </div>
            <div  className="flex max-w-[190px] px-7 text-center border">
              <div className=" w-[120px] h-[90px] mx-auto overflow-hidden flex justify-center items-center">
              <Image src={NikeLogo} alt="NIKE" width={150} height={100} />
              </div>
            </div>
            <div  className="flex max-w-[190px] px-7 text-center border">
              <div className=" w-[120px] h-[90px] mx-auto overflow-hidden flex justify-center items-center">
              <Image src={AsosLogo} alt="ASOS" width={150} height={100} />
              </div>
            </div>
            <div  className="flex max-w-[190px] px-7 text-center border">
              <div className=" w-[120px] h-[90px] mx-auto  overflow-hidden flex justify-center items-center ">
              <Image src={PullAndBearLogo} alt="PULL&BEAR" width={150} height={100} />
              </div>
            </div>
            <div  className="flex max-w-[190px] px-7 text-center border rounded-r-lg">
              <div className=" w-[120px] h-[90px] mx-auto overflow-hidden flex justify-center items-center">
              <Image src={GildanLogo} alt="GILDAN" width={150} height={100} />
              </div>
            </div>

        </div>
        </div>
    </>
  
  );
}