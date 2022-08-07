import React, { useEffect, useState } from "react";
import Item from "./Item";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

// import required modules
import SwiperCore, {
  Keyboard,
  Scrollbar,
  Navigation,
  Pagination,
  EffectCoverflow,
  Autoplay,
} from "swiper";
SwiperCore.use([Autoplay]);

function AllItems({ activeItems }) {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  const [winWidth, detectHW] = useState(window.innerWidth);

  const detectSize = () => {
    detectHW(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", detectSize);

    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, [winWidth]);

  return (
    // <div className="grid-4">

    //   {activeItems?.ebooks?.map((v, key) => (
    //     <Item rating={v.rating} />
    //   ))}

    // </div>
    <>
      {winWidth < 600 ? (
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          autoplay={{ delay: 3000 }}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          modules={[EffectCoverflow, Pagination]}
          className="mobileSwiper"
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            swiper.params.navigation.nextEl = navigationNextRef.current;
          }}
        >
          <div className="next" ref={navigationNextRef}>
            <i className="uil uil-arrow-circle-right"></i>
          </div>
          <div className="prev" ref={navigationPrevRef}>
            <i className="uil uil-arrow-circle-left"></i>
          </div>
          {/* <SwiperSlide>
                <img src="https://cdn.magloft.com/github/swiper/images/page-001.jpg" />
              </SwiperSlide> */}
          {activeItems?.ebooks?.map((v, key) => (
            <SwiperSlide>
              {" "}
              <Item rating={v.rating} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <Swiper
          slidesPerView={1}
          spaceBetween={25}
          centeredSlides={false}
          slidesPerGroupSkip={1}
          grabCursor={true}
          autoplay={{ delay: 10000 }}
          keyboard={{
            enabled: true,
          }}
          breakpoints={{
            769: {
              slidesPerView: 4,
              slidesPerGroup: 2,
            },
          }}
          scrollbar={true}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            swiper.params.navigation.nextEl = navigationNextRef.current;
          }}
          modules={[Keyboard, Scrollbar, Navigation, Pagination]}
          className="mySwiper"
        >
          <div className="next" ref={navigationNextRef}>
            <i className="uil uil-arrow-circle-right"></i>
          </div>
          <div className="prev" ref={navigationPrevRef}>
            <i className="uil uil-arrow-circle-left"></i>
          </div>
          {/* <SwiperSlide>
                <img src="https://cdn.magloft.com/github/swiper/images/page-001.jpg" />
              </SwiperSlide> */}
          {activeItems?.map((v, key) => (
            <SwiperSlide key={key}>
              {" "}
              <Item data={v} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </>
  );
}

export default AllItems;
