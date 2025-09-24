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
    <div className="w-full mt-3">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        {/* Main Banner */}
        <div className="col-span-1 lg:col-span-3">
          <div className="relative w-full h-[200px] sm:h-[280px] md:h-[350px] lg:h-[488px]">
            {demoBannerImages?.length > 0 ? (
              <Swiper
                spaceBetween={10}
                slidesPerView={1}
                modules={[
                  Pagination,
                  FreeMode,
                  Thumbs,
                  Autoplay,
                ]}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                pagination={{ clickable: true }}
                breakpoints={offerSliderBreakpoints}
                className="w-full h-full"
              >
                {demoBannerImages
                  ?.map((item, idx) => (
                    <SwiperSlide
                      key={idx}
                      className="w-full h-full"
                    >
                      <div className="relative w-full h-full  ">
                        <Image
                          src={item}
                          fill
                          alt="Banner"
                          className="rounded-lg object-fit"
                        />
                      </div>
                    </SwiperSlide>
                  ))}
              </Swiper>
            ) : (
              <CustomShimmer />
            )}
          </div>
        </div>

        <div className="grid grid-rows-2 gap-4">
          <div className="relative w-full min-h-[200px]">
 
              <Image
                src={IMAGE_PATH.banner_besides_1}
                fill
                alt={"banner-1"}
                className="rounded-lg object-cover "
              />

          </div>
          <div className="relative w-full min-h-[200px]">
              <Image
                src={IMAGE_PATH.banner_besides_2}
                fill
                alt={"banner-2"}
                className="rounded-lg object-cover "
              />

          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
