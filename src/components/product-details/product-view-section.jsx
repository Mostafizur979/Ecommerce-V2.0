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
import CustomModal from "../custom/CustomModal";
import { MdStraighten } from "react-icons/md";
import { BsRecycle, BsFire, BsBagPlus } from "react-icons/bs";
import { IoCheckmarkDone } from "react-icons/io5";
import { FaAngleRight } from "react-icons/fa6";
import ProductDescription from "../common/ProductDescription";

export default function ProductViewSection({ product }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [openSize, setOpenSize] = useState(false);
  const [openCare, setOpenCare] = useState(false);

  const keyProductData = [
    { key: "Price", value: product?.price - product?.discount },
    { key: "Regular Price", value: product?.price },
    { key: "Status", value: "In Stock" },
    { key: "Product Code", value: product?.id },
    { key: "Category", value: product?.categoryName },
    { key: "Sub Category", value: product?.subCategoryName },
  ];

  const sizes = [
    { id: 1, name: 38 },
    { id: 2, name: 39 },
    { id: 3, name: 40 },
    { id: 4, name: 41 },
    { id: 5, name: 42 },
    { id: 6, name: 43 },
  ];

  const colors = [
    { id: 1, name: "Black" },
    { id: 2, name: "Red" },
    { id: 3, name: "Maroon" },
    { id: 4, name: "White" },
  ];

  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
      {/* Image Section */}
      <div className="w-full max-w-[400px] mx-auto xl:mx-0">
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
          className="w-full aspect-square"
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
                  className="rounded-lg object-contain"
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
          className="my-3"
        >
          {product?.assets?.map((data, idx) => (
            <SwiperSlide key={idx} className="cursor-pointer">
              <div className="relative w-full aspect-square max-w-[100px] border border-gray-200 rounded-lg overflow-hidden">
                <Image
                  src={
                    data.image_url === "no-image"
                      ? IMAGE_PATH.no_image
                      : `data:image/png;base64,${data.image_url}`
                  }
                  alt={`thumb-${idx}`}
                  fill
                  className="object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Product Info Section */}
      <div className="xl:col-span-2 mt-8 xl:mt-0">
        <div>
          <h2 className="text-[20px] xl:text-[22px] text-[#3739BB]">
            {product?.name}
          </h2>

          {/* Key product data */}
          <div className="flex gap-2 flex-wrap mt-2">
            {keyProductData?.map((data, idx) => (
              <div
                key={idx}
                className="bg-gray-200 text-[14px] px-2 py-1 rounded-full"
              >
                <span className="text-[#666666]">{data?.key}: </span>
                <span className="text-black">{data?.value} </span>
              </div>
            ))}
          </div>

          {/* Variations */}
          <div className="mt-4">
            <Variation variations={sizes} title={"Sizes"} />
          </div>
          <div className="mt-4">
            <Variation variations={colors} title={"Colors"} />
          </div>

          {/* Size & Care Guide */}
          <div className="mt-5 flex gap-4 flex-wrap">
            <div
              onClick={() => setOpenSize(true)}
              className="flex items-center gap-2 text-black text-[14px] xl:text-[15px] cursor-pointer hover:underline"
            >
              <MdStraighten size={20} />
              <p>Size Guide</p>
            </div>
            <div
              onClick={() => setOpenCare(true)}
              className="flex items-center gap-2 text-black text-[14px] xl:text-[15px] cursor-pointer hover:underline"
            >
              <BsRecycle size={20} />
              <p>Care Guide</p>
            </div>
          </div>

          {/* Viewed & Popular */}
          <div className="mt-5 border border-gray-500 w-max p-2 rounded-[5px]">
            <div className="flex gap-2">
              <IoCheckmarkDone size={18} className="text-green-500" />
              <p className=" text-[12px] xl:text-[14px] text-black">
                <span className="font-semibold">Viewed:</span> 13 people
                recently VIEWED this product.
              </p>
            </div>
            <div className="mt-1 flex gap-2">
              <BsFire size={18} className="text-yellow-500" />
              <p className=" text-[12px] xl:text-[14px] text-black">
                <span className="font-semibold">Popular:</span> 0 people have
                BOUGHT this product.
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-5">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <button className="flex gap-2 items-center justify-center cursor-not-allowed bg-black text-white text-[14px] xl:text-[15px] w-full p-3 rounded-[10px]">
                <p>Buy Now</p>
                <FaAngleRight />
              </button>
              <button className="flex gap-2 items-center justify-center cursor-not-allowed border border-black text-black hover:bg-black hover:text-white text-[14px] xl:text-[15px] w-full p-3 rounded-[10px]">
                <p>Add To Cart</p>
                <BsBagPlus />
              </button>
            </div>
          </div>

          {/* Description */}
          <div className="mt-5">
            <ProductDescription descriptions={product?.descriptions} />
          </div>
        </div>
      </div>

      {/* Modals */}
      <CustomModal title={"Care Guide"} open={openCare} setOpen={setOpenCare}>
        <Image
          src={IMAGE_PATH.care}
          alt="care-guide"
          height={400}
          width={600}
          className="rounded-lg object-cover"
          priority
        />
      </CustomModal>

      <CustomModal title={"Size Guide"} open={openSize} setOpen={setOpenSize}>
        <Image
          src={IMAGE_PATH.size}
          alt="size-guide"
          height={400}
          width={600}
          className="rounded-lg object-cover"
          priority
        />
      </CustomModal>
    </div>
  );
}
