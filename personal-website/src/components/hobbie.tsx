

import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";


interface ImageObject {
    original: string;
  }
  
  type ImageArray = ImageObject[];


export const MyHobbyPage: React.FC = () => {
  const images: ImageArray = [
    {original:"https://hyzpublic.s3.amazonaws.com/Photo/1.jpg"},
{original:"https://hyzpublic.s3.amazonaws.com/Photo/2.jpg"},
{original:"https://hyzpublic.s3.amazonaws.com/Photo/3.jpg"},
{original:"https://hyzpublic.s3.amazonaws.com/Photo/4.jpg",},
{original:"https://hyzpublic.s3.amazonaws.com/Photo/5.jpg"},
{original:"https://hyzpublic.s3.amazonaws.com/Photo/6.jpg"},
{original:"https://hyzpublic.s3.amazonaws.com/Photo/7.jpg"},
{original:"https://hyzpublic.s3.amazonaws.com/Photo/8.jpg"},
{original:"https://hyzpublic.s3.amazonaws.com/Photo/9.jpg"},
{original:"https://hyzpublic.s3.amazonaws.com/Photo/10.jpg"},
{original:"https://hyzpublic.s3.amazonaws.com/Photo/11.jpg"},
  ];

  return (
    <div className='min-h-screen bg-black text-white'>
      <div className="flex flex-col max-w-5xl mx-auto">
        <Header/>
        <ImageGallery items={images} showThumbnails={false}/>
      </div>
    </div>
  );
};

const Header = () => (
  <header className="mt-4 ml-8 mb-10">
    <div className="flex flex-col mt-20">
      <h1 className="text-red-500 text-xl font-bold">MY HOBBIES</h1>
      <h2 className="text-4xl">As a <span className="font-bold">Photographer</span></h2>
      <p className="text-md max-w-xl">During my holiday, I love to travel around and use my camera to record my lovely life. Come and enjoy part of my collection!</p>
    </div>
  </header>
);



