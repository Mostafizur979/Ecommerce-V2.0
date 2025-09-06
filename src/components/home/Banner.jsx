import Image from "next/image";
import { Autoplay, FreeMode, Pagination, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { IMAGE_PATH } from "@/assets";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";

const demoBannerImages = [
  IMAGE_PATH.banner_1,
  IMAGE_PATH.banner_2,
  IMAGE_PATH.banner_3,
];

const offerSliderBreakpoints = {
  320: {
    slidesPerView: 1,
    spaceBetween: 0,
  },
  768: {
    slidesPerView: 1,
    spaceBetween: 0,
  },
  1024: {
    slidesPerView: 1,
    spaceBetween: 16,
  },
};

const Banner = () => {

  return (
    <div className="flex w-full items-center mt-3">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        {/* Main Banner */}
        <div className="col-span-1 lg:col-span-3">
          <div className="relative w-full h-[200px] sm:h-[280px] md:h-[350px] lg:h-[488px]">
            <Swiper
              spaceBetween={10}
              slidesPerView={1}
              modules={[Pagination, FreeMode, Thumbs, Autoplay]}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{ clickable: true }}
              breakpoints={offerSliderBreakpoints}
              className="w-full h-full"
            >
              {demoBannerImages.map((image, idx) => (
                <SwiperSlide key={idx} className="w-full h-full">
                  <div className="relative w-full h-full">
                    <Image
                      src={image}
                      alt={`banner-${idx}`}
                      fill
                      className="rounded-lg object-fit"
                      priority
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* Side Banners */}
        <div className="flex flex-col gap-4 w-full">
          <div className="relative flex-1 min-h-[200px]">
            <Image
              src={IMAGE_PATH.banner_besides_1}
              alt="promo"
              fill
              className="object-cover rounded-md"
            />
          </div>
          <div className="relative flex-1 min-h-[200px]">
            <Image
              src={IMAGE_PATH.banner_besides_2}
              alt="promo"
              fill
              className="object-cover rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
