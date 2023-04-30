import React from 'react'
import img from '../Assets/female_img.jpg'

const Product = () => {
  return (
    <div className='w-full'>
      <div className='max-w-[1240px] h-[900px] md:flex justify-center items-center mx-auto py-2 cols-2 '>
        <div>
          <img src={img} alt="" className='max-w-[800px] h-[400px] mr-1 rounded-xl' />
        </div>
        <div>
          <p className='max-w-[400px] text-white font-medium ml-5 sm:max-w-[]'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae temporibus quas dolores nulla delectus fugiat in nisi officia iusto quam, similique architecto sint deserunt fugit provident repudiandae quia praesentium ex.
          </p><br />
          <p className='text-xl ml-6 text-white font-semibold'><span>R</span>250</p>
        </div>
      </div>
    </div>
  )
}

export default Product