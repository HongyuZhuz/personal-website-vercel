import React, { useState } from 'react';

// Define the type for an array of image URLs
type ImageArray = string[];

// Define the props for the ImageSlider component
interface ImageSliderProps {
  images: ImageArray;
}

// ImageSlider component
const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const [current, setCurrent] = useState<number>(0);

  const nextSlide = () => {
    setCurrent((prevCurrent) => (prevCurrent === images.length - 1 ? 0 : prevCurrent + 1));
  };

  const prevSlide = () => {
    setCurrent((prevCurrent) => (prevCurrent === 0 ? images.length - 1 : prevCurrent - 1));
  };

  if (!Array.isArray(images) || images.length <= 0) {
    return null;
  }

  return (
    <div className="flex justify-center items-center">
      <button
        onClick={prevSlide}
        className="z-10 p-2 text-white bg-black rounded-full shadow-lg mr-2"
        aria-label="Previous slide"
      >
        &lt;
      </button>
      {images.map((image, index) => (
        <div
          className={`absolute transition-opacity duration-700 ease-in-out ${index === current ? 'opacity-100' : 'opacity-0'}`}
          key={index}
        >
          {index === current && (
            <img src={image} alt={`Content number ${index}`} className="w-full h-auto" />
          )}
        </div>
      ))}
      <button
        onClick={nextSlide}
        className="z-10 p-2 text-white bg-black rounded-full shadow-lg ml-2"
        aria-label="Next slide"
      >
        &gt;
      </button>
    </div>
  );
};

// MyHobbyPage component
export const MyHobbyPage: React.FC = () => {
  const images: ImageArray = [
    "https://hyzpublic.s3.amazonaws.com/Photo/1.jpg",
    "https://hyzpublic.s3.amazonaws.com/Photo/2.jpg",
    "https://hyzpublic.s3.amazonaws.com/Photo/3.jpg",
    "https://hyzpublic.s3.amazonaws.com/Photo/4.jpg",
    "https://hyzpublic.s3.amazonaws.com/Photo/5.jpg",
    "https://hyzpublic.s3.amazonaws.com/Photo/6.jpg",

  ];

  return (
    <div className='min-h-screen bg-black text-white'>
        <div className="flex flex-col  max-w-5xl mx-auto min-h-screen">
            <Header/>
        </div>
        <div className="relative max-w-md mx-auto">

        </div>
    </div>
  );
};

const Header = () =>(
    <>
    <header className="bg-black text-white mt-8 ml-8">
        <div className=" flex flex-col mt-20">
            <h1 className="text-red-500 text-xl font-bold">MY HOBBIES</h1>
            <h2 className="text-white text-4xl">As a <span className="font-bold">Photographer</span></h2>
            <p className="text-white text-md max-w-xl">During my holiday, I love to travel around and use my camera to record my lovely life. Come and enjoy part of my collection!</p>
        </div>
    </header>
    
    </>
    
)


