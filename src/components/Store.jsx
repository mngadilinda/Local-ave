import React, { useState, useEffect } from 'react'
import Cards from './Cards'
import axios from 'axios'


// import bgwhite from '../Assets/logo.jpg'


const Store = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try{
        const res = await axios.get(process.env.REACT_APP_BACKEND_URL + "products?populate=*",
        {
          headers:{
            Authorization: `bearer` + process.env.REACT_APP_API_TOKEN,
          },
        });
        setData(res.data.data)
      }
      catch(err){
        // console.log(err);
      }
    };
    fetchData();
  },[]);
  return (
    <div className='w-full py-8 px-4  shadow-4xl '>
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 py-4">
        {
            data.map((item) => (
              <div className="w-full drop-shadow-xl mb-4" >
                <Cards item={item} key={item?.attributes.id}/>
              </div>
            ))
          }
        
      </div>
    </div>
  )
}

export default Store