import { Navbar } from 'flowbite-react'

export const HeroSection:React.FC = ()=>{
    return(
        <div>
            <Nav />
            <section id="home">
            <div className="w-full bg-black bg-opacity-50 bg-cover bg-no-repeat text-white p-12 mt-32 mb-20">
                <div className="md:w-1/2 md:mx-auto ">
                    <p className="text-3xl ml-1">I&apos;m Hongyu Zhu</p>
                    <div className="text-6xl mb-3 md:text-8xl mt-0">
                        <p className="text-red-500 font-bold">Developer</p>
                        <p className="text-white">AND</p>
                        <p className="text-red-500 font-bold">Designer</p>
                    </div>
                    <p className="text-md max-w-md ml-2 mb-8">If you are looking for someone with professional developing skills and impressive design ability, I would be your perfect choice.</p> 
                    <a className="ml-2 bg-red-500 hover:bg-red-700 text-white py-1 px-3 rounded-lg" href="#about-me">
                        Learn more
                    </a>
                </div>

            </div>
            </section> 
        </div>
        
    )
}

const Nav = () =>{
    return(
      <Navbar fluid rounded className='bg-black text-white md:py-3 xl:px-64 fixed top-0 w-full z-50 bg-opacity-60'>
        <Navbar.Brand  href="#top">
          <img src="/favicon.ico" className="mr-3 h-3 sm:h-5" alt="Flowbite React Logo" />
          <span className="self-center whitespace-nowrap text-xl font-semibold text-white">Hongyu Zhu</span>
        </Navbar.Brand>
        <Navbar.Toggle/>
        <Navbar.Collapse>
          <Navbar.Link href="#home" className='hover:bg-white hover:text-red-500 text-white md:hover:text-red-500'>
            <span className='hover:text-red-500 md:hover:text-red-500 dark:hover:text-red-500'>Home</span>
          </Navbar.Link>
          <Navbar.Link href="#about-me" className='hover:bg-white hover:text-red-500 text-white md:hover:text-red-500'>
          <span className='hover:text-red-500'>About Me</span>
          </Navbar.Link>
          <Navbar.Link href="#education" className='hover:bg-white hover:text-red-500 text-white md:hover:text-red-500'>
            <span className='hover:text-red-500'>Education</span>
          </Navbar.Link>
          <Navbar.Link href="#career" className='hover:bg-white hover:text-red-500 text-white md:hover:text-red-500'>
            <span className='hover:text-red-500'>Career</span></Navbar.Link>
          <Navbar.Link href="#portfolio" className='hover:bg-white hover:text-red-500 text-white md:hover:text-red-500'>
            <span className='hover:text-red-500'>Portfolio</span>
          </Navbar.Link>
          <Navbar.Link href="#hobbie" className='hover:bg-white hover:text-red-500 text-white md:hover:text-red-500'>
            <span className='hover:text-red-500'>Hobbie</span>
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    )
  }