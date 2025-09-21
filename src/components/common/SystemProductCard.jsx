import Image from "next/image";
import { useRouter } from "next/navigation";
import { IMAGE_PATH } from "@/assets";

export default function SystemProductCard({ data }) {
  const router = useRouter();
  const goTo = (id) => {
    router.push(`/product-details?id=${id}`);
  };

  return (
    <div className="bg-white overflow-hidden relative">
      {/* Image Section */}
      <div className="w-full p-4">
        <div
          className="w-[220px] h-[220px] cursor-pointer relative group rounded-md overflow-hidden"
          onClick={() => goTo(data?.id)}
        >
          {/* Product Image */}
          <Image
            src={
              data.Image === "no-image"
                ? IMAGE_PATH.no_image
                : `data:image/png;base64,${data?.image}`
            }
            fill
            className="object-contain duration-300 group-hover:scale-115"
            alt="category-image"
          />

          {/* Gray Overlay on Hover */}
          <div className="absolute inset-0 bg-gray-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <p
          className="w-full text-[15px] text-[#111111] truncate hover:text-red-600 cursor-pointer"
          onClick={() => goTo(data?.id)}
        >
          {data?.name}
        </p>

        {data?.price ? (
          <div className="flex items-center justify-between gap-3 mt-2">
            <div className="flex items-center gap-3">
              <p className="text-[17px] font-semibold text-[#111111]">
                {data?.price - data?.discount}
                <span className="text-[16px] font-extrabold">&#x09F3;</span>
              </p>
            </div>
          </div>
        ) : (
          <p className="mt-3 text-[14px] text-[#D51E08] font-semibold">
            Upcoming
          </p>
        )}
      </div>
    </div>
  );
}
