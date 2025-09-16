import Breadcrum from "@/components/common/BreadCrum";
import { MdHome } from "react-icons/md";
import { IoFilter } from "react-icons/io5";
import { TfiLayoutGrid4Alt } from "react-icons/tfi";
import { TfiLayoutGrid2Alt } from "react-icons/tfi";
import Image from "next/image";
export default function ProductFilterContainer() {
    return (
        <>
            <div className="bg-white">
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
                    <div className="grid grid-cols-6 border-y border-gray-200 my-4">
                        <div className="flex justify-between py-[18px] pr-[18px] text-[14px] xl:text-[15px] text-black border-r border-gray-200">
                            <p>Hide Filters</p>
                            <IoFilter size={24} />
                        </div>
                        <div className="col-span-4 flex justify-between p-[18px] text-[20px] xl:text-[22px] text-black font-semibold border-r border-gray-200">
                            <p>Men's Shoes</p>
                            <div className="flex items-center gap-4">
                                <TfiLayoutGrid2Alt />
                                <TfiLayoutGrid4Alt />
                            </div>
                        </div>
                        <div className="flex justify-between p-[18px] pr-0 text-[14px] xl:text-[15px] text-black">
                            <p>Sort By:</p>
                            <div>
                                <select>
                                    <option>New Arrivals</option>
                                    <option>Best Match</option>
                                    <option>Price Low To High</option>
                                    <option>Price Hight To Low</option>
                                </select>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}