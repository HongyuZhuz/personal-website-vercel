import React, { useState } from 'react';

const imageList:string[] = ["https://hyzpublic.s3.amazonaws.com/portfolio/Portfolio-1+.jpg","https://hyzpublic.s3.amazonaws.com/portfolio/Portfolio+-2.jpg","https://hyzpublic.s3.amazonaws.com/portfolio/Portfolio+-3.jpg","https://hyzpublic.s3.amazonaws.com/portfolio/Portfolio+-4.jpg"]

export const Designer=()=>{
    return(
        <div className='flex bg-black flex-col max-w-full'>
            <Header />
            <ImageBrowser images={imageList}/>
        </div>)
    
}

const Header = () =>(
    <div className="flex justify-start flex-col bg-black mb-5">
            <div className="flex">
                <div className="w-1/4"></div>
                <div className="md:w-1/4 flex flex-col mt-20">
                    <h1 className="text-red-500 text-xl font-bold">MY PORTFOLIO</h1>
                    <h2 className="text-white text-4xl">As a <span className="font-bold">Designer</span></h2>
                    <p className="text-white text-md max-w-md">At this part, I will introduce what I have done as a designer. My portfolio will tell you the story.</p>
                </div>
                </div>
            </div>
)




interface ImageBrowserProps {
  images: string[]; // Array of image URLs
}

const ImageBrowser: React.FC<ImageBrowserProps> = ({ images }) => {
const [isFullscreen, setIsFullscreen] = useState(false);
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
    <div className="flex justify-between max-w-full mx-auto px-4">
      <button
        className="p-4 m-2  rounded shadow text-red-500 font-bold md:text-4xl hover:bg-white text-xl"
        onClick={goToPrevious}
      >
        {'<'}
      </button>
      <img
        src={images[currentIndex]}
        alt="Displayed content"
        className="w-auto max-h-96"
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

        
        
