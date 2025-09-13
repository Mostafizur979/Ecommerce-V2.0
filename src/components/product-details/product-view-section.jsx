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
import Variation from "./variation";
import CustomModal from "../custom/Modal";
import { MdStraighten } from "react-icons/md";
import { BsRecycle } from "react-icons/bs";

export default function ProductViewSection({ product }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [openSize, setOpenSize] = useState(false);
  const [openCare, setOpenCare] = useState(false);
  const keyProductData = [
    {
      key: 'Price',
      value: product?.price - product?.discount,
    },
    {
      key: 'Regular Price',
      value: product?.price
    },
    {
      key: 'Status',
      value: "In Stock"
    },
    {
      key: 'Product Code',
      value: product?.id
    },
    {
      key: 'Category',
      value: product?.categoryName
    },
    {
      key: 'Sub Category',
      value: product?.subCategoryName
    }
  ]

  const sizes = [
    { id: 1, name: 38 },
    { id: 2, name: 39 },
    { id: 3, name: 40 },
    { id: 4, name: 41 },
    { id: 5, name: 42 },
    { id: 6, name: 43 }
  ]

  const colors = [
    { id: 1, name: 'Black' },
    { id: 2, name: 'Red' },
    { id: 3, name: 'Maroon' },
    { id: 4, name: 'White' }
  ]

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
      <div className="col-span-2">
        <div>
          <h2 className="text-[20px] xl:text-[22px] text-[#3739BB]">{product?.name}</h2>
          <div className="flex gap-2 flex-wrap mt-2">
            {
              keyProductData?.map((data, idx) => (
                <div key={idx} className="bg-gray-200 text-[14px] px-2 py-1 rounded-full">
                  <span className="text-[#666666]">{data?.key}: </span>
                  <span className="text-black">{data?.value} </span>
                </div>
              ))
            }
          </div>
          <div className="mt-4">
            <Variation variations={sizes} title={"Sizes"} />
          </div>
          <div className="mt-4">
            <Variation variations={colors} title={"Colors"} />
          </div>
          <div className="mt-5 flex gap-4">
            <div
              onClick={() => { setOpenSize(true) }}
              className="flex items-center gap-2 text-black text-[14px] xl:text-[15px] cursor-pointer hover:underline">
              <MdStraighten size={20} />
              <p>Size Guide</p>
            </div>
            <div
              onClick={() => { setOpenCare(true) }}
              className="flex items-center gap-2 text-black text-[14px] xl:text-[15px] cursoor-pointer hover:underline">
              <BsRecycle size={20} />
              <p>Care Guide</p>
            </div>
          </div>

        </div>
      </div>

      <CustomModal open={openCare} setOpen={setOpenCare} >
        <div className="p-4">
          <Image
            src={IMAGE_PATH.care}
            alt="care-guide"
            fill
            className="rounded-lg object-fit p-10"
            priority
          />
        </div>
      </CustomModal>


      <CustomModal title={"Size Guide"} open={openSize} setOpen={setOpenSize} >

        <div className="">
          <p>Hello</p>
          <Image
            src={IMAGE_PATH.size}
            alt="size-guide"
            height={400}
            width={600}
            className="rounded-lg object-cover"
            priority
          />
        </div>
      </CustomModal>

    </div>
  );
}
