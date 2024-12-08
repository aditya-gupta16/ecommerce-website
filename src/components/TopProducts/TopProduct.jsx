import React from 'react'
import Img1 from '../../assets/assets/shirt/shirt.png'
import Img2 from '../../assets/assets/shirt/shirt2.png'
import Img3 from '../../assets/assets/shirt/shirt3.png'
import { FaStar } from 'react-icons/fa'

const Productdata = [
    {
        id: 1,
        img: Img1,
        title: 'Casual Wear',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur obcaecati vitae, dicta dolore ab consequatur qui perferendis. Quas, similique totam expedita veritatis veniam numquam delectus!',

    },
    {
        id: 2,
        img: Img2,
        title: 'Casual Men Wear',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur obcaecati vitae, dicta dolore ab consequatur qui perferendis. Quas, similique totam expedita veritatis veniam numquam delectus!',

    },
    {
        id: 3,
        img: Img3,
        title: 'Formal Shirt',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur obcaecati vitae, dicta dolore ab consequatur qui perferendis. Quas, similique totam expedita veritatis veniam numquam delectus!',

    }
    
]

const TopProduct = ( {handleOrderPopup} ) => {
  return (
    <div className='container '>
        <div className=' mg-24 m-auto '>
            <p data-aos='fade-up' className='text-center text-3xl'>Top Rated Product for You</p>
            <h1 data-aos='fade-up' className='text-3xl font-bold text-center p-1'>Best Products</h1>
            <p data-aos='fade-up' className='text-xs text-gray-400 w-1/2 text-center mx-auto mt-2 mb-3'>Upgrade your wardrobe with our exclusive collection of shirts designed to match your style and personality. From casual wear to formal attire, our range offers premium fabrics, modern cuts, and vibrant colors that make a statement. Whether you’re dressing up for an occasion or keeping it relaxed for a casual day out, our shirts are crafted for comfort and elegance. !</p>
            <div className='grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-20 md:gap-5 place-items-center'>
                {Productdata.map((data)=>(
                    <div data-aos='zoom-in' className='text-center rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white-100 relative shadow-xl duartion-300 group max-w-[300px]'>
                         <img src={data.img} alt="" className='h-[350px] w-[350px]' />
                        <div className='w-full flex items-center justify-center gap-1 '>
                            <FaStar className='text-yellow-500' />
                            <FaStar className='text-yellow-500' />
                            <FaStar className='text-yellow-500' />
                            <FaStar className='text-yellow-500' />
                        </div>
                       
                        <h1 className='text-xl font-bold'>{data.title}</h1>
                        <p className='text-gray-500 group-hovert:text-white duartion-300 text-sm line-clamp-2'>
                            {data.description}
                        </p>

                        <button className='bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-blue mb-4  ' onClick={handleOrderPopup}>
                            Order Now
                        </button>

                    </div>
                        
                    

                ))}
            </div>
        </div>
       
    </div>
  )
}

export default TopProduct