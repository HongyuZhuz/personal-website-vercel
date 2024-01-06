import React, { useState } from 'react';

const imageList:string[] = ["https://hyzpublic.s3.amazonaws.com/portfolio/Portfolio-1+.jpg",
"https://hyzpublic.s3.amazonaws.com/portfolio/Portfolio+-2.jpg",
"https://hyzpublic.s3.amazonaws.com/portfolio/Portfolio+-3.jpg",
"https://hyzpublic.s3.amazonaws.com/portfolio/Portfolio+-4.jpg",
"https://hyzpublic.s3.amazonaws.com/portfolio/Portfolio+-5.jpg",
"https://hyzpublic.s3.amazonaws.com/portfolio/Portfolio+-6.jpg",
"https://hyzpublic.s3.amazonaws.com/portfolio/Portfolio+-7.jpg",
"https://hyzpublic.s3.amazonaws.com/portfolio/Portfolio+-8.jpg",
"https://hyzpublic.s3.amazonaws.com/portfolio/Portfolio+-9.jpg",
"https://hyzpublic.s3.amazonaws.com/portfolio/Portfolio+-10.jpg",
"https://hyzpublic.s3.amazonaws.com/portfolio/Portfolio+-11.jpg",
"https://hyzpublic.s3.amazonaws.com/portfolio/Portfolio+-12.jpg",
"https://hyzpublic.s3.amazonaws.com/portfolio/Portfolio+-13.jpg",]

export const Designer=()=>{
    return(
        <div className=" bg-black bg-opacity-70 flex-col">
          <div className='flex flex-col  max-w-5xl mx-auto'>
            <Header />
          </div>
          <div className='flex justify-center'>
            <ImageBrowser images={imageList}/>
          </div>
        </div>
        )
}

const Header = () =>(
  <>
    <header className="text-white mt-8 ml-8">
        <div className=" flex flex-col mt-20">
            <h1 className="text-red-500 text-xl font-bold">MY PORTFOLIO</h1>
            <h2 className="text-white text-4xl">As a <span className="font-bold">Designer</span></h2>
            <p className="text-white text-md max-w-xl">At this part, I will introduce what I have done as a designer. My portfolio will tell you the story.</p>
        </div>
    </header>
  </>
    
)


interface ImageBrowserProps {
  images: string[]; // Array of image URLs
}

const ImageBrowser: React.FC<ImageBrowserProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : images.length - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < images.length - 1 ? prevIndex + 1 : 0
    );
  };

  return (
    <div className="flex max-w-full mx-auto px-4 md:mb-20 mb-5 overflow-x-auto">
      <button
        className="p-4 m-2  rounded shadow text-red-500 font-bold md:text-4xl hover:bg-white text-xl"
        onClick={goToPrevious}
      >
        {'<'}
      </button>
      <img
        src={images[currentIndex]}
        alt="Displayed content"
        className="max-w-full max-h-96 mt-4"
        onClick={handleImageClick}
      />
      <button
        className="p-4 m-2  rounded shadow text-red-500 font-bold md:text-4xl hover:bg-white text-xl"
        onClick={goToNext}
      >
        {'>'}
      </button>
    </div>
  );
};

const handleImageClick = (event: React.MouseEvent<HTMLImageElement>) => {
    const elem = event.currentTarget;
  
    if (!document.fullscreenElement) {
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if ((elem as any).mozRequestFullScreen) { /* Firefox */
        (elem as any).mozRequestFullScreen();
      } else if ((elem as any).webkitRequestFullscreen) { /* Chrome, Safari & Opera */
        (elem as any).webkitRequestFullscreen();
      } else if ((elem as any).msRequestFullscreen) { /* IE/Edge */
        (elem as any).msRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if ((document as any).mozCancelFullScreen) { /* Firefox */
        (document as any).mozCancelFullScreen();
      } else if ((document as any).webkitExitFullscreen) { /* Chrome, Safari and Opera */
        (document as any).webkitExitFullscreen();
      } else if ((document as any).msExitFullscreen) { /* IE/Edge */
        (document as any).msExitFullscreen();
      }
    }
  };

        
        
