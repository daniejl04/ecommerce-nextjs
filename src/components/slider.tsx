/* eslint-disable react/no-unescaped-entities */
"use client"

import { useState } from 'react'
import Image from 'next/image';

export default function Slider() {

        const slides = [
          {
            id: 1,
            image: 'https://via.placeholder.com/800x400?text=Slide+1',
            alt: 'Slide 1',
          },
          {
            id: 2,
            image: 'https://via.placeholder.com/800x400?text=Slide+2',
            alt: 'Slide 2',
          },
          {
            id: 3,
            image: 'https://via.placeholder.com/800x400?text=Slide+3',
            alt: 'Slide 3',
          },
        ];
      
        const [currentSlide, setCurrentSlide] = useState(0);
      
  return (
    <div className="relative w-full  mx-auto">
    <div className="overflow-hidden  shadow-lg">
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
  
        {slides.map((slide) => (
          <Image
            key={slide.id}
            src={slide.image}
            alt={slide.alt}
            className="w-full flex-shrink-0"
          />
        ))}
      </div>
    </div>

    <div className="absolute bottom-8 left-16 transform -translate-x-1/2 flex space-x-2 p-4">
      {slides.map((_, index) => (
        <button
          key={index}
          onClick={() => setCurrentSlide(index)}
          className={`h-3 rounded-full transition-all duration-300 ${
            index === currentSlide
              ? 'w-6 bg-gray-800'
              : 'w-3 bg-gray-400'
          }`}
          aria-label={`Ir al slide ${index + 1}`}
        />
      ))}
    </div>
  </div>
  )
}
