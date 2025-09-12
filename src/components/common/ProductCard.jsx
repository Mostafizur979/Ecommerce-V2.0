
import Image from "next/image";
import { useRouter } from "next/navigation";
import { IMAGE_PATH } from "@/assets";
import { FaShoppingCart } from "react-icons/fa";
export default function ProductCard({ data }) {
    const router = useRouter();
    const goTo = (id) => {
        router.push(`/product-details?id=${id}`);
    }
    return (
        <div className="bg-white rounded-lg shadow-sm overflow-hidden relative">
            <div className="w-full p-4 border-b-2 border-[#F2F4F8]">
                <div className="w-full h-[180px] md:h-[200px] lg:h-[220px] cursor-pointer relative" onClick={() => { goTo(data?.id) }}>
                    <Image
                        src={data.Image == "no-image" ? IMAGE_PATH.no_image : `data:image/png;base64,${data?.image}`}
                        fill
                        className="object-contain cursor-pointer"
                        alt="category-image"
                    />
                </div>
            </div>
            <div className="p-4">
                <p className="w-full text-[15px] text-[#111111] truncate hover:text-red-600 cursor-pointer" onClick={() => { goTo(data?.id) }}>{data?.name}</p>
                {data?.Price ? <div className="flex items-center justify-between gap-3 mt-2">
                    <div className="flex items-center gap-3 ">
                        <p className="text-[17px] font-semibold text-[#D51E0B]">
                            {data?.price}<span className="text-[16px] font-extrabold">&#x09F3;</span>
                        </p>
                        <p className="text-[13px] text-[#666666] line-through">
                            {data?.price}&#x09F3;
                        </p>
                    </div>
                    <div className="cursor-pointer  text-[#4683a7] rounded-[10px]"><FaShoppingCart size={18} /></div>
                </div> : <p className="mt-3 text-[14px] text-[#D51E08] font-semibold">Upcoming</p>}
            </div>
            <div className="absolute top-[15px] z-[5]">
                <p className="py-[1px] px-[10px] bg-[#6E2594] text-[12px] text-white rounded-r-full">
                    Save: 1490<span className="text-[10px] font-extrabold">&#x09F3;</span> (-10%)
                </p>
            </div>
        </div>
    )
}