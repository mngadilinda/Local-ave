import React from 'react'
import { 
    FaFacebookSquare,
    FaInstagramSquare,
    FaTwitterSquare,
    // FaGithubSquare,
    FaLinkedin,
 } from 'react-icons/fa'


const Footer = () => {
  return (
    <div className='w-full absolute bg-[rgba(0,0,0,0.4)] mx-auto py-2 px-4 grid lg:grid-cols-2 gap-8 text-white'>
        <div>
            <div className='flex mx-auto justify-between md:w-[75%] my-6'>
                <a href="#"><FaFacebookSquare size={40} color={'#5f5f5f'}/></a>
                {/* <a href="#"><FaGithubSquare size={40} color={'#5f5f5f'}/></a> */}
                <a href="#"><FaInstagramSquare size={40} color={'#5f5f5f'}/></a>
                <a href="#"><FaTwitterSquare size={40} color={'#5f5f5f'}/></a>
                <a href="#"><FaLinkedin size={40} color={'#5f5f5f'}/></a>
            </div>
        </div>
    </div>
  )
}

export default Footer