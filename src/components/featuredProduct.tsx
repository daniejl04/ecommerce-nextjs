"use client"

import React, { useState } from 'react';
import Image from 'next/image';

const products = [
  {
    id: 1, 
    name: "Ribbed Tank Top", 
    price: "$16.95", 
    image: 'https://res.cloudinary.com/df2qckxtp/image/upload/v1728619109/product1_bdcseb.jpg', 
    colors: ["#000", "#FFF", "#F00"] 
  },
  {
    id: 2, 
    name: "Ribbed modal T-shirt", 
    price: "$18.95", 
    image: 'https://res.cloudinary.com/df2qckxtp/image/upload/v1728619109/product-2_wrtkhx.jpg', 
    discount: "33%", countdown: "1d 15h 51m 37s", 
    colors: ["#FFF", "#F0F", "#0F0"] 
  },
  {
    id: 3, 
    name: "Oversized Printed T-shirt", 
    price: "$10.00", 
    image: 'https://res.cloudinary.com/df2qckxtp/image/upload/v1728619109/product3_pop5ff.jpg', 
    colors: ["#FFF", "#000"] 
  },
  {
    id: 4, 
    name: "V-neck linen T-shirt", 
    price: "$14.95", 
    image: 'https://res.cloudinary.com/df2qckxtp/image/upload/v1728619109/product4_pm3sdm.jpg', 
    colors: ["#F0F", "#000", "#FFF"] 
  },
  {
    id: 5, 
    name: "Loose Fit Sweatshirt", 
    price: "$30.00", 
    image: 'https://res.cloudinary.com/df2qckxtp/image/upload/v1728619110/product6_taqakg.jpg', 
    colors: ["#00F", "#FFF", "#F00"] 
  },
  {
    id: 6, 
    name: "Loose Fit Hoodie", 
    price: "$9.95", 
    image: 'https://res.cloudinary.com/df2qckxtp/image/upload/v1728619110/product6_taqakg.jpg', 
    colors: ["#FFF", "#000"] 
  },
  {
    id: 7, 
    name: "Regular Fit Oxford Shirt", 
    price: "$30.00", 
    image: 'https://res.cloudinary.com/df2qckxtp/image/upload/v1728619110/product7_le0le1.jpg', 
    colors: ["#FFF", "#000"] 
  }
]

      
export default function FeactureProduct() {
  const [activeTab, setActiveTab] = useState('Best seller');

  const tabs = ['Best seller', 'New arrivals', 'On Sale'];

  return (
    <div className="product-slider my-8 text-black">
      <div className="tabs flex justify-center mb-4">
        {tabs.map(tab => (
          <button
            key={tab}
            className={`tab px-6 py-2 mx-2 cursor-pointer border-none text-lg font-bold transition ease-in-out duration-600 ${
              activeTab === tab ? 'underline underline-offset-8' : ''
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="product-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map(product => (
          <div key={product.id} className="product-item p-4">
            <Image
              src={product.image}
              width={300}
              height={300}
              alt={product.name}
              className="max-w-full h-auto mb-4"
            />
            <h3 className="product-name text-lg mb-2">{product.name}</h3>
            <p className="text-sm text-gray-800 font-bold mb-2">
              {product.price}
            </p>

            <div className="product-colors flex justify-start gap-2">
              {product.colors.map((color, index) => (
                <span
                  key={index}
                  className="color-circle w-4 h-4 rounded-full border border-gray-300"
                  style={{ backgroundColor: color }}
                ></span>
                
              ))}
            </div>
            {product.discount && (
              <div className="flex justify-center items-center mb-2">
                <span className="discount bg-orange-600 text-white py-1 px-2 absolute-bottom-10 left-32 text-xs rounded-lg font-bold">
                  {product.discount}
                </span>
                <span className="text-xs absolute-bottom-10 right-5 py-1 px-5 text-center text-orange-600 font-bold bg-white">
                  {product.countdown}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>

      <a className="load-more flex justify-center mx-auto text-center border border-black rounded-md py-2 px-5 w-32 text-xs font-bold cursor-pointer transition ease-in-out duration-600 hover:bg-black hover:text-white">
        Load more
      </a>
    </div>
  );
}
