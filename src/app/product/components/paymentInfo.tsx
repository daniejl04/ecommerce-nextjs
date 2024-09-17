import React from "react";
import AmexLogo from "@/assets/img/logotarget/amexLogo.png";
import MasterCardLogo from "@/assets/img/logotarget/MasterCardLogo.svg";
import PaypalLogo from "@/assets/img/logotarget/PaypalLogo.png";
import VisaLogo from "@/assets/img/logotarget/visaLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBox, faShip, faShield } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";


export default function PaymentInfo() {
    return (
      <>
        <div className="flex items-center justify-between w-full mt-8">
          <div className="border border-gray-300 flex flex-col w-[49%] rounded-md text-center py-7">
            <span className="text-2xl">
              <FontAwesomeIcon icon={faShip} />
            </span>
            <p className="text-xs mt-4">
              Estimate delivery times: <strong>12-26 days</strong> <br />
              (International), <strong>3-6 days</strong> (United States).
            </p>
          </div>
  
          <div className="border border-gray-300 flex flex-col w-[49%] rounded-md text-center py-7">
            <span className="text-2xl">
              <FontAwesomeIcon icon={faBox} />
            </span>
            <p className="text-xs mt-4">
              Return within <strong>30 days</strong> of purchase. <br />
              Duties & taxes are non-refundable.
            </p>
          </div>
        </div>
        <div className="flex mt-5">
        <div className="flex items-center">
          <span className="mr-2">
            <FontAwesomeIcon icon={faShield} />
          </span>
          <p className="text-sm font-bold">Guarantee Safe <br /> Checkout</p>
        </div>

        <div className="flex items-center ml-5">
          <Image
            src={VisaLogo}
            alt="Visa"
            className="w-14 mx-2.5 p-2.5 bg-gray-100 rounded"
          />
          <Image
            src={PaypalLogo}
            alt="Paypal"
            className="w-8 mx-2.5 p-2.5 bg-gray-100 rounded"
          />
          <Image
            src={MasterCardLogo}
            alt="Mastercard"
            className="w-10 mx-2.5 p-2.5 bg-gray-100 rounded"
          />
          <Image
            src={AmexLogo}
            alt="Amex"
            className="w-16 mx-2.5 p-2.5 bg-white rounded"
          />
        </div>
        </div>
    </>
  );
}