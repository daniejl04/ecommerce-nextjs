"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrown, faPrint, faTriangleExclamation, faCircleXmark, faSquareMinus} from "@fortawesome/free-solid-svg-icons";

export default function MoreInfoProduct() {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <section className="border border-gray-300 w-[95%] mx-auto my-[60px]" >
      <div className="flex border border-gray-300 mb-5">
        <button
          className={`px-5 py-2.5 text-lg transition-all ${
            activeTab === "description"
              ? "border-b-2 border-black font-bold"
              : "border-b-2 border-transparent"
          }`}
          onClick={() => setActiveTab("description")}
        >
          Description
        </button>

        <button
          className={`px-5 py-2.5 text-lg transition-all ${
            activeTab === "review"
              ? "border-b-2 border-black font-bold"
              : "border-b-2 border-transparent"
          }`}
          onClick={() => setActiveTab("review")}
        >
          Review
        </button>

        <button
          className={`px-5 py-2.5 text-lg transition-all ${
            activeTab === "shipping"
              ? "border-b-2 border-black font-bold"
              : "border-b-2 border-transparent"
          }`}
          onClick={() => setActiveTab("shipping")}
        >
          Shipping
        </button>

        <button
          className={`px-5 py-2.5 text-lg transition-all ${
            activeTab === "returnPolicies"
              ? "border-b-2 border-black font-bold"
              : "border-b-2 border-transparent"
          }`}
          onClick={() => setActiveTab("returnPolicies")}
        >
          Return Policies
        </button>
      </div>

      <div className="flex flex-col justify-start ml-5">
        <p>
          Button-up shirt sleeves and a relaxed silhouette. It´s tailored with
          drapey, crinkle-texture fabric that´s made from LENZING ECOVERO
          Viscose - responsibly sourced wood-based fibres produced through a
          process that produces impact on forest, biodiversity and water supply
        </p>

        <div className="flex justify-start w-[70%] mt-5">
          <div className="flex flex-col">
            <div className="my-6 mr-6">
              <h4 className="font-bold mb-2.5">Feature</h4>
              <ul>
                <li className="my-4 text-base mx-2.5">Front button placket</li>
                <li className="my-4 text-base mx-2.5">
                  Adjustable sleeve tabs
                </li>
                <li className="my-4 text-base mx-2.5">
                  Babaton embroidered crest at placket and hem
                </li>
              </ul>
            </div>

            <div className="my-6 mr-6">
              <h4 className="font-bold mb-2.5">Materials Care</h4>
              <ul>
                <li className="my-4 text-base mx-2.5">
                  Content: 100% LENZING ECOVERO Viscose
                </li>
                <li className="my-4 text-base mx-2.5">Care: Hand wash</li>
                <li className="my-4 text-base mx-2.5">Imported</li>
              </ul>
            </div>
          </div>
          <div className="my-6 mr-6">
            <h4 className="font-bold mb-2.5">Materials Care</h4>
            <ul>
              <li className="my-4 text-base mx-2.5 flex items-center">
                <span className="border border-black rounded-full px-2.5 py-1.5 mr-2.5">
                  <FontAwesomeIcon icon={faCrown} />
                </span>
                Machine wash max. 30ºC. Short spin.
              </li>
              <li className="my-4 text-base mx-2.5 flex items-center">
                <span className="border border-black rounded-full px-2.5 py-1.5 mr-2.5">
                  <FontAwesomeIcon icon={faPrint} />
                </span>
                Iron maximum 110ºC.
              </li>
              <li className="my-4 text-base mx-2.5 flex items-center">
                <span className="border border-black rounded-full px-2.5 py-1.5 mr-2.5">
                  <FontAwesomeIcon icon={faTriangleExclamation} />
                </span>
                Do not bleach/bleach.
              </li>
              <li className="my-4 text-base mx-2.5 flex items-center">
                <span className="border border-black rounded-full px-2.5 py-1.5 mr-2.5">
                  <FontAwesomeIcon icon={faCircleXmark} />
                </span>
                Do not dry clean.
              </li>
              <li className="my-4 text-base mx-2.5 flex items-center">
                <span className="border border-black rounded-full px-2.5 py-1.5 mr-2.5">
                  <FontAwesomeIcon icon={faSquareMinus} />
                </span>
                Tumble dry, medium heat.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}