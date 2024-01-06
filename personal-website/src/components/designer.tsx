import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";



const images = [{original:"https://hyzpublic.s3.amazonaws.com/portfolio/Portfolio-1+.jpg"},
{original:"https://hyzpublic.s3.amazonaws.com/portfolio/Portfolio+-2.jpg"},
{original:"https://hyzpublic.s3.amazonaws.com/portfolio/Portfolio+-3.jpg"},
{original:"https://hyzpublic.s3.amazonaws.com/portfolio/Portfolio+-4.jpg"},
{original:"https://hyzpublic.s3.amazonaws.com/portfolio/Portfolio+-5.jpg"},
{original:"https://hyzpublic.s3.amazonaws.com/portfolio/Portfolio+-6.jpg"},
{original:"https://hyzpublic.s3.amazonaws.com/portfolio/Portfolio+-7.jpg"},
{original:"https://hyzpublic.s3.amazonaws.com/portfolio/Portfolio+-8.jpg"},
{original:"https://hyzpublic.s3.amazonaws.com/portfolio/Portfolio+-9.jpg"},
{original:"https://hyzpublic.s3.amazonaws.com/portfolio/Portfolio+-10.jpg"},
{original:"https://hyzpublic.s3.amazonaws.com/portfolio/Portfolio+-11.jpg"},
{original:"https://hyzpublic.s3.amazonaws.com/portfolio/Portfolio+-12.jpg"},
{original:"https://hyzpublic.s3.amazonaws.com/portfolio/Portfolio+-13.jpg"},]

export const Designer=()=>{
    return(
        <div className=" bg-black bg-opacity-70 flex-col">
          <div className='flex flex-col  max-w-5xl mx-auto'>
            <Header />
          </div>
          <div className=" pb-10 md:pb-20 mt-5 md:px-10 text-red-500">
          <ImageGallery items={images} showThumbnails={false}/>
          </div>
        </div>
        )
}

const Header = () =>(
  <>
    <header className="text-white mt-8 ml-8">
        <div className=" flex flex-col md:mt-10">
            <h1 className="text-red-500 text-xl font-bold">MY PORTFOLIO</h1>
            <h2 className="text-white text-4xl">As a <span className="font-bold">Designer</span></h2>
            <p className="text-white text-md max-w-xl">At this part, I will introduce what I have done as a designer. My portfolio will tell you the story.</p>
        </div>
    </header>
  </>
    
)
        
