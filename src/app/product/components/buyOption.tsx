"use client";

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck, faShare, faDroplet, faCircleQuestion, faHeart, faArrowsTurnRight } from "@fortawesome/free-solid-svg-icons";

interface BuyOptionsProps {
  colors: string[];
}

export default function BuyOptions({ colors }: BuyOptionsProps) {
    const [selectedColor, setSelectedColor] = useState<string | null>(null);
    const [selectedSize, setSelectedSize] = useState("S");
    const [quantity, setQuantity] = useState(1);
  
    const handleColorChange = (color: string) => {
      setSelectedColor(color);
    };
  
    const handleSizeChange = (size: string) => {
      setSelectedSize(size);
    };
  
    const increaseQuantity = () => {
      setQuantity(quantity + 1);
    };
  
    const decreaseQuantity = () => {
      if (quantity > 1) {
        setQuantity(quantity - 1);
      }
    };

    return (
        <>
          <div className="flex gap-2 flex-col my-[10px]">
            <p className="mb-1">Color:</p>
            <div className="flex items-center">
              {colors.map((color, index) => (
                <div
                  key={index}
                  style={{ backgroundColor: color }}
                  className={`w-6 h-6 rounded-full border cursor-pointer mr-[10px] ${
                    selectedColor === color ? "border-black" : ""
                  }`}
                  onClick={() => handleColorChange(color)}
                ></div>
              ))}
            </div>
          </div>
    
          <div className="my-2 my-[10px]">
            <p className="mb-1">Size:</p>
            <div className="flex items-center">
              {["S", "M", "L", "XL"].map((size) => (
                <button
                  key={size}
                  className={`text-sm px-4 py-2 mr-2 rounded border border-gray-300 transition duration-300 ease-in-out cursor-pointer ${
                    selectedSize === size && "bg-black text-white"
                  }`}
                  onClick={() => handleSizeChange(size)}
                > {size}
                </button>
              ))}
            </div>
          </div>
    
          <div className="flex flex-col my-2 w-1/5 my-[15px]">
            <p>Quantity:</p>
            <div className="flex items-center bg-gray-100">
              <button
                className="px-4 py-2 transition duration-300 ease-in-out cursor-pointer hover:bg-gray-200"
                onClick={decreaseQuantity}
              >
                -
              </button>
              <span className="mx-4 text-lg">{quantity}</span>
              <button
                className="px-4 py-2 transition duration-300 ease-in-out cursor-pointer hover:bg-gray-200"
                onClick={increaseQuantity}
              >
                +
              </button>
            </div>
          </div>
          <div className="flex items-center w-full">
        <button className="w-4/5 py-4 my-2 font-bold text-white bg-black rounded cursor-pointer transition duration-300 hover:bg-gray-700">
          Add to cart - $8.00
        </button>
        <p className="p-3 mx-1 text-center border border-black cursor-pointer rounded">
          <FontAwesomeIcon icon={faHeart} />
        </p>
        <p className="p-3 mx-1 text-center border border-black cursor-pointer rounded">
          <FontAwesomeIcon icon={faArrowsTurnRight} />
        </p>
      </div>

      <button className="w-full py-4 my-2 font-bold text-black transition duration-300 bg-yellow-400 rounded cursor-pointer hover:bg-yellow-500">
        Buy with PayPal
      </button>

      <a className="text-xs text-center text-gray-400 underline cursor-pointer">
        More payment options
      </a>

      <div className="flex justify-between mt-5">
        <p className="text-sm cursor-pointer">
          <span className="mr-2">
            <FontAwesomeIcon icon={faDroplet} />
          </span>
          Compare color
        </p>
        <p className="text-sm cursor-pointer">
          <span className="mr-2">
            <FontAwesomeIcon icon={faCircleQuestion} />
          </span>    
          Ask a question
        </p>
        <p className="text-sm cursor-pointer">
          <span className="mr-2">
            <FontAwesomeIcon icon={faTruck} />
          </span>
          Delivery & Return
        </p>
        <p className="text-sm cursor-pointer">
          <span className="mr-2">
            <FontAwesomeIcon icon={faShare} />
          </span>
          Share
        </p>
      </div>
    </>
  );
}