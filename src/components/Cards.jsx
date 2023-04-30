import React from 'react'

const Cards = ({item}) => {
  return (
    <div className='bg-white rounded'>
      <div className="w-full rounded overflow-hidden shadow-lg">
        <img className="w-full h-[320px]" src={process.env.REACT_APP_IMAGES + item.attributes.product_image.data.attributes.url} alt=""/>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{item?.attributes.Name}</div>
          <p className="text-gray-700 text-base font-semibold">
            {`R` + item?.attributes.price}
          </p>
        </div>
        
      </div>
    </div>
  )
}

export default Cards