"use client";
import { useState } from "react";
import Image from "next/image";
import { Autoplay, FreeMode, Pagination, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { IMAGE_PATH } from "@/assets";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/thumbs";

export default function ProductViewSection({ product }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="grid grid-cols-1 xl:grid-cols-3">
      <div className="relative h-[400px] w-[400px]">
        {/* Main Swiper */}
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          modules={[Pagination, FreeMode, Thumbs, Autoplay]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          thumbs={{ swiper: thumbsSwiper }}
          className="w-full h-full"
        >
          {product?.assets?.map((data, idx) => (
            <SwiperSlide key={idx} className="w-full h-full">
              <div className="relative w-full h-full">
                <Image
                  src={
                    data.image_url === "no-image"
                      ? IMAGE_PATH.no_image
                      : `data:image/png;base64,${data.image_url}`
                  }
                  alt={`banner-${idx}`}
                  fill
                  className="rounded-lg object-cover"
                  priority
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Thumbnails Swiper */}
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Thumbs]}
          className="mt-3"
        >
          {product?.assets?.map((data, idx) => (
            <SwiperSlide key={idx} className="cursor-pointer">
              <div className="relative w-[100px] h-[100px] border border-gray-200">
                <Image
                  src={
                    data.image_url === "no-image"
                      ? IMAGE_PATH.no_image
                      : `data:image/png;base64,${data.image_url}`
                  }
                  alt={`thumb-${idx}`}
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
