'use client'
import Breadcrum from "@/components/common/BreadCrum";
import { MdHome } from "react-icons/md";
import { IoFilter } from "react-icons/io5";
import { TfiLayoutGrid4Alt } from "react-icons/tfi";
import { TfiLayoutGrid2Alt } from "react-icons/tfi";
import Image from "next/image";
import TopBar from "@/components/product-filter/topbar";
import { useProducts } from "@/hooks/useEcommerce";
import ProductSection from "@/components/common/ProductSection";
import PriceRangeSlider from "@/components/product-filter/PriceRangeSlider";
import SideBarFilter from "@/components/product-filter/SideBarFilter";
export default function ProductFilterContainer() {
    const { products } = useProducts();
    return (
        <>
            <div className="bg-[#F2F4F8]">
                <div className="max-w-[1350px] px-3 2xl:px-0 mx-auto pb-4">
                    <Breadcrum crums={[
                        { title: <MdHome />, href: "/" },
                        { title: "Category", href: "/category" },
                        { title: "Product", isCurrent: true }
                    ]} />
                    <div className="relative w-full h-[220px] xl:h-[475px]">
                        <Image
                            src={"/image.png"}
                            fill
                            className="object-fit"
                        />
                    </div>
                    <TopBar />

                    <div className="grid grid-cols-5 gap-3">
                        <div>
                            <div className="bg-white rounded-[5px] shadow-sm">
                                <PriceRangeSlider />
                            </div>
                            <div className="bg-white rounded-[5px] shadow-sm mt-2">
                                <SideBarFilter/>
                            </div>
                        </div>
                        <div className="col-span-4">
                            {
                                products ? <ProductSection
                                    products={products}
                                /> :
                                    <Loader />
                            }
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}