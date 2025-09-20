import { Swiper, SwiperSlide } from 'swiper/react';
import ProductCard from '../common/ProductCard';
// Import Swiper styles
import 'swiper/css';

export default function NewArrival({ products }) {
    console.log("new ", products)
    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={4}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            {
                products?.map((product, idx) => (
                 <SwiperSlide><ProductCard key={idx} data={product} /></SwiperSlide>
                ))
            }
        </Swiper>
    );
};