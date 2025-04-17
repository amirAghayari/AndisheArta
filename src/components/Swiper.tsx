import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const slides = [
  {
    id: 1,
    image: "/image.png",
  },
  {
    id: 2,
    image: "/image.png",
  },
  {
    id: 3,
    image: "/image.png",
  },
];

const CustomSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null); // برای کنترل Swiper

  const handleNavClick = (index) => {
    setActiveIndex(index);
    if (swiperRef.current) {
      swiperRef.current.slideToLoop(index); // استفاده از slideToLoop برای پشتیبانی از loop
    }
  };

  return (
    <div className=" relative ">
      <div className="flex before:content-[''] before:absolute before:w-116 before:h-138 before:-top-10 before:-left-6 before:z-0 before:bg-[url('bgPicture.png')]">
        {/* اسلایدر */}
        <div className="flex after:content-[''] after:absolute after:left-0 after:z-10 after:w-20 after:bg-[url('logo.svg')]">
          <div className="w-190">
            <Swiper
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
              slidesPerView={1}
              loop={true}
            >
              {slides.map((slide) => (
                <SwiperSlide key={slide.id}>
                  <img
                    src={slide.image}
                    alt={`Slide ${slide.id}`}
                    className="w-180"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Navigation دکمه‌های نقطه‌ای */}
          <div className="flex flex-col items-center justify-center py-8 gap-2">
            {slides.map((_, index) => (
              <div
                key={index}
                onClick={() => handleNavClick(index)}
                className={`cursor-pointer transition-all duration-300 z-10 ${
                  activeIndex === index
                    ? "w-2 h-14 bg-secondary rounded-full"
                    : "w-2 h-3 bg-accent rounded-full"
                }`}
              ></div>
            ))}
          </div>

          {/* <div>
        <img
          src="bgPicture.png"
          alt="#"
          className="absolute w-110 h-130 top-50 left-20 z-0"
        />
        <img src="logo.svg" alt="logo" className="absolute left-50 w-20" />
      </div> */}
        </div>
      </div>
    </div>
  );
};

export default CustomSlider;
