import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const TestimonialData = [
  {
    id: 1,
    name: "John Smith",
    image: "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Ym95fGVufDB8fDB8fHww",
    text: "Shopping here was a breeze! The website is user-friendly, and the product quality is top-notch. Delivery was quick and hassle-free. Highly recommended!",
    rating: 4.5,
  },
  {
    id: 2,
    name: "Mick Deo",
    image: "https://images.unsplash.com/photo-1519456264917-42d0aa2e0625?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJveXxlbnwwfHwwfHx8MA%3D%3D",
    text: "The team went above and beyond to ensure I received the right product. Amazing customer service and attention to detail. I'll definitely shop here again!",
    rating: 4.9,
  },
  {
    id: 3,
    name: "Donald",
    image: "https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8TWVufGVufDB8fDB8fHww",
    text: "I am impressed with the quality of the shirts I purchased. The fabric feels premium, and the fit is perfect. Worth every penny!",
    rating: 4.7,
  },
  {
    id: 4,
    name: "Badshah",
    image: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fE1lbnxlbnwwfHwwfHx8MA%3D%3D",
    text: "This store has a great balance of affordability and style. I love how trendy the designs are without breaking the bank. Fantastic experience!",
    rating: 4.7,
  },
  {
    id: 5,
    name: "Johnny ",
    image: "https://picsum.photos/seed/picsum/200/300",
    text: "Super fast delivery and reliable products. The shirts looked exactly like the pictures online. Truly satisfied!",
    rating: 4.7,
  },
];

const Testimonial = () => {
  var settings = {
    dots: true,
    infinite: true,
    arrows: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },

      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },

      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="py-4 m-10 ">
      <div className="container">
        <div className="text-center mb-10 mx-w-[600px] mx-auto ">
          <p data-aos="fade-up" className="text-lg text-primary ">
            What our customers are saying
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Testimonials
          </h1>
          <p data-aos="fade-up" className="text-sm p-2 text-gray-400 w-1/2 text-center mx-auto">
          "Join Our Growing Family of Happy Customers", "We take immense pride in the satisfaction of our customers. Your feedback helps us continue to improve and offer you the best products and services. Every review motivates us to keep delivering quality and excellence.
          </p>
        </div>

        <div data-aos="zoom-in">
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div className="my-6">
                <div
                  key={data.id}
                  className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:g-slate-600bg-primary/10 relative"
                >
                  <div className="mb-4">
                    <img
                      src={data.image}
                      alt=""
                      className="rounded-full w-20 h-20"
                    />
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-3">
                      <p className="text-xs dark:text-slate-300 text-black-80 dark:text-gray-500">
                        {data.text}
                      </p>
                      <h1 className="text-xl font-bold dark:text-slate-300 text-black/80 dark:text-light">
                        {data.name}
                      </h1>
                    </div>
                  </div>

                   <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                  </p>

                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
