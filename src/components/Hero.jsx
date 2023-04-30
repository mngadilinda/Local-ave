import React from 'react'
import pro_img from '../Assets/logo_black.jpg'
import Slider from './Slider';


const Hero = () => {
  return (
    <div className='text-white mt-[4px]'>
      <div className='py-6 mx-auto' style={{ backgroundImage: `url(${pro_img})`, backgroundPosition:`center`, backgroundSize:'cover' }}>
        <div className="w-full md:h-screen mx-auto text-center  sm: h-[600px]" ></div>
      </div>
      <div className="Slider"></div>
      <Slider/>
    </div>
  )
}

export default Hero