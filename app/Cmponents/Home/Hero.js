import React from 'react';
import { FaGithub,FaTwitter,FaLinkedin,FaArrowDown  } from "react-icons/fa";
function Hero() {
    return (
        <div>
            {/* for mobile */}
            <div className=' bg-gradient-to-tr from-green-500 via-violet-400 to-red-400 p-6 flex justify-center items-center md:justify-start '>
                <div className=" md:ml-14 p-6 md:p-16 rounded-lg shadow-lg w-80 md:w-auto md:h-98  ">
                        <img src='https://i.postimg.cc/QMbWxtND/sf-yuxfqicoylacr4k7rq-1693-1696671965744-out-compressed.png'
                          className='md:hidden'
                        />

                    {/* Card Content */}
                    
                    <p className='font-serif md:text-4xl text-xl font-bold mt-5'> Hello! </p>
                    <p className='font-serif md:text-4xl text-xl font-bold md:mt-2 '> I'm Aditya Gavali </p>

                    <p className="text-white md:mt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                    <div className="mt-4 ">
                        <div className='flex   transition ease-linear delay-300 hover:translate-y-1 justify-center md:justify-start gap-6 text-white'>
                        <a href='https://github.com/Adityanpx'
                        className="  text-3xl hover:scale-125 ">
                             <FaGithub/>
                        </a>
                        <a href='https://twitter.com/search?q=fullstach%20developers&src=typed_query&f=user'
                        className="  text-3xl hover:scale-125 ">
                             <FaTwitter/>
                        </a>
                        <a href='https://www.linkedin.com/in/aditya-gavali-b79b4525a/'
                        className="  text-3xl hover:scale-125 ">
                             <FaLinkedin/>
                        </a>
                        <a href='https://github.com/Adityanpx'
                        className="  text-3xl hover:scale-125 ">
                             <FaGithub/>
                        </a>
                        </div>
                        <div className=' flex mt-7 justify- gap-4 rounded-md h-10   '>
                            <button className=' transition ease-in-out delay-250  text-white md:text-lg hover:translate-y-1 hover:scale-100 bg-black duration-500  font-semibold  rounded-lg  w-28 hover:bg-orange-400  '> Resume

                            </button>
                            <button className='transition ease-in-out delay-250  text-white md:text-lg hover:translate-y-1 hover:scale-100 bg-black duration-500  font-semibold  rounded-lg  w-28 hover:bg-orange-400 '> Hire Me

                            </button>
                        </div>

                    
                        
                        <button className=" animate-bounce text-white mt-6 px-4  flex py-2 rounded-md">Scroll down <FaArrowDown 
                        className='ml-2 mt-1.5 text-sm'/> </button>
                        
                        </div>
                </div>
            
            
                </div>

        </div>
    );
}

export default Hero;
