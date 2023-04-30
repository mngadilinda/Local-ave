import { React, useState } from 'react'
import img_1 from '../Assets/female_img.jpg'
import img_2 from '../Assets/blackcap_img.jpg'
import img_3 from '../Assets/group_img.jpg'
import img_4 from '../Assets/red_hoodie.jpg'
import  { BsChevronLeft, BsChevronRight } from 'react-icons/bs'


const Slider = () => { 
  
  const slides = [
    {img : img_1, text: ''},{img : img_2, text: ''},{img : img_3, text: ''},{img : img_4, text: ''},
  ]

  const [currentslide, setCurrentslide] = useState(0);
  const prevSlide = () =>{
    const isFirstSlide = currentslide === 0;
    const newSlide = isFirstSlide ? slides.length -1 : currentslide - 1;
    setCurrentslide(newSlide);
  }

  const nextSlide = () =>{
    const isLastSlide = currentslide === slides.length -1 ;
    const newSlide = isLastSlide ? 0 : currentslide + 1;
    setCurrentslide(newSlide);
  }

  return (
    <div >
        <div className='max-w-[800px] text-white mt-3 mb-[80px] md:h-[600px] m-auto py-12 px-2 relative sm: h-[350px] '>
          <div className='bg-black/30'></div>
          <div style={{backgroundImage: `url(${slides[currentslide].img})`}} className="w-full h-full rounded-2xl bg-center bg-cover duration-500 bg-black/30">
            <p className='font-semibold text-2xl pl-2 pt-1'>{slides[currentslide].text}</p>
          </div>
        {/* Left Arrow */}
        <div className='group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
          <BsChevronLeft onClick={prevSlide} size={30}/>
        </div>
        {/* Right Arrow */}
        <div className='group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
          <BsChevronRight onClick={nextSlide} size={30}/>
        </div>
        </div>
    </div>
  )
}

export default Slider