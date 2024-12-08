import React from 'react'
import Img1 from '../../assets/assets/women/women.png'
import Img2 from '../../assets/assets/women/women2.jpg'
import Img3 from '../../assets/assets/women/women3.jpg'
import Img4 from '../../assets/assets/women/women4.jpg'
import { FaStar } from 'react-icons/fa6'


const Productsdata = [
    {
        id: 1,
        title: 'Women Ethnic',
        price: 20,
        image: Img1,
        color: 'white',        
        rating: 4.6
    },
     {
        id: 2,
        title: 'Men Ethnic',
        price: 50,
        image: Img2,
        color: 'white',        
        rating: 4.5
    },
     {
        id: 3,
        title: 'Ethnic',
        price: 75,
        image: Img3,
        color: 'white',        
        rating: 4.9
    },
     {
        id: 4,
        title: 'Men Googles',
        price: 85,
        image: Img4,
        color: 'white',        
        rating: 4.55
    },
    
]
const Product = () => {
  return (
    <div className='mt-14 mb-12 '>
        <div className='container'>
            <div className='text-center mb-10 max-w-[600px] mx-auto' >
                <p data-aos='fade-up' className='text-2xl text-primary'>Top Selling Products For you</p>
                <h1 data-aos='fade-up' className='text-4xl font-bold mt-2 mb-4'>Products</h1>
                <p data-aos='fade-up' className='text-sm text-gray-400 '>"Welcome to a world of unparalleled quality and style. Our carefully curated collection brings you the best in [product category] that combine functionality with elegance. Whether you’re looking for the latest trends, timeless classics, or unique finds, our product range has something for everyone. Crafted with precision and designed to meet your needs.</p>
            </div>

            <div>
                <div className='grid grid-cols-1 sm:cols-3 md:grid-cols-4 lg:grid-cols-4 place-items-center gap-12 '>
                    {Productsdata.map((data)=>(
                        <div data-aos='fade-up' data-aos-delay={data.aosDelay} key={data.id} className='space-y-3 ' >
                            <img src={data.image} alt="Cover image"  className='h-[250px] w-[200px] object-cover rounded-md'/>
                            <div>
                                <h3 className='font-semibold'>{data.title}</h3>
                                <p className='text-sm text-gray-600'>{data.color}</p>
                                <div className='flex items-center gap-1'>
                                    <FaStar className='text-yellow-400 ' />
                                    <span>{data.rating}</span>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
                <div className='flex justify-center'>
                    <button className='text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md'>View All button</button>
                </div>

            </div>

        </div>
      
    </div>
  )
}

export default Product