// NewArrival.jsx
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SystemProductCard from "../common/SystemProductCard";
import { FaAnglesLeft, FaAnglesRight } from "react-icons/fa6";
export default function NewArrival({ products }) {
    const swiperRef = useRef(null);

    return (
        <div className="relative">
            <Swiper
                spaceBetween={12}
                breakpoints={{
                    1280: { slidesPerView: 5 }, // xl and above
                    1024: { slidesPerView: 4 }, // lg
                    768: { slidesPerView: 3 },  // md
                    0: { slidesPerView: 2 },    // default (smaller screens)
                }}
                onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                }}
                className="pb-10"
            >
                {products?.map((product, idx) => (
                    <SwiperSlide key={idx}>
                        <SystemProductCard data={product} />
                    </SwiperSlide>
                ))}
                <SwiperSlide>
                    <div className="mt-[160px] text-[15px] text-center text-black hover:underline">
                        <p>View All</p>
                    </div>
                </SwiperSlide>
            </Swiper>

            {/* Left Button */}
            <button
                onClick={() => swiperRef.current?.slidePrev()}
                className="bg-white py-25 absolute top-1/2 -translate-y-1/2 left-[-30px] 
                   text-black text-[24px] z-[20] cursor-pointer p-2"
            >
                <FaAnglesLeft />
            </button>

            {/* Right Button */}
            <button
                onClick={() => swiperRef.current?.slideNext()}
                className="bg-white py-25 absolute top-1/2 -translate-y-1/2 right-[-30px] 
                   text-black text-[24px] z-[20] cursor-pointer p-2"
            >
                <FaAnglesRight />
            </button>
        </div>
    );
}
