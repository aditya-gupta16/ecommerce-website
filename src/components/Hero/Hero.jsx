import React from 'react'
import Image from '../../assets/assets/women/women.png'
import Image2 from '../../assets/assets/women/women2.jpg';
import Image3 from '../../assets/assets/women/women3.jpg';
import Image4 from '../../assets/assets/women/women4.jpg';




import Slider from 'react-slick';

const ImageList = [
    {
        id: 1,
        img: Image,
        title: "Upto 50% off on all the men's ware",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo quisquam veniam, quasi vero non totam, laudantium doloribus vel quae esse recusandae consequuntur explicabo adipisci praesentium repellat magnam, ipsum quod tempora sed earum quas neque rerum expedita. Quos doloremque reprehenderit nesciunt debitis voluptas exercitationem? Dolore distinctio cupiditate voluptatum nobis totam soluta."
    },

    {
        id: 2,
        img: Image2,
        title: "Upto 85% off on all the women's ware",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo quisquam veniam, quasi vero non totam, laudantium doloribus vel quae esse recusandae consequuntur explicabo adipisci praesentium repellat magnam, ipsum quod tempora sed earum quas neque rerum expedita. Quos doloremque reprehenderit nesciunt debitis voluptas exercitationem? Dolore distinctio cupiditate voluptatum nobis totam soluta."
    },

    {
        id: 3,
        img: Image3,
        title: "Upto 70% off on all the kids' ware",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo quisquam veniam, quasi vero non totam, laudantium doloribus vel quae esse recusandae consequuntur explicabo adipisci praesentium repellat magnam, ipsum quod tempora sed earum quas neque rerum expedita. Quos doloremque reprehenderit nesciunt debitis voluptas exercitationem? Dolore distinctio cupiditate voluptatum nobis totam soluta."
    },

    {
        id: 4,
        img: Image4,
        title: "Upto 60% off on all the children's ware",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo quisquam veniam, quasi vero non totam, laudantium doloribus vel quae esse recusandae consequuntur explicabo adipisci praesentium repellat magnam, ipsum quod tempora sed earum quas neque rerum expedita. Quos doloremque reprehenderit nesciunt debitis voluptas exercitationem? Dolore distinctio cupiditate voluptatum nobis totam soluta."
    }
]



const Hero = ( {handleOrderPopup} ) => {
  
    var setting = {
        dots: false,
        arrows: false,
        Infinite: true,
        speed: 800,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: "linear",
        pauseOnHover: false,
        pauseOnFocus: true,

        
    }

  return (
    <div className='relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-slate-950 dark:text-white duration-300'>
        <div className='h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z[8]'></div>
        <div className='container pb-8 sm:pb-0'>
            <Slider {...setting}>   
                {ImageList.map((data)=>(
                    <div>
                        <div className='grid grid-cols-1 sm:grid-cols-2'>
                            <div className='flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-center sm:text-left order-2 sm:order-1 relative z-10'></div>
                            <h1 data-aos='zoom-out' data-aos-duration='500' data-aos-once='true' className='text-5xl sm:text-6xl lg:text-7xl font-bold'>
                                {data.title}
                            </h1>
                            <p data-aos='fade-up' data-aos-duration='500' data-aos-delay='100' className='text-sm'>
                                {data.description}
                            </p>

                            <div data-aos='fade-up' data-aos-duration='500' data-aos-delay='300'>
                                <button onClick={ ()=>{
                                    handleOrderPopup;
                                
                                }}
                                className='bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full'
                                >
                                    Order now
                                </button>
                            </div>

                        </div>

                        <div className='order-1 sm:-order-2'>
                            <div data-aos='zoom-in' data-aos-once='true' className='relative z-10'>
                                <img src={data.img} alt="" className='w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-105 lg:scale-120 object-contain mx-auto' />
                            </div>
                        </div>

                    </div>
                ))}
            </Slider>
        </div>
    </div>
  )
}

export default Hero